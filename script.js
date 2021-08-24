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





var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);