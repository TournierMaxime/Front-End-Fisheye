async function getTagLikes() {
  const goodMedias = await getGoodMediasWithId();
  return goodMedias.sort((a, b) => b.likes - a.likes);
}

async function getTagDates() {
  const goodMedias = await getGoodMediasWithId();
  return goodMedias.sort(
    (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf()
  );
}

async function getTagTitles() {
  const goodMedias = await getGoodMediasWithId();
  return goodMedias.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (b.title > a.title) {
      return -1;
    } else {
      return 0;
    }
  });
}

async function getGoodMedias() {
  const selectFilters = document.getElementById("pet-select");
  let goodMedias = [];
  if (selectFilters.value === "popularity") {
    goodMedias = await getTagLikes();
  }
  if (selectFilters.value === "date") {
    goodMedias = await getTagDates();
  }
  if (selectFilters.value === "title") {
    goodMedias = await getTagTitles();
  }
  return goodMedias;
}

async function onSelectOption() {
  const goodMedias = await getGoodMedias();
  await carrousel(goodMedias);
}
