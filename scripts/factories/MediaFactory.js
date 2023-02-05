/* eslint-disable no-useless-constructor */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class MediaFactory extends PhotographerFactory {
  constructor (data) {
    super(data)
  }

  // Medias photographers (images and videos)
  typeMediaCards (target, dataMedia, dataPhotographer) {
    target.innerHTML = dataMedia
      .map(
        (mediaPhoto) =>
          `
      <article class="media-card" aria-label="Media ${mediaPhoto.title}"> 
        <div class="bloc-img">
        ${
          mediaPhoto.image
            ? `<button onclick="zoom(${mediaPhoto.id})"> <img class="for-zoom" src="/assets/images/media/${dataPhotographer.name}/${mediaPhoto.image}" alt="photo de ${dataPhotographer.name}-${mediaPhoto.title}"></img></button>`
            : `<button onclick="zoom(${mediaPhoto.id})"><img class="arrow-video" src="/assets/icons/play-button-svgrepo-com.svg" alt="${mediaPhoto.title}"><video class="for-zoom"><source src="/assets/images/media/${dataPhotographer.name}/${mediaPhoto.video}" type="video/mp4" alt="vidéo de ${dataPhotographer.name}"></video></button>`
        }
        
        </div>
      
        <div class="text-likes">
          <p aria-label="Media ${mediaPhoto.title}" tabindex="0">${mediaPhoto.title}</p>
          <div class ="heart-likes" aria-label="${mediaPhoto.likes}" tabindex="0">
            <p class="p-likes" id="p-likes">${mediaPhoto.likes}</p>
            <button class="like-test" name="bouton j'aime" onclick="increaseLikes(${
              mediaPhoto.id
            })"  id="heart-card-${mediaPhoto.id}">
              <img src="/assets/icons/heart-solid-red.svg" alt="bouton like en forme de coeur">
            </button>
          </div>
        </div>
      
      </article>
      `
      )

      .join('')
  }
}
