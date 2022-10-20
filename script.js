const menu = document.querySelector(".Menu");


const menuItems = [
    { id: 1, title: "Discover", icon: "star.svg" },
    { id: 2, title: "Arcade", icon: "apple.svg" },
    { id: 3, title: "Create", icon: "users.svg" },
    { id: 4, title: "Work", icon: "list.svg" },
    { id: 5, title: "Play", icon: "shopping.svg" },
    { id: 6, title: "Develop", icon: "megaphone.svg" },
    { id: 7, title: "Categories", icon: "home.svg" },
    { id: 8, title: "Updates", icon: "bulb.svg" }];

menuItems.forEach(function (menuItem) {
    fetch(menuItem.icon).then(
        function (response) {
            response.text().then(
                function (svg) {
                    const icons = document.querySelector("#menuItemIcon" + menuItem.id);
                    icons.innerHTML = svg;

                }
            )
        }
    )
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

    menuItemIdSpan.id = "menuItemIcon" + menuItem.id;

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
                    itemAppDiv.className = "itemApps";
                    appListContainer.append(itemAppDiv);
                    itemAppDiv.innerHTML = `
                    <div class="list">
                        <div class="itemApp">
                            <div class="itemAppSpanImage">
                                    <img src="${itemApp.imageUrl}"/> 
                            </div>
                        </div>
                        <div class="appTitleDescription">
                            <div class="itemAppTitle">
                                ${itemApp.title}
                            </div>
                            <div class="description">
                                    <p >${itemApp.description}</p>
                            </div>
                        </div>
                        <div class="appLisButton">
                            <div class="button">
                                <button>Get</button>
                            </div>
                            <div class="buttonP">
                                <p> mnew</p>
                            </div>
                        </div>
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
