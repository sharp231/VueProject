function Scroll() {
  let time = 0.4; //時間
  let value = time;
  $(".delayScroll").each(function () {
    let parent = this; //親要素
    let elemPos = $(this).offset().top; //要素の位置
    let scroll = $(window).scrollTop(); //スクロール
    let windowHeight = $(window).height(); // 画面の高さ
    let childs = $(this).children(); //子要素

    //｛｝はスクロールをしたら動くまたは親要素にクラスplayがない
    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
      $(childs).each(function () {
        if (!$(this).hasClass("fadeUp")) {
          //動くのチェック

          $(parent).addClass("play");
          $(this).css("animation-delay", value + "s"); //アニメーションの遅延
          $(this).addClass("fadeUp"); //アニメにクラス名を追加
          value = value + time; // 遅延時間を増やす

          let index = $(childs).index(this);
          if (childs.length - 1 == index) {
            $(parent).removeClass("play");
          }
        }
      });
    } else {
      $(childs).removeClass("fadeUp"); //クラス名を削除
      value = time; //delay初期値の数値に戻す
    }
  });
}
//画面をスクロールしたら動かしたい
$(window).scroll(function () {
  Scroll(); //アニメーション用の関数を呼ぶ
}); //ここまで画面をスクロールをしたら動かしたい
//画面が読み込まれたらすぐに動かしたい
$(window).on("load", function () {
  Scroll(); //アニメーション用の関数を呼ぶ
}); //ここまで画面をスクロールをしたらすぐに動かしたい

$(function () {
  // #で始まるリンクをクリックした場合
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    let speed = 500;
    // スクロールタイプ
    let type = "swing";
    // href属性の取得
    let href = $(this).attr("href");
    // 移動先の取得（hrefが#indexならトップ$(html)に、）
    let target = $(href == "#index" ? "html" : href);
    // 移動先のポジション取得
    let position = target.offset().top;
    // animateでスムーススクロール
    $("body,html").animate({ scrollTop: position }, speed, type);
    return false;
  });
});

// let links = document.querySelectorAll(".links");

//display links onclick on hamburger
// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("hide");
//   hamburger.classList.toggle("lines-rotate");
// });

// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", () => {
//     navLinks.classList.toggle("hide");
//   });
// }
