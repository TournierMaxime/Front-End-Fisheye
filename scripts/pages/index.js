async function displayPhotographers() {
  const photographers = await getPhotographers();
  const photographersSection = document.querySelector(".photographer_section");
  const photographerModel = new PhotographerFactory(photographers);
  photographerModel.createCards(photographersSection, photographers);
}
displayPhotographers();
