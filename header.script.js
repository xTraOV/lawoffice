const navOpenButton = document.querySelector(".hamburger-menu");
const navCloseButton = document.querySelector(".hamburger-menu-exit");

const navList = document.querySelector(".navigation-list");

const body = document.querySelector("body");

navOpenButton.addEventListener("click", () => {
    navOpenButton.classList.add("hidden");
    navCloseButton.classList.remove("hidden");
    navList.classList.add("mobile-open");
    setTimeout(() => {
        navList.classList.add("transition");
        body.classList.add("menu-open");
    }, 1);
});

navCloseButton.addEventListener("click", () => {
    navOpenButton.classList.remove("hidden");
    navCloseButton.classList.add("hidden");
    navList.classList.remove("mobile-open");
    navList.classList.remove("transition");
    body.classList.remove("menu-open");
});
