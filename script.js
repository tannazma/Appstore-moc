const menu = document.querySelector(".Menu");


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

function selectMenu(menuItem) {
    const currentlySelectedMenu = document.querySelector(".Selected");
    currentlySelectedMenu.classList.remove("Selected")

    menuItem.classList.add("Selected");
}

const applist = [

    { id: 1, title: "LiquidText", description: "Annotate and review documents" },
    { id: 2, title: "BBEdit", description: "Legendary text and code editor" },
    { id: 3, title: "Pixelmator Pro", description: "Pro image edditing for everyon" },
    { id: 4, title: "Soulver", description: "Notpad, meet calculator" },
    { id: 5, title: "Agenda", description: "Date-focused note taking" },
    { id: 6, title: "Michinika Museum", description: "Mystery puzzle game" },
    { id: 7, title: "Kaleidoscope", description: "Mystery puzzle game" },
    { id: 8, title: "Reeder", description: "Legendary text and code editor" },
    { id: 9, title: "Due -- Reminders & Timers", description: "Legendary text and code editor" }];

const appListContainer = document.querySelector("#app-list");
applist.forEach(function (itemApp) {
    const itemAppDiv = document.createElement("div");
    itemAppDiv.className = "app-item";

    const getButton = document.createElement("button");
    getButton.textContent = "Get";

    const firstDivInsideEachAppDiv = document.createElement("div");
    firstDivInsideEachAppDiv.textContent = itemApp.title;


    const appDescription = document.createElement("p");
    appDescription.textContent = itemApp.description;


    const itemAppIdSpan = document.createElement("span");
    itemAppIdSpan.textContent = itemApp.id + " ";

    itemAppDiv.append(firstDivInsideEachAppDiv);
    firstDivInsideEachAppDiv.append(appDescription)


    appListContainer.append(itemAppDiv);

    const getButtonDiv = document.createElement("div");
    getButtonDiv.appendChild(getButton);
    itemAppDiv.appendChild(getButtonDiv);
    firstDivInsideEachAppDiv.prepend(itemAppIdSpan);
})
