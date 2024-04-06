// ---
const hamMenuBtn = document.querySelector(".header__main-ham-menu-cont");
const smallMenu = document.querySelector(".header__sm-menu");
const headerHamMenuBtn = document.querySelector(".header__main-ham-menu");
const headerHamMenuCloseBtn = document.querySelector(
    ".header__main-ham-menu-close"
);
const headerSmallMenuLinks = document.querySelectorAll(".header__sm-menu-link");

hamMenuBtn.addEventListener("click", () => {
    if (smallMenu.classList.contains("header__sm-menu--active")) {
        smallMenu.classList.remove("header__sm-menu--active");
    } else {
        smallMenu.classList.add("header__sm-menu--active");
    }
    if (headerHamMenuBtn.classList.contains("d-none")) {
        headerHamMenuBtn.classList.remove("d-none");
        headerHamMenuCloseBtn.classList.add("d-none");
    } else {
        headerHamMenuBtn.classList.add("d-none");
        headerHamMenuCloseBtn.classList.remove("d-none");
    }
});

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    headerSmallMenuLinks[i].addEventListener("click", () => {
        smallMenu.classList.remove("header__sm-menu--active");
        headerHamMenuBtn.classList.remove("d-none");
        headerHamMenuCloseBtn.classList.add("d-none");
    });
}

// ---
const headerLogoConatiner = document.querySelector(".header__logo-container");

headerLogoConatiner.addEventListener("click", () => {
    location.href = "index.html";
});

var color = "#FFFFFF";
function maxParticles() {
    if (window.screen.width < 580) {
        return 8;
    } else {
        return 80;
    }
}

Particles.init({
    selector: "#particles-js",
    color: color,
    maxParticles: maxParticles(),
    connectParticles: true,
    speed: 1,
});

// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load("particles-js", "/public/assets/particles.json", function () {
//     console.log("callback - particles.js config loaded");
// });

(function ($) {
    "use strict";
    // Clients carousel (uses the Owl Carousel library)
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 5 } },
    });
})(jQuery);
