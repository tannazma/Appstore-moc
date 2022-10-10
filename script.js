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

const menu = document.querySelector(".Menu");

updates.prepend(eight);
menu.appendChild(updates)
