/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Retrieve medias data
async function getMedia() {
  const request = await fetch("./../../data/photographers.json");
  const { media } = await request.json();
  return media;
}

// Get the photographer ID
function getIdFromUrl() {
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  if (id && !isNaN(Number(id)) && id > 0) {
    return Number(id);
  }
  return null;
}

// Get data for one photographer
async function getPhotographerInfo() {
  const id = getIdFromUrl();
  const photographers = await getPhotographers();
  const photographerInfo = photographers.find(
    (photographer) => photographer.id === id
  );
  return photographerInfo;
}

// Retrieve data for one photographer in the banner
async function addPhotographerInHeader() {
  const photographerInfo = await getPhotographerInfo();
  const photographerHeader = document.getElementById("photograph-header");
  const photographerModel = new PhotographerFactory(photographerInfo);
  photographerModel.photographerHeader(photographerHeader, photographerInfo);
}

// Retrieve the correct medias associate with the good photographer
async function getGoodMediasWithId() {
  const id = getIdFromUrl();
  const media = await getMedia();
  const mediaPhotographer = media.filter(
    (element) => element.photographerId === id
  );
  return mediaPhotographer;
}

// Retrieve the correct name of the photographer in the contact form
async function nameOnContactForm() {
  const photographerInfo = await getPhotographerInfo();
  const nameContactForm = document.getElementById("name-contact-form");
  nameContactForm.textContent = `
${photographerInfo.name}
`;
}

// Retrieve the medias in the caroussel
async function allMedias(media) {
  const photographCarrousel = document.getElementById("allMedias");
  const photographerInfo = await getPhotographerInfo();
  media = media ?? (await getTagLikes());
  const typeMediaModel = new MediaFactory(photographerInfo);
  typeMediaModel.typeMediaCards(photographCarrousel, media, photographerInfo);
}

// Back to the previous image
function previousImage(indexImg, goodMedias, photographerInfo, imgAndTitle) {
  if (indexImg === 0) {
    indexImg = goodMedias.length - 1;
  } else {
    indexImg--;
  }
  buildImageZoom(goodMedias, photographerInfo, imgAndTitle, indexImg);
  return indexImg;
}

// Go to the next image
function nextImage(indexImg, goodMedias, photographerInfo, imgAndTitle) {
  if (indexImg === goodMedias.length - 1) {
    indexImg = 0;
  } else {
    indexImg++;
  }
  buildImageZoom(goodMedias, photographerInfo, imgAndTitle, indexImg);
  return indexImg;
}

// Lightbox display elements
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
