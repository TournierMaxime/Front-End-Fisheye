/* eslint-disable no-unused-vars */
class PhotographerFactory {
  constructor (data) {
    Object.assign(this, data)
  }

  // Single card photographer
  createCard (photographer) {
    return `
      <article aria-label="Fiche de ${photographer.name}">
        <a href="/photographer.html?id=${photographer.id}" tabindex="0" aria-label="Détails sur ${photographer.name}">
         <img src="/assets/photographers/${photographer.portrait}" alt="photo de ${photographer.name}">
          <h2 tabindex="0">${photographer.name}</h2>
        </a>
        <div>
          <h3 tabindex="0">${photographer.city} ${photographer.country}</h3>
          <p tabindex="0">${photographer.tagline}</p>
          <p class="price" tabindex="0">${photographer.price}€/jour</p>
        </div>
      </article>
    `
  }

  // All cards photographers
  createCards (target, data) {
    target.innerHTML = data.map(this.createCard).join('')
  }

  // Banner photographer portfolio
  photographerHeader (target, photographer) {
    target.innerHTML = `
          <div aria-label="Fiche de ${photographer.name}">
            <h2 tabindex="0" class="test">${photographer.name}</h2>
            <h3 tabindex="0">${photographer.city} ${photographer.country}</h3>
            <p tabindex="0">${photographer.tagline}</p>
            <p tabindex="0" class="price">${photographer.price}€/jour</p>
          </div>
          <div id="bloc-contact">
            <button tabindex="0" class="contact_button" onclick="displayModal()">Contactez-moi</button>
          </div>
          <div id="bloc-picture">
            <img tabindex="0" src="/assets/photographers/${photographer.portrait}" alt="photo de ${photographer.name}">
          </div>
        `
  }
}
