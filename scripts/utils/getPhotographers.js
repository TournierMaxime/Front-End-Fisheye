/* eslint-disable no-unused-vars */
async function getPhotographers() {
  const request = await fetch("./../../data/photographers.json");
  const data = await request.json();

  return data.photographers;
}
