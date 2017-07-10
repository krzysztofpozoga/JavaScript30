document.addEventListener('DOMContentLoaded', function(){
    function setTime(){
        const date = new Date();
        const seconds = date.getSeconds();
        const secondsDegrees = ((seconds/60)*360)+90;
        const secondHand = document.querySelector('.second-hand');
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const minutes = date.getMinutes();
        const minutesDegrees = ((minutes/60)*360)+90;
        const minutesHand = document.querySelector('.min-hand');
        minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hours = date.getHours();
        const hoursDegrees = ((hours/12)*360)+90;
        const hoursHand = document.querySelector('.hour-hand');
       hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }
    setInterval(setTime, 1000);
});