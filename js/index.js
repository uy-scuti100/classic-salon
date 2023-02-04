const toggleBtn = document.querySelector(".toggle");
const navLinks = document.querySelector(".nav-links");
const toggleBtnCancel = document.querySelector(".toggle-off");
const wrapper = document.querySelector(".nav-wrapper");





toggleBtn.addEventListener("click", function () {
    navLinks.classList.remove("hidden")
})

toggleBtnCancel.addEventListener("click", function () {
    navLinks.classList.add("hidden")
})

window.onscroll = function () {
    wrapper.style.background = (window.pageYOffset > window.innerHeight) ? "#2B2E31" : "#2A2423"
}

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000.
    },
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

let darkmode