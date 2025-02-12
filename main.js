(function() {

    const fehBody = document.body;

    const workDurationInput = document.getElementById('work-duration');
    const restDurationInput = document.getElementById('rest-duration');
    const timerTime = document.getElementById('timer-time');
    const circleProgress = document.querySelector('.circle-progress');

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

    //* Pause Button
    const pauseBtn = document.getElementById('pause-btn');
    pauseBtn.addEventListener('click', () => {
        isPaused = true;

        fehBody.classList.remove('timer-running');
        fehBody.classList.add('timer-paused');
    });

    //* Settings
    const btnToggleSettings = document.getElementById('timer-settings');
    const btnCloseSettings = document.getElementById('close-settings');

    function setBodySettings() {
        fehBody.classList.contains('settings-active') ? fehBody.remove('settings-active') : fehBody.add('settings-active');
    }

    function toggleSettings() {
        if(event.type === 'click') {
            setBodySettings();
        } else if(event.type === 'keydown' && event.keyCode === 27) {
            fehBody.classList.remove('settings-active');
        }
    }

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

        const totalDuration = isWorking ? workDuration : restDuration;
        const dashOffset = circumference * remainingTime / totalDuration;

        circleProgress.style.strokeDashoffset = dashOffset;
        timerTime.textContent = formatTime(remainingTime);
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')} : ${remainingSeconds.toString().padStart(2, '0')}`;
    }

    updateProgress();

})();