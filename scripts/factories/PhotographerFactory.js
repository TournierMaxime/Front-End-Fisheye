/* eslint-disable no-unused-vars */
class PhotographerFactory {
  constructor(data) {
    Object.assign(this, data);
  }

  createCard(photographer) {
    return `
      <article>
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
    `;
  }

  photographerHeader(target, photographer) {
    target.innerHTML = `
          <div>
            <h2 class="test">${photographer.name}</h2>
            <h3>${photographer.city} ${photographer.country}</h3>
            <p>${photographer.tagline}</p>
            <p class="price">${photographer.price}€/jour</p>
          </div>
          <div id="bloc-contact">
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
          </div>
          <div id="bloc-picture">
            <img src="assets/photographers/${photographer.portrait}" alt="photo de ${photographer.name}">
          </div>
        `;
  }
  createCards(target, data) {
    target.innerHTML = data.map(this.createCard).join("");
  }
}
