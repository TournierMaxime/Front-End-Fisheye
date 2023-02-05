/* eslint-disable no-unused-vars */

// Retrieve all photographers data
async function getPhotographers () {
  const request = await fetch('/Front-End-Fisheye/../../data/photographers.json')
  const data = await request.json()

  return data.photographers
}

// Retrieve medias data
async function getMedia () {
  const request = await fetch('/Front-End-Fisheye/../../data/photographers.json')
  const { media } = await request.json()
  return media
}
