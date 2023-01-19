class MediaFactory {
  constructor(data) {
    Object.assign(this, data);
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
}

class TypeMediaFactory extends MediaFactory {
  constructor(data) {
    super(data);
    this.type = data.type;
  }
  typeMediaCards(target, dataMedia, dataPhotographer) {
    target.innerHTML = dataMedia
      .map(
        (mediaPhoto) =>
          `
      <article class="media-card"  > 
        <div class = "bloc-img">
        ${
          mediaPhoto.image
            ? `<button onclick="zoom(${mediaPhoto.id})"> <img class="for-zoom"    src="assets/images/media/${dataPhotographer.name}/${mediaPhoto.image}" alt="photo de ${dataPhotographer.name}-${mediaPhoto.title}"></img></button>`
            : `<button onclick="zoom(${mediaPhoto.id})"><img class="arrow-video" src="./assets/icons/play-button-svgrepo-com.svg" alt=""><video class="for-zoom"><source src="assets/images/media/${dataPhotographer.name}/${mediaPhoto.video}" type="video/mp4" alt="vidéo de ${dataPhotographer.name}"></video></button>`
        }
        
        </div>
      
        <div class="text-likes">
          <p>${mediaPhoto.title}</p>
          <div class ="heart-likes">
            <p class="p-likes" id="p-likes">${mediaPhoto.likes}</p>
            <button class="like-test" name="bouton j'aime"  onclick="increaseLikes(${
              mediaPhoto.id
            })"  id="heart-card-${mediaPhoto.id}">
              <img src="./assets/icons/heart-solid-red.svg" alt="bouton like en forme de coeur">
            </button>
          </div>
        </div>
      
      </article>
      `
      )

      .join("");
  }
}
