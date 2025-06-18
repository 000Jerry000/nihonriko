
$('#slider').slick({
	//accessibility: true,	// アクセシビリティ。左右ボタンで画像の切り替えをできるかどうか
	autoplay: true,
	autoplaySpeed: 5000,// 自動再生で切り替えをする時間
	speed: 1000, // 自動再生や左右の矢印でスライドするスピード
	pauseOnHover: false,
	//pauseOnDotsHover: true,
	cssEase: 'ease-in-out',	// 切り替えのアニメーション。ease,linear,ease-in,ease-out,ease-in-out
	dots: false,	// 画像下のドット（ページ送り）を表示
	//dotsClass: 'slider_dots',	// ドットのclass名をつける
	//draggable: true,	// ドラッグができるかどうか
	fade: true,	// 切り替え時のフェードイン設定。trueでon
	arrows: false,	 // 左右の次へ、前へボタンを表示するかどうか
	infinite: true,		// 無限スクロールにするかどうか。最後の画像の次は最初の画像が表示される。
	//lazyLoad: 'ondemand',// or 'progressive'
	//initialSlide: 0,	// 最初のスライダーの位置
	//slidesToShow: 1,
	//slidesToScroll: 1,
	//prevArrow: '<img src="img/left.png" class="slick_prev">',
	//nextArrow: '<img src="img/right.png" class="slick_next">'
	//swipe: true,	// タッチスワイプに対応するかどうか
	//vertical: false,	// 縦方向へのスライド
	//centerMode: true,	  // 表示中の画像を中央へ
	//centerPadding: '0px'  // 中央のpadding
});