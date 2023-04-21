const colorCard = document.querySelector('.color-card');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
let stopInterval = null;
let colorChangeCount = 0;
// losowy czas między 1 a 5 sekund
function changeColor() {
  let time = Math.random() * (5000 -1000) + 1000; 
  return setTimeout(() => {
    colorChangeCount++;
    if(colorChangeCount<5){
      colorCard.style.backgroundColor = getRandomColor();
      stopInterval = changeColor();
    }
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
  if(colorChangeCount>=5){
    colorChangeCount = 0;
}
  stopInterval = changeColor();
});
// startButton.addEventListener('click', () =>{
//   let i=0;
//   stopInterval = setInterval(() =>{
//     changeColor();
//     i++;
//     if(i==5){
//       clearInterval(stopInterval);
//     }
//   }, 1000);
// })

stopButton.addEventListener('click', () =>{
  clearTimeout(stopInterval);
})