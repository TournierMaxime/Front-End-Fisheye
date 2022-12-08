export { mediasFactory };
function mediasFactory(data) {
  const { name, city, country, tagline, portrait, price } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserMediaCardDOM() {
    //Variables pour la création d'éléments HTML
    const main = document.querySelector("#main");
    const photographHeader = document.querySelector(".photograph-header");
    const detailsPhotographer = document.createElement("div");
    detailsPhotographer.classList.add("photographer-description");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const description = document.createElement("p");
    const button = document.querySelector(".contact_button");
    const img = document.createElement("img");

    const bodyPhotographer = document.createElement("div");
    bodyPhotographer.classList.add("photographer-body");
    const sort = document.createElement("h4");

    //Assignation des valeurs aux attributs img, h1, h2, p
    h1.textContent = name;
    h2.textContent = `${city}, ${country}`;
    description.textContent = tagline;
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);

    main.appendChild(bodyPhotographer);
    photographHeader.appendChild(detailsPhotographer);
    photographHeader.appendChild(img);
    photographHeader.appendChild(button);
    detailsPhotographer.append(h1);
    detailsPhotographer.append(h2);
    detailsPhotographer.append(description);
    img.before(button);

    sort.textContent = "Trier par";

    bodyPhotographer.appendChild(sort);

    return photographHeader;
  }

  return { name, picture, getUserMediaCardDOM };
}
