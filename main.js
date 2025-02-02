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
        }
    });

})();