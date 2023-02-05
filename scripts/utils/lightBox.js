/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Lightbox function
async function zoom (id) {
  // Retrieve datas
  const photographerInfo = await getPhotographerInfo()
  const goodMedias = await getGoodMedias()
  // DOM elements
  const imgAndTitle = document.getElementById('image-title')
  const zoomModal = document.getElementById('zoom-modal')
  const leftArrow = document.getElementById('left-arrow')
  const rightArrow = document.getElementById('right-arrow')
  // Get the correct media
  const thePicture = goodMedias.find((element) => element.id === id)
  let indexImg = goodMedias.indexOf(thePicture)
  zoomModal.style.display = 'flex'
  // Display the correct media
  buildImageZoom(goodMedias, photographerInfo, imgAndTitle, indexImg)

  // Left arrow on click event
  leftArrow.addEventListener('click', () => {
    indexImg = previousImage(
      indexImg,
      goodMedias,
      photographerInfo,
      imgAndTitle
    )
  })

  // Right arrow on click event
  rightArrow.addEventListener('click', () => {
    indexImg = nextImage(indexImg, goodMedias, photographerInfo, imgAndTitle)
  })

  // Event with the arrows keyboard
  window.addEventListener('keydown', (e) => {
    if (zoomModal.style.display === 'flex' && e.key === 'ArrowLeft') {
      indexImg = previousImage(
        indexImg,
        goodMedias,
        photographerInfo,
        imgAndTitle
      )
    } else if (zoomModal.style.display === 'flex' && e.key === 'ArrowRight') {
      indexImg = nextImage(indexImg, goodMedias, photographerInfo, imgAndTitle)
    }
  })
  noScroll()
}

// No scroll when the lightbox is open
function noScroll () {
  const zoomModal = document.getElementById('zoom-modal')
  const body = document.querySelector('body')
  zoomModal.focus()
  if (zoomModal.style.display === 'flex') {
    body.style.overflowY = 'hidden'
  }
  body.style.overflowY = 'hidden'
}

// Close the modal
function closeZoom () {
  const zoomModal = document.getElementById('zoom-modal')
  const body = document.querySelector('body')
  zoomModal.style.display = 'none'
  body.style.overflowY = 'auto'
}

// Close modal with the escape keyboard button
window.addEventListener('keydown', (e) => {
  const zoomModal = document.getElementById('zoom-modal')
  // eslint-disable-next-line no-cond-assign
  if ((zoomModal.style.display = 'flex' && e.key === 'Escape')) {
    closeZoom()
  }
})

// Close the modal with the click event
window.addEventListener('click', (event) => {
  const modal = document.getElementById('zoom-modal')
  if (event.target === modal) {
    closeZoom()
  }
})
