 
 const secondHand = document.querySelector('.second-hand');
 const MinuteHand = document.querySelector('.min-hand');
 const hourHand = document.querySelector('.hour-hand');

 function setDate() {
      const now = new Date();
      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds/60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

     const min = now.getMinutes();
     const minutesDegrees = ((min/60) * 360 ) + 90;
     MinuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

     const hour = now.getHours();
     const hourDegrees = ((hour/12) * 360 ) + 90;
     hourHand.style.transform = `rotate(${hourDegrees}deg)`;
 }


 setInterval(setDate, 1000);