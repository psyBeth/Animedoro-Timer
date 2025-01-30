(function() {

    const fehBody = document.body;

    const workDurationInput = document.getElementById('work-duration');
    const restDurationInput = document.getElementById('rest-duration');
    const timerTime = document.getElementById('timer-time');

    let workDuration = parseInt(workDurationInput.value) * 60;

    window.addEventListener('load', () => {
        fehBody.classList.add('page-loaded');
    });

})();