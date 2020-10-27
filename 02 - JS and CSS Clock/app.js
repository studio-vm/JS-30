//todo

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
  const now = new Date(); //! get current date

  const seconds = now.getSeconds();
  const secondsDeg = ((seconds / 60) * 360) + 90; //! convert seconds to degrees
   secondHand.style.transform = `rotate(${secondsDeg}deg)`; //set second rotation to degrees;
   console.log(secondsDeg);

   // if (secondsDeg === 444 || secondsDeg === 90) {
   //    secondHand.style.transition = "none;"
   // } else {
   //    secondHand.style.transition = "all 0.1s ease";
   //    console.log('second...');
   // }
   
  const minutes = now.getMinutes();
  const minutesDeg = ((minutes / 60) * 360) + 90; //! convert minutes to degrees
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`; //set minute rotation
  
  const hours = now.getHours();
  const hoursDeg = ((hours / 12) * 360) + 90;//convert hours to degrees
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;//set hours rotation


  // console.log(secondsDeg);
  // console.log(seconds);
}

setInterval(setDate, 1000); //! runs/updates every second;

//!todo
