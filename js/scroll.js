// back-btnというidを持つHTML要素を取得し、定数に他代入する
const backBtn = document.getElementById("back-btn");

// 画面がスクロールされた時にイベント処理を実行
// window.documentでもdocument.でも動作しますが、ツリーの頂点のwindowに指示する理由ありますか？
window.addEventListener("scroll", () => {
  //　画面のスクロール値をpxで取得する
  const scrollValue = document.scrollingElement.scrollTop;
  // 画面のスクロール量が300px以上であれば、『TOPに戻る』ボタンを表示
  if (scrollValue >= 300) {
    backBtn.style.display = "inline";
  } else {
    backBtn.style.display = "none";
  }
});

const logo = document.getElementById("btn");

logo.addEventListener("click", () => {
  logo.classList.toggle("is-active");
});

// backBtn.addEventListener("click", () => {
//   backBtn.classList.toggle("is-active");
// });
