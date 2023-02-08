function getRandomColor() {
  const availableCharacters = "0123456789ABCDEF";
  const availableCharacterLength = availableCharacters.length;

  let color = "#";

  for (let i = 0; i < 6; i++) {
    color +=
      availableCharacters[Math.floor(Math.random() * availableCharacterLength)];
  }

  return color;
}
function generate() {
  let code = getRandomColor();
  document.querySelector(".result").textContent = code;
  document.body.style.backgroundColor = code;
  // document.querySelector(".btn").style.color = code;
  document.querySelector(".result").style.color = code;
  return code;
}

document.querySelector(".btn").addEventListener("click", generate);

const answer = document.getElementById("copyResult");
const copy = document.getElementById("copyButton");
const selection = window.getSelection();
const range = document.createRange();
const textToCopy = document.getElementById("textToCopy");

copy.addEventListener("click", function (e) {
  range.selectNodeContents(textToCopy);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand("copy");
  if (successful) {
    alert("Copied");
  }
  window.getSelection().removeAllRanges();
});
