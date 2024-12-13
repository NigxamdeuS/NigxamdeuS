let slideIndex = 1;
let slides = document.querySelector('.carousel-slide');
let images = document.querySelectorAll('.carousel-slide img');
let dots = document.querySelectorAll('.dot');
let progress = document.querySelector('.progress');

// 初期化
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > images.length) {slideIndex = 1}
    if (n < 1) {slideIndex = images.length}
    
    slides.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex - 1].classList.add('active');
    
    // プログレスバーをリセットして再開
    progress.style.width = '0';
    requestAnimationFrame(() => {
        progress.style.width = '100%';
    });
}

// 5秒ごとに自動切り替え
setInterval(() => {
    moveSlide(1);
}, 5000);