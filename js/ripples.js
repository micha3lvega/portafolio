$(document).ready(function () {
    
    try {

        $('body').ripples({
            resolution: 1024,
            dropRadius: 20, //px
            perturbance: 0.1,
        });
    }
    catch (e) {
        console.log(e)
        console.error('exception: ' + e)
    }

    // Automatic drops
    var executionCount = 0;
    var maxExecutions = 100;
    var intervalId = setInterval(function () {

        if (executionCount >= maxExecutions) {
            clearInterval(intervalId);
            return;
        }

        var $el = $('body');
        var x = Math.random() * $el.outerWidth();
        var y = Math.random() * $el.outerHeight();
        var dropRadius = 20;
        var strength = 0.04 + Math.random() * 0.04;
        $el.ripples('drop', x, y, dropRadius, strength);

        executionCount++;

    }, 400);

});