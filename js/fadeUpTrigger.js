// スクロールイベント
$(window).scroll(function (){
    fadeAnime(); // スクロールのたびにfadeAnime関数を実行
});

// アニメーション処理関数
function fadeAnime() {
    $('.fadeUpTrigger').each(function() {
        var elemPos = $(this).offset().top - 100; // 要素の位置を取得
        var scroll = $(window).scrollTop(); // 現在のスクロール位置を取得
        var windowHeight = $(window).height(); // ウィンドウの高さを取得
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp'); // 画面内に入ったらクラスを追加
        } else {
            $(this).removeClass('fadeUp'); // 画面外に出たらクラスを削除
        }
    });
}
