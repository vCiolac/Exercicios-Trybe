const bgColor = document.getElementById('background-color');
const fontColor = document.getElementById('font-color');
const fontSize = document.getElementById('font-size');
const lineHeight = document.getElementById('line-height');
const fontFamily = document.getElementById('font-family');
const buttonsBg = bgColor.querySelectorAll('button');
const buttonsFontColor = fontColor.querySelectorAll('button');
const buttonsFontSize = fontSize.querySelectorAll('button');
const buttonslineHeight = lineHeight.querySelectorAll('button');
const buttonsFontFamily = fontFamily.querySelectorAll('button');

const changeColor = (event) => {
  event.target.style.backgroundColor = event.target.textContent;
};
const changeFontColor = (event) => {
  event.target.style.color = event.target.textContent;
};
const changeFontSize = (event) => {
  event.target.style.fontSize = event.target.textContent;
};
const changeFontFamily = (event) => {
  event.target.style.fontFamily = event.target.textContent;
};
const changeLineHeight = (event) => {
  event.target.style.lineHeight = event.target.textContent;
};

buttonsBg.forEach((button) => {
  button.addEventListener('mouseover', changeColor);
});
buttonsFontColor.forEach((button) => {
  button.addEventListener('mouseover', changeFontColor);
});
buttonsFontSize.forEach((button) => {
  button.addEventListener('mouseover', changeFontSize);
});
buttonsFontFamily.forEach((button) => {
  button.addEventListener('mouseover', changeFontFamily);
});
buttonslineHeight.forEach((button) => {
  button.addEventListener('mouseover', changeLineHeight);
});