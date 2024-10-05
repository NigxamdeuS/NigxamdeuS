let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.carousel-slide img');
    let dots = document.querySelectorAll('.dot');

    if (n >= slides.length) {
        slideIndex = 0;
    } 
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
}

// Automatically change slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);
