async function getPhotographers() {
  const request = await fetch("./../../data/photographers.json");
  const data = await request.json();
  const photographers = data.photographers;
  // et bien retourner le tableau photographers seulement une fois récupéré
  return { photographers };
}

async function getMedia() {
  const request = await fetch("./../../data/photographers.json");
  const data = await request.json();
  const media = data.media;

  // et bien retourner le tableau photographers seulement une fois récupéré
  return { media };
}

function getIdFromUrl() {
  const search_params = new URLSearchParams(window.location.search);
  search_params.get("id");
  if (search_params.has("id")) {
    let id = Number(search_params.get("id"));
    if (typeof id === "number" && id > 0) {
      return id;
    }
  }
  return null;
}

async function getPhotographerInfo() {
  const id = getIdFromUrl();
  const thePhotographers = await getPhotographers();
  const photographerInfo = thePhotographers.photographers.find(
    (element) => element.id === id
  );
  return photographerInfo;
}

async function addPhotographerInHeader() {
  const photographerInfo = await getPhotographerInfo();
  const photographerHeader = document.getElementById("photograph-header");
  const photographerModel = new MediaFactory(photographerInfo);
  photographerModel.photographerHeaderFactory(
    photographerHeader,
    photographerInfo
  );
}

async function getGoodMediasWithId() {
  const id = getIdFromUrl();
  const allMedia = await getMedia();
  const mediaPhotographer = allMedia.media.filter(
    (element) => element.photographerId === id
  );
  return mediaPhotographer;
}

async function getTagLikes() {
  const goodMedias = await getGoodMediasWithId();
  return goodMedias.sort((a, b) => b.likes - a.likes);
}

async function getTagDates() {
  const goodMedias = await getGoodMediasWithId();
  return goodMedias.sort(
    (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
  );
}

async function getTagTitles() {
  const goodMedias = await getGoodMediasWithId();
  return goodMedias.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (b.title > a.title) {
      return -1;
    } else {
      return 0;
    }
  });
}

async function getGoodMedias() {
  const selectFilters = document.getElementById("pet-select");
  let goodMedias = [];
  if (selectFilters.value === "popularity") {
    goodMedias = await getTagLikes();
  }
  if (selectFilters.value === "date") {
    goodMedias = await getTagDates();
  }
  if (selectFilters.value === "title") {
    goodMedias = await getTagTitles();
  }
  return goodMedias;
}

async function carrousel(media) {
  const photographCarrousel = document.getElementById("carrousel");
  const photographerInfo = await getPhotographerInfo();
  media = media ?? (await getTagLikes());
  carrouselFactory(photographCarrousel, media, photographerInfo);
}

async function onSelectOption() {
  const goodMedias = await getGoodMedias();
  await carrousel(goodMedias);
}

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
      <img src="./assets/icons/heart-solid.svg" alt="">
    </div>
    
    <div class="price-day">
      <p>${photographerInfo.price}€ / jour</p>
    </div>
  `;
}

/** *************|Name on contact form|***************/
async function nameOnContactForm() {
  const photographerInfo = await getPhotographerInfo();
  const nameContactForm = document.getElementById("name-contact-form");
  nameContactForm.textContent = `
${photographerInfo.name}
`;
}

/** *************|Fonction INIT pour appeler les fonctions|***************/
function init() {
  carrousel();
  likeAndPrice();
  getAllLikes();
  addPhotographerInHeader();
  nameOnContactForm();
}

init();
