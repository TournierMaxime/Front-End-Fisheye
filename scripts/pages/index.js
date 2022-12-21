import PhotographerFactory from "../factories/photographerHomePage.js";

async function getPhotographers() {
  const request = await fetch("./../../data/photographers.json");
  const data = await request.json();

  return data;
}

async function userDisplay() {
  const photographerInfo = await getPhotographers();
  const photographersSection = document.querySelector(".photographer_section");
  const photographerModel = new PhotographerFactory(
    photographerInfo.photographers
  );
  photographerModel.getUsersCardDOM(
    photographersSection,
    photographerInfo.photographers
  );
}
userDisplay();
