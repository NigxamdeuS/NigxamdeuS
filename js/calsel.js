document.addEventListener('DOMContentLoaded', function() {
    // 要素が存在するか確認してから処理を実行
    const slides = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const dots = document.querySelectorAll('.dot');
    const progress = document.querySelector('.progress');

    // スライダーの要素が存在する場合のみ実行
    if (slides && images.length > 0 && dots.length > 0 && progress) {
        let slideIndex = 1;
        
        // 初期化
        showSlides(slideIndex);

        // 以下の関数をここに移動
        function showSlides(n) {
            if (n > images.length) {slideIndex = 1}
            if (n < 1) {slideIndex = images.length}
            
            slides.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
            
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex - 1].classList.add('active');
            
            progress.style.transition = 'none';
            progress.style.width = '0';
            
            progress.offsetHeight;
            
            progress.style.transition = 'width 5s linear';
            progress.style.width = '100%';
        }

        // 5秒ごとに自動切り替え
        setInterval(() => {
            slideIndex++;
            showSlides(slideIndex);
        }, 5000);
    }
}); 