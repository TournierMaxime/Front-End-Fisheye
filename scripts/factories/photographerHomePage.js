export default class PhotographerFactory {
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
    this.alt = data.alt;
    this._portrait = data.portrait;
  }

  get portrait() {
    return `assets/photographers/${this._portrait}`;
  }
  getUsersCardDOM(target, data) {
    target.innerHTML = data
      .map(
        (photographer) =>
          `
    <article >
      <a href="./photographer.html?id=${photographer.id}">
       <img src="assets/photographers/${photographer.portrait}" alt="photo de ${photographer.name}">
        <h2>${photographer.name}</h2>
      </a>
      <div>
        <h3>${photographer.city} ${photographer.country}</h3>
        <p>${photographer.tagline}</p>
        <p class="price">${photographer.price}€/jour</p>
      </div>
    </article>
    `
      )
      .join("");
  }
}
