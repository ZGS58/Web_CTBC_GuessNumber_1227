// 1. 更新提示文字
// 搜尋指定元素("搜尋的元素")
// document.querySelector(".tip")
const tip = document.querySelector(".tip");
tip.textContent = "請輸入 1 ~ 100 內的數字";

// 2. 設定答案
let answer = Math.random() * 100 + 1;
answer = Math.floor(answer);
console.log("答案:", answer);
let min = 1,
  max = 100;

// 3. 取得確認按鈕
document.querySelector("#ok").addEventListener("click", function () {
  console.log("點擊確認按鈕");
  let number = document.querySelector("#number").value;
  const startButton = document.querySelector("#start");
  if (number == "") {
    tip.textContent = "請不要輸入空值";
  } else {
    console.log(number);
    if (number == answer) {
      tip.textContent = "恭喜猜對囉!";
      startButton.style.display = "flex";
    } else if (number > answer) {
      tip.textContent = `請輸入 ${min} ~ ${number} 內的數字`;
      max = number;
      if (currentHealth > 1) {
        currentHealth--; // 每次扣除半颗心
        renderHealthBar(); // 重新渲染血量条
      } else {
        currentHealth--; // 每次扣除半颗心
        renderHealthBar(); // 重新渲染血量条
        startButton.style.display = "flex";
        tip.textContent = "你輸了!";
      }
    } else {
      tip.textContent = `請輸入 ${number} ~ ${max} 內的數字`;
      min = number;
      if (currentHealth > 1) {
        currentHealth--; // 每次扣除半颗心
        renderHealthBar(); // 重新渲染血量条
      } else {
        currentHealth--; // 每次扣除半颗心
        renderHealthBar(); // 重新渲染血量条
        startButton.style.display = "flex";
        tip.textContent = "你輸了!";
      }
    }
  }
});

//// 像素风格心形的 SVG 模板

const heartFull = `<img class = "heart" src = "./images/heart.png">`;
const heartHalf = `<img class = "heart" src = "./images/heart1.png">`;
const heartEmpty = `<img class = "heart" src = "./images/heart2.png">`;

// 初始化血量
const maxHealth = 5; // 满血量为 5 颗心
let currentHealth = maxHealth * 2; // 当前血量，*2 是因为半颗心也算单位

// 渲染血量条
function renderHealthBar() {
  const healthBar = document.getElementById("health-bar");
  healthBar.innerHTML = ""; // 清空当前血量条
  for (let i = 0; i < maxHealth; i++) {
    if (currentHealth >= (i + 1) * 2) {
      healthBar.innerHTML += heartFull; // 满心
    } else if (currentHealth === i * 2 + 1) {
      healthBar.innerHTML += heartHalf; // 半心
    } else {
      healthBar.innerHTML += heartEmpty; // 空心
    }
  }
}

renderHealthBar();

//再玩一次
document.querySelector("#start").addEventListener("click", function () {
  console.log("重置遊戲");

  // 重置答案
  answer = Math.floor(Math.random() * 100) + 1;
  console.log("新答案:", answer);

  // 重置範圍
  min = 1;
  max = 100;

  // 重置血量
  currentHealth = maxHealth * 2;
  renderHealthBar();

  // 重置提示文字
  tip.textContent = "請輸入 1 ~ 100 內的數字";

  // 清空輸入框
  document.querySelector("#number").value = "";
  document.querySelector("#start").style.display = "none";
});
document.querySelector("#start").style.display = "none";