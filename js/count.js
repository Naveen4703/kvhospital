document.addEventListener('DOMContentLoaded', function() {
    var counters = document.querySelectorAll('.counter');

    counters.forEach(function(counter) {
        var countTo = parseInt(counter.textContent);
        var time = 1000; // total duration of the animation
        var delay = 10;  // delay between each frame
        var steps = time / delay;
        var countStep = countTo / steps;
        var currentCount = 0;

        counter.textContent = '0+';

        var updateCounter = function() {
            currentCount += countStep;
            if (currentCount < countTo) {
                counter.textContent = Math.floor(currentCount) + '+';
                setTimeout(updateCounter, delay);
            } else {
                counter.textContent = countTo + '+';
            }
        };

        updateCounter();
    });
});
