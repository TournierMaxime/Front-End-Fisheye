/* eslint-disable no-unused-vars */

// Retrieve all photographers data
async function getPhotographers() {
  const request = await fetch("./../../data/photographers.json");
  const data = await request.json();

  return data.photographers;
}
