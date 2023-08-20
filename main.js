

/*======================== Intersection Observer API ========================*/


{
  const targets = document.querySelectorAll('.IO');

  function callback(entries, obs) {

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
  
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(target => {
    observer.observe(target);
  });
}


//=============== ham gnav ===============


//スクロールをするとハンバーガーメニューに変化するための設定を関数でまとめる
function fixed_anim() {
  //↓ヘッダーの高さを取得
  let headerH = $('#header').outerHeight(true);
  let scroll = $(window).scrollTop();
  if (scroll >= headerH){ //ヘッダーの高さ以上までスクロールしたら
      $('.open_btn').addClass('fade_down'); //.open_btnにfade_downというクラス名を付与して
      $('#header').addClass('hide'); //#headerにhideというクラス名を付与
    }else{ //それ以外は
      $('.open_btn').removeClass('fade_down'); //fade_downというクラス名を除き
      $('#header').removeClass('hide'); //hideというクラス名を除く
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  fixed_anim(); //スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  fixed_anim(); //スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

$(".open_btn").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#ham_gnav").toggleClass('panel_active');//ナビゲーションにpanel_activeクラスを付与
});

$("#ham_gnav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".open_btn").removeClass('active');//ボタンの activeクラスを除去し
    $("#ham_gnav").removeClass('panel_active');//ナビゲーションのpanel_activeクラスも除去
});


//=============== header slider ===============


$('.header_slider').slick({
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1, //スライドを画面に〇枚見せる
  slidesToScroll: 1, //1回のスクロールで〇枚の写真を移動して見せる
  prevArrow: '<div class="header_slick_prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="header_slick_next"></div>', //矢印部分NextのHTMLを変更
  dots: true, //下部ドットナビゲーションの表示
  fade: true,
  autoplaySpeed: 3500,
  speed: 2400,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  dotsClass: 'header_slick_dots'
});


//=============== smooth scroll ===============


$('.page_link a[href*="#"]').click(function () {
  let elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  let pos = $(elmHash).offset().top;  //idの上部の距離を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

//=============== item slider ===============

$('#item_slider').slick({
  autoplay: false, //自動的に動き出すか。初期値はfalse。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 4, //スライドを画面に4枚見せる
  slidesToScroll: 4, //1回のスクロールで1枚の写真を移動して見せる
  dots: true
})

