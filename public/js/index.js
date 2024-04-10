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

var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName("body")[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight || docElem.clientHeight || body.clientHeight;

function maxParticles() {
    if (x < 580) {
        return 20;
    } else {
        return 100;
    }
}

console.log(maxParticles());

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
        responsive: {
            0: { items: 4 },
            768: { items: 5 },
            1000: { items: 6 },
            1200: { items: 8 },
        },
    });
})(jQuery);

const tbl = document.querySelector(".tombol-trigger");
function detailAnime(data) {
    return `
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-3-fix modal-tengah ">
                <img src="${data.images.webp.image_url}" alt="" class="img-fluid">
                <h5 class="card-title btn btn-batas btn-danger">${data.score}</h5>
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item">Rank: ${data.rank}</li>
                    <li class="list-group-item">Broadcast: ${data.broadcast}</li>
                    <li class="list-group-item">Aired: ${data.aired.string}</li>
                    <li class="list-group-item">Rating: ${data.rating}</li>
                    <li class="list-group-item">Type: ${data.type}</li>
                    <li class="list-group-item">Status: ${data.status}</li>
                </ul>
            </div>
        </div>
    </div>`;
}
