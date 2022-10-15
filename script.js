const menu = document.querySelector(".Menu");

function selectMenu(menuItem) {
    menuItem.classList.add("Selected");
}

const menuItems = [
    { id: 1, title: "Discover" },
    { id: 2, title: "Arcade" },
    { id: 3, title: "Create" },
    { id: 4, title: "Work" },
    { id: 5, title: "Play" },
    { id: 6, title: "Develop" },
    { id: 7, title: "Categories" },
    { id: 8, title: "Updates" }];

menuItems.forEach(function (menuItem) {
    const menuItemDiv = document.createElement("div");
    menuItemDiv.textContent = " " + menuItem.title;
    menuItemDiv.onclick = function () {
        selectMenu(menuItemDiv)
    }

    if (menuItem.id === 1) {
        menuItemDiv.className = "Selected"

    }

    const menuItemIdSpan = document.createElement("span");
    menuItemIdSpan.textContent = menuItem.id;

    menuItemDiv.prepend(menuItemIdSpan);
    menu.appendChild(menuItemDiv);
})

