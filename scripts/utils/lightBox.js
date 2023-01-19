/** *************|Zoom Image|***************/
async function zoom(id) {
  const photographerInfo = await getPhotographerInfo();
  const goodMedias = await getGoodMedias();
  const imgAndTitle = document.getElementById("image-title");
  const zoomModal = document.getElementById("zoom-modal");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  const thePicture = goodMedias.find((element) => element.id === id);
  let indexImg = goodMedias.indexOf(thePicture);
  zoomModal.style.display = "flex";
  buildImageZoom(goodMedias, photographerInfo, imgAndTitle, indexImg);

  // clic sur les boutons flêches
  leftArrow.addEventListener("click", () => {
    indexImg = previousImage(
      indexImg,
      goodMedias,
      photographerInfo,
      imgAndTitle
    );
  });

  rightArrow.addEventListener("click", () => {
    indexImg = nextImage(indexImg, goodMedias, photographerInfo, imgAndTitle);
  });

  // flêches du clavier
  window.addEventListener("keydown", (e) => {
    if (zoomModal.style.display === "flex" && e.key === "ArrowLeft") {
      indexImg = previousImage(
        indexImg,
        goodMedias,
        photographerInfo,
        imgAndTitle
      );
    } else if (zoomModal.style.display === "flex" && e.key === "ArrowRight") {
      indexImg = nextImage(indexImg, goodMedias, photographerInfo, imgAndTitle);
    }
  });
  noScroll();
}

/** *************|Pas de scroll quand la modal est ouverte|***************/
function noScroll() {
  const zoomModal = document.getElementById("zoom-modal");
  const body = document.querySelector("body");
  if (zoomModal.style.display === "flex") {
    body.style.overflowY = "hidden";
  }
  body.style.overflowY = "hidden";
}

/** *************|Fermer la modal|***************/
function closeZoom() {
  const zoomModal = document.getElementById("zoom-modal");
  const body = document.querySelector("body");
  zoomModal.style.display = "none";
  body.style.overflowY = "auto";
}

/** *************|Fermer la modal avec la touche echap|***************/
window.addEventListener("keydown", (e) => {
  const zoomModal = document.getElementById("zoom-modal");
  // eslint-disable-next-line no-cond-assign
  if ((zoomModal.style.display = "flex" && e.key === "Escape")) {
    closeZoom();
  }
});

/** *************|Fermer la modal en cliquant à coté |***************/
window.addEventListener("click", (event) => {
  const modal = document.getElementById("zoom-modal");
  if (event.target === modal) {
    closeZoom();
  }
});
