/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Retrieve all likes for each medias
async function getAllLikes () {
  const goodMedias = await getGoodMediasWithId()
  let likes = 0
  for (let i = 0; i < goodMedias.length; i++) {
    likes += goodMedias[i].likes
  }
  return likes
}

// Display like and price elements
async function likeAndPrice () {
  const allLikes = await getAllLikes()
  const photographerInfo = await getPhotographerInfo()
  const likesPrice = document.getElementById('likes-price')
  likesPrice.innerHTML = `
        <div class="like">
          <p id="allNumberLike">${allLikes}</p>
          <img src="/assets/icons/heart-solid.svg" alt="Bouton like">
        </div>
        
        <div class="price-day">
          <p>${photographerInfo.price}€ / jour</p>
        </div>
      `
}

// Increase or decrease likes
async function increaseLikes (id) {
  // Get the current heart
  const heartImg = document.getElementById(`heart-card-${id}`)
  const likeElement = heartImg.previousElementSibling
  const allNumberLike = document.getElementById('allNumberLike')

  // If the user has like the content
  if (heartImg.classList.contains('liked')) {
    // Remove a like on the current media
    let likeCount = likeElement.textContent
    likeElement.textContent = --likeCount
    heartImg.classList.remove('liked')
    // Remove a like in the general counter
    let allLikes = allNumberLike.textContent
    allNumberLike.textContent = --allLikes
  } else {
    // Increase the like on the current media
    let likeCount = likeElement.textContent
    likeElement.textContent = ++likeCount
    heartImg.classList.add('liked')
    // Increase in the genral counter
    let allLikes = allNumberLike.textContent
    allNumberLike.textContent = ++allLikes
  }
}
