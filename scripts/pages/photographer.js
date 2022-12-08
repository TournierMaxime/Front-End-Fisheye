//Mettre le code JavaScript lié à la page photographer.html
import { getPhotographers } from "./index.js";
import { mediasFactory } from "../factories/photographerMedias.js";
const search_params = new URLSearchParams(window.location.search);
const photographerId = search_params.get("id");

async function displayData(photographers) {
  //const photographersHeader = document.querySelector(".photograph-header");
  photographers.forEach((photographer) => {
    if (photographer.id == photographerId) {
      const photographerModel = mediasFactory(photographer);
      photographerModel.getUserMediaCardDOM();
      //photographersHeader.appendChild(userCardDOM);
    }
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
