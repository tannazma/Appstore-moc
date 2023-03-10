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
                                    <img src="${itemApp.imageUrl}"/> 
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
                                <p>In-App Purchases</p>
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
const mainContent = document.querySelector(".main-content")
const overlay = document.querySelector(".overlay")
mainContent.addEventListener("scroll", function () {
    if (mainContent.scrollTop === 0) {
        overlay.style.opacity = 0
    } else if (mainContent.scrollTop > 0) {
        overlay.style.opacity = 0.9
    }
}


)

function ScrollFeaturedRight() {
    const featuredScroller = document.querySelector("#featured")
    const firstChildWidth = featuredScroller.firstElementChild.offsetWidth
    featuredScroller.scrollBy({
        top: 0,
        left: firstChildWidth,
        behavior: 'smooth'
    });
}

function ScrollFeaturedLeft() {
    const featuredScroller = document.querySelector("#featured")
    const firstChildWidth = featuredScroller.firstElementChild.offsetWidth
    featuredScroller.scrollBy({
        top: 0,
        left: -firstChildWidth,
        behavior: 'smooth'
    });
}



const features = document.querySelector("#featured")

function eventListener() {
    const buttonRight = document.querySelector(".handleNext")
    if (features.scrollLeft + features.offsetWidth === features.scrollWidth) {
        buttonRight.disabled = true
    } else {
        buttonRight.disabled = false
    }

    
    const buttonLeft = document.querySelector(".handlePrev")
    if (features.scrollLeft === 0) {
        buttonLeft.disabled = true

    } else {
        buttonLeft.disabled = false
    }
}

features.addEventListener("scroll", eventListener)