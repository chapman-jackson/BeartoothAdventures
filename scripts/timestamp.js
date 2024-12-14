    // getting and setting the time the form was opened
    const timeStampInput = document.querySelector('#timestamp'); const currentTime = new Date(); 
    const humanReadableTime = currentTime.toLocaleString(); 
    timeStampInput.value = humanReadableTime;