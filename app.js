const clickButton = document.getElementById("click-button");
const clickCount = document.getElementById("click-count");

let count = localStorage.getItem("count") || 0; // get count from localStorage, default to 0

clickCount.innerHTML = count; // set initial count display

clickButton.addEventListener("click", () => {
  count++;
  clickCount.innerHTML = count;
  localStorage.setItem("count", count); // save count to localStorage
});
