async function getAllLikes() {
  const goodMedias = await getGoodMediasWithId();
  let likes = 0;
  for (let i = 0; i < goodMedias.length; i++) {
    likes += goodMedias[i].likes;
  }
  return likes;
}

async function likeAndPrice() {
  const allLikes = await getAllLikes();
  const photographerInfo = await getPhotographerInfo();
  const likesPrice = document.getElementById("likes-price");
  likesPrice.innerHTML = `
        <div class="like">
          <p id="allNumberLike">${allLikes}</p>
          <img src="./assets/icons/heart-solid.svg" alt="Bouton like">
        </div>
        
        <div class="price-day">
          <p>${photographerInfo.price}€ / jour</p>
        </div>
      `;
}

async function increaseLikes(id) {
  // Récupérez les éléments de l'interface utilisateur
  const heartImg = document.getElementById(`heart-card-${id}`);
  const likeElement = heartImg.previousElementSibling;
  const allNumberLike = document.getElementById("allNumberLike");

  // Vérifiez si l'utilisateur a déjà liké
  if (heartImg.classList.contains("liked")) {
    // Si oui, retirez le like et mettez à jour l'interface utilisateur
    let likeCount = likeElement.textContent;
    likeElement.textContent = --likeCount;
    heartImg.classList.remove("liked");

    let allLikes = allNumberLike.textContent;
    allNumberLike.textContent = --allLikes;
  } else {
    // Si non, incrémentez le nombre de likes et enregistrez le fait que l'utilisateur a liké
    let likeCount = likeElement.textContent;
    likeElement.textContent = ++likeCount;
    heartImg.classList.add("liked");

    let allLikes = allNumberLike.textContent;
    allNumberLike.textContent = ++allLikes;
  }
}
