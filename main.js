(function() {

    const fehBody = document.body;

    const workDurationInput = document.getElementById('work-duration');
    const restDurationInput = document.getElementById('rest-duration');
    const timerTime = document.getElementById('timer-time');

    let workDuration = parseInt(workDurationInput.value) * 60;
    let restDuration = parseInt(restDurationInput.value) * 60;
    let remainingTime = workDuration;
    let isPaused = true;
    let isWorking = true;
    let intervalId;

    //* Page Load
    window.addEventListener('load', () => {
        fehBody.classList.add('page-loaded');
    });

    //* Start Button
    const startBtn = document.getElementById('start-btn');

    startBtn.addEventListener('click', () => {

        isPaused = false;

        fehBody.classList.add('timer-running');

        if(isWorking) {
            fehBody.classList.remove('timer-paused');
        } else {
            fehBody.classList.add('rest-mode');
            fehBody.classList.remove('timer-paused');
        }
        if(!intervalId) {
            intervalId = setInterval(updateTimer, 1000);
        }
    });

    //* Update Timer
    function updateTimer() {

        if(!isPaused) {  
            remainingTime--;

            if(remainingTime <= 0) {
                isWorking = !isWorking;
                remainingTime = isWorking ? workDuration : restDuration;

                if(!isWorking) {
                    fehBody.classList.add('rest-mode');
                    fehBody.classList.remove('timer-running');
                } else {
                    fehBody.classList.remove('rest-mode');
                    fehBody.classList.remove('timer-running');
                }

                isPaused = false;
                fehBody.classList.remove('timer-work-active');
            }

            updateProgress();
        }
    }

    //* Update Progress
    function updateProgress() {
        const radius = 45;
        const circumference = 2 * Math.PI * radius;

        console.log(circumference);

        const totalDuration = isWorking ? workDuration : restDuration;
        const dashOffset = circumference * remainingTime / totalDuration;
    }

})();