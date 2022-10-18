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

const appListContainer = document.querySelector("#app-list");

fetch("https://aghardeshir.github.io/mock-json-practice/mock-app-list.json").then(
    function (response) {
        response.json().then(
            function (appList) {
                appList.forEach(function (itemApp) {
                    const itemAppDiv = document.createElement("div");
                    itemAppDiv.className = "app-item";
                    appListContainer.append(itemAppDiv);
                    itemAppDiv.innerHTML = `
                    <div>
                        <span>${itemApp.id} </span>
                        ${itemApp.title}
                        <p class="description">${itemApp.description}</p>
                    </div>
                    <div>
                        <button>Get</button>
                    </div>`
                })
            }
        )
    }
)

fetch("https://aghardeshir.github.io/mock-json-practice/mock-user.json").then(
    function (response) {
        response.json().then(
            function (user) {
                const userAvatarDiv = document.querySelector(".User-avatar");
                userAvatarDiv.textContent = user.avatar;

                const userNameDiv = document.querySelector("#User-name");
                userNameDiv.textContent = user.name;
            }
        )
    }
)

fetch("star.svg").then(
    function (response1) {
        response1.text().then(
            function (svg) {
                console.log(svg)
            }
        )
    }
)

