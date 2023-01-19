async function getPhotographers() {
  const request = await fetch("./../../data/photographers.json");
  const { photographers } = await request.json();
  return photographers;
}

async function getMedia() {
  const request = await fetch("./../../data/photographers.json");
  const { media } = await request.json();
  return media;
}

function getIdFromUrl() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  if (id && !isNaN(Number(id)) && id > 0) {
    return Number(id);
  }
  return null;
}

async function getPhotographerInfo() {
  const id = getIdFromUrl();
  const photographers = await getPhotographers();
  const photographerInfo = photographers.find(
    (photographer) => photographer.id === id
  );
  return photographerInfo;
}

async function addPhotographerInHeader() {
  const photographerInfo = await getPhotographerInfo();
  const photographerHeader = document.getElementById("photograph-header");
  const photographerModel = new MediaFactory(photographerInfo);
  console.log(photographerModel);
  photographerModel.photographerHeader(photographerHeader, photographerInfo);
}

async function getGoodMediasWithId() {
  const id = getIdFromUrl();
  const media = await getMedia();
  const mediaPhotographer = media.filter(
    (element) => element.photographerId === id
  );
  return mediaPhotographer;
}

/** *************|Name on contact form|***************/
async function nameOnContactForm() {
  const photographerInfo = await getPhotographerInfo();
  const nameContactForm = document.getElementById("name-contact-form");
  nameContactForm.textContent = `
${photographerInfo.name}
`;
}

async function allMedias(media) {
  const photographCarrousel = document.getElementById("allMedias");
  const photographerInfo = await getPhotographerInfo();
  media = media ?? (await getTagLikes());
  const typeMediaModel = new TypeMediaFactory(photographerInfo);
  typeMediaModel.typeMediaCards(photographCarrousel, media, photographerInfo);
}

/** *************|Fonctions lié au changements d'images sur la modal|***************/

function previousImage(indexImg, goodMedias, photographerInfo, imgAndTitle) {
  if (indexImg === 0) {
    indexImg = goodMedias.length - 1;
  } else {
    indexImg--;
  }
  buildImageZoom(goodMedias, photographerInfo, imgAndTitle, indexImg);
  return indexImg;
}

function nextImage(indexImg, goodMedias, photographerInfo, imgAndTitle) {
  if (indexImg === goodMedias.length - 1) {
    indexImg = 0;
  } else {
    indexImg++;
  }
  buildImageZoom(goodMedias, photographerInfo, imgAndTitle, indexImg);
  return indexImg;
}

function buildImageZoom(goodMedias, photographerInfo, element, index) {
  element.innerHTML = `
  ${
    goodMedias[index].image
      ? `<img src="./assets/images/media/${photographerInfo.name}/${goodMedias[index].image}" id="zoom-img" alt="photo de ${photographerInfo.name}">`
      : `<video  controls autoplay id="zoom-video"><source src="assets/images/media/${photographerInfo.name}/${goodMedias[index].video}" id="zoom-video" type="video/mp4" alt="photo de ${photographerInfo.name}"></video>`
  }
<h2>${goodMedias[index].title}</h2>
  `;
}

/** *************|Fonction INIT pour appeler les fonctions|***************/
function init() {
  allMedias();
  likeAndPrice();
  getAllLikes();
  addPhotographerInHeader();
  nameOnContactForm();
}

init();
