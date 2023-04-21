const colorCard = document.querySelector('.color-card');
const startButton = document.querySelector('.start');

function changeColor() {
  let time = Math.random() * 5000; // losowy czas między 0 a 5 sekund
  setTimeout(() => {
    colorCard.style.backgroundColor = getRandomColor();
    changeColor();
  }, time);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

startButton.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    changeColor();
  }
});