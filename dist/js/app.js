const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  // 360 degree circle div by 60 seconds
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  const hoursDegrees = (( hours / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if(secondsDegrees === 90) {
      secondHand.style.transition = 'none'
  } else {
      secondHand.style.transition = ''
  }
}



setInterval(setDate, 1000);
// 1000ms = 1 second
