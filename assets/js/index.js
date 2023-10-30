const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navLinkMobile = $$(".header__link--mobile");
const inputToggleMobile = $(".input-check-menu")
const menuDrawer = $(".menu-drawer");
const menuOverlay = $(".menu-overlay");
console.log(navLinkMobile);


Array.from(navLinkMobile).map((item) => {
    item.onclick = () => {
        inputToggleMobile.checked = false
        console.log("sddfsds");
    }
})  