const categoriesList = document.querySelector("#categories");
const categoryItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector(".categories-title").textContent;
  const elementsCount = item.querySelectorAll(".categories-item").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
