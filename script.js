var swiper = new Swiper(".mySwiper", {});
var pointer = document.querySelector('.pointer');

window.addEventListener('mousemove', function(e) {
    pointer.style.top = e.clientY + "px";
    pointer.style.left = e.clientX + "px";
});


var swiperS = new Swiper(".students-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
swiperS.slideTo(3)


window.addEventListener('load', function() {
    pointer.style.width = "1200px";
    pointer.style.height = "1200px";
    setTimeout(() => {
        pointer.style.setProperty('--transition', '0s');
    }, 1500)
})