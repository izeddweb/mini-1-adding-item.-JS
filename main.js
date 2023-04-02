//           Set Variable
const inputSearch = document.querySelector('[type="search"]');
const inputItems = document.querySelector('[type="text"]');
const btnSearch = document.querySelector(".btn-search");
const inputAddItems = document.querySelector('input[type="text"]');
const btnSubmit = document.querySelector(".btn-sub");
const listItem = document.querySelector(".list-items");
const listItems = document.getElementById("ul");

//   set   function
btnSearch.addEventListener("click", filterItem);
function filterItem() {
  let allLi = document.querySelectorAll(".item");
  allLi.forEach((li) => {
    if (li.textContent === inputSearch.value) {
      allLi.forEach((li) => {
        li.style.opacity = 0.4;
      });
      li.style.opacity = 1;
    }
  });
}

btnSubmit.addEventListener("click", addItems);
listItems.addEventListener("dblclick", removeItems);

//  add items
function addItems() {
  let itemValue = inputAddItems.value;
  // create li
  let newItem = document.createElement("li");
  // add class to li
  newItem.classList.add("item");
  const textItem = document.createTextNode(itemValue);
  // append text to li
  newItem.appendChild(textItem);
  // append li to list
  listItem.appendChild(newItem);
}

//  remove item
function removeItems(e) {
  if (confirm(" Remove It !!")) {
    listItems.removeChild(e.target);
  }
}
