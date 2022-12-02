function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p2.classList.add("price");
    const location = `${city}, ${country}`;
    const prix = `${price}€/jour`;
    h2.textContent = name;
    h3.textContent = location;
    p1.textContent = tagline;
    p2.textContent = prix;
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    return article;
  }
  return { name, id, picture, location, tagline, price, getUserCardDOM };
}
