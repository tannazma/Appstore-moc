const menu = document.querySelector(".Menu");

function selectMenu(menuItem) {
    menuItem.classList.add("Selected");
}


const updates = document.createElement("div");
updates.textContent = " Updates";
updates.onclick = function () {
    selectMenu(updates)
}

const eight = document.createElement("span");
eight.textContent = 8;

updates.prepend(eight);
menu.appendChild(updates)

const categories = document.createElement("div");
categories.textContent = " Categories";
categories.onclick = function () {
    selectMenu(categories)
}

const seven = document.createElement("span");
seven.textContent = 7;

categories.prepend(seven);
menu.appendChild(categories);

const develop = document.createElement("div");
develop.textContent = " Develop";
develop.onclick = function () {
    selectMenu(develop)
}
const six = document.createElement("span");
six.textContent = 6;

develop.prepend(six);
menu.appendChild(develop);
