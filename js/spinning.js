var ActiveSpinning = (function() {

    
    function getRandomSaying(array) {
        return array[Math.floor(Math.random()*array.length)];
    }

    function init(pre_5_switch) {
        if(pre_5_switch === 1) {
            $("#guessesGrid").removeClass('invisible');
            $("#activeTacoGrid, #displayFunkySayings").addClass('invisible');
        }

        if(day !== 5 && hour !== 15) {
            $("#guessesGrid").addClass('invisible');
            $("#activeTacoGrid, #displayFunkySayings").removeClass('invisible');
        }

        $("#displayFunkySayings").text(getRandomSaying(iDidntCopyThisFromDiscord));

        setInterval(function() {
            $("#displayFunkySayings").text(getRandomSaying(iDidntCopyThisFromDiscord));
        }, 3000);

    }

    return {
        init: init
    };

})();