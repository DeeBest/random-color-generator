const footerParagraph = document.getElementById('footer-paragraph');
const currentDate = new Date().getFullYear();
footerParagraph.textContent = `Created by \xA9Simphiwe ${currentDate}.`;

const container = document.getElementById('container');

for (let index = 0; index < 15; index++) {
  const colorContainer = document.createElement('div');
  colorContainer.classList.add('color-container');
  container.appendChild(colorContainer);
}

const colorContainers = document.querySelectorAll('.color-container');

generateColors();

function generateColors() {
  colorContainers.forEach((colorContainer) => {
    const newColorCode = randomColor();
    colorContainer.style.backgroundColor = '#' + newColorCode;
    colorContainer.textContent = '#' + newColorCode;
  });
}

function randomColor() {
  const colorCharacters = '0123456789abcdef';
  const colorCodeLength = 6;
  let colorCode = '';

  for (let index = 0; index < colorCodeLength; index++) {
    const randomNumber = Math.floor(Math.random() * colorCharacters.length);

    colorCode += colorCharacters.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
}
