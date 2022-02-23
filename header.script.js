const navOpenButton = document.querySelector(".hamburger-menu");
const navCloseButton = document.querySelector(".hamburger-menu-exit");

const navList = document.querySelector(".navigation-list");

navOpenButton.addEventListener("click", () => {
    navOpenButton.classList.add("hidden");
    navCloseButton.classList.remove("hidden");
    navList.classList.add("mobile-open");
});

navCloseButton.addEventListener("click", () => {
    navOpenButton.classList.remove("hidden");
    navCloseButton.classList.add("hidden");
    navList.classList.remove("mobile-open");
});
