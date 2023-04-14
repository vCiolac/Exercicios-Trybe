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
const reset = (event) => {
  event.target.style.backgroundColor = null;
  event.target.style.lineHeight = null;
  event.target.style.fontFamily = null;
  event.target.style.fontSize = null;
  event.target.style.color = null;
};
// input
const changeBgColor = (event) => {
  const title = document.querySelector('.title');
  const description = document.querySelector('.description');
  title.style.backgroundColor = event.target.textContent;
  description.style.backgroundColor = event.target.textContent;
  localStorage.setItem("backgroundColor", event.target.textContent);
};
const changeTextFontColor = (event) => {
  const title = document.querySelector('.title');
  const description = document.querySelector('.description');
  title.style.color = event.target.textContent;
  description.style.color = event.target.textContent;
  localStorage.setItem("FontColor", event.target.textContent);
};
const changeTextFontSize = (event) => {
  const title = document.querySelector('.title');
  const description = document.querySelector('.description');
  title.style.fontSize = event.target.textContent;
  description.style.fontSize = event.target.textContent;
  localStorage.setItem("FontSize", event.target.textContent);
};
const changeTextFontFamily = (event) => {
  const title = document.querySelector('.title');
  const description = document.querySelector('.description');
  title.style.fontFamily = event.target.textContent;
  description.style.fontFamily = event.target.textContent;
  localStorage.setItem("FontFamily", event.target.textContent);
};
const changeTextLineHeight = (event) => {
  const title = document.querySelector('.title');
  const description = document.querySelector('.description');
  title.style.lineHeight = event.target.textContent;
  description.style.lineHeight = event.target.textContent;
  localStorage.setItem("LineHeight", event.target.textContent);
};

// demonstração
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

//reset
buttonsBg.forEach((button) => {
  button.addEventListener('mouseout', reset);
});
buttonsFontColor.forEach((button) => {
  button.addEventListener('mouseout', reset);
});
buttonsFontSize.forEach((button) => {
  button.addEventListener('mouseout', reset);
});
buttonsFontFamily.forEach((button) => {
  button.addEventListener('mouseout', reset);
});
buttonslineHeight.forEach((button) => {
  button.addEventListener('mouseout', reset);
});
// escolhas
buttonsBg.forEach((button) => {
  button.addEventListener('click', changeBgColor);
});
buttonsFontColor.forEach((button) => {
  button.addEventListener('click', changeTextFontColor);
});
buttonsFontSize.forEach((button) => {
  button.addEventListener('click', changeTextFontSize);
});
buttonsFontFamily.forEach((button) => {
  button.addEventListener('click', changeTextFontFamily);
});
buttonslineHeight.forEach((button) => {
  button.addEventListener('click', changeTextLineHeight);
});

// receber
const applySavedSettings = () => {
  const savedBgColor = localStorage.getItem('backgroundColor');
  const savedFontColor = localStorage.getItem('FontColor');
  const savedFontSize = localStorage.getItem('FontSize');
  const savedFontFamily = localStorage.getItem('FontFamily');
  const savedLineHeight = localStorage.getItem('LineHeight');

  if (savedBgColor) {
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    title.style.backgroundColor = savedBgColor;
    description.style.backgroundColor = savedBgColor;
  }
  if (savedFontColor) {
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    title.style.color = savedFontColor;
    description.style.color = savedFontColor;
  }
  if (savedFontSize) {
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    title.style.fontSize = savedFontSize;
    description.style.fontSize = savedFontSize;
  }
  if (savedFontFamily) {
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    title.style.fontFamily = savedFontFamily;
    description.style.fontFamily = savedFontFamily;
  }
  if (savedLineHeight) {
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    title.style.lineHeight = savedLineHeight;
    description.style.lineHeight = savedLineHeight;
  }
};

applySavedSettings();

