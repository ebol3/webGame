const colorCard = document.querySelector('.color-card');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
let stopInterval = null;
let colorChangeCount = 0;
const najkrotszyWynik = document.querySelector('.wyni1');
const najdluzszyWynik = document.querySelector('.wyni2');
const sredniWynik = document.querySelector('.wyni3');
let czasyReakcji = [];
// losowy czas między 1 a 5 sekund
function changeColor() {
  let time = Math.random() * (5000 -1000) + 1000; 
  return setTimeout(() => {
    colorChangeCount++;
    if(colorChangeCount<5){
      colorCard.style.backgroundColor = getRandomColor();
      stopInterval = changeColor();
    }else{
      const najkrotszyCzas = Math.min(...czasyReakcji);
      const najdluzszyCzas = Math.max(...czasyReakcji);
      const sredniCzas = czasyReakcji.reduce((a, b) => a + b, 0) / czasyReakcji.length;

      najkrotszyWynik.textContent = najkrotszyCzas + " ms";
      najdluzszyWynik.textContent = najdluzszyCzas + " ms";
      sredniWynik.textContent = sredniCzas.toFixed(2) + " ms";
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
    czasyReakcji = [];
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
  const stopTime = new Date().getTime();
  clearTimeout(stopInterval);
  if (colorChangeCount > 0 && colorChangeCount < 6) {
    const czasReakcji = stopTime - (startTime + time);
    czasyReakcji.push(czasReakcji);
  }
})