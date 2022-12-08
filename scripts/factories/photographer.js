export default function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const link = document.createElement("a");
    const desc = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const location = `${city}, ${country}`;
    const prix = `${price}€/jour`;
    img.setAttribute("src", picture);
    link.classList.add("link");
    link.href = `/photographer.html?id=${id}`;
    img.alt = `${name}`;
    desc.classList.add("description");
    p2.classList.add("price");
    h2.textContent = name;
    h3.textContent = location;
    p1.textContent = tagline;
    p2.textContent = prix;
    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(link);
    article.appendChild(desc);
    link.appendChild(img);
    link.appendChild(h2);
    desc.appendChild(h3);
    desc.appendChild(p1);
    desc.appendChild(p2);
    return article;
  }
  return { name, id, picture, tagline, price, getUserCardDOM };
}
