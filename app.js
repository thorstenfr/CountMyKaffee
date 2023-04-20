const clickButton = document.getElementById("click-button");
const clickCount = document.getElementById("click-count");
let count = 0;

clickButton.addEventListener("click", () => {
  count++;
  clickCount.innerHTML = count;
});
