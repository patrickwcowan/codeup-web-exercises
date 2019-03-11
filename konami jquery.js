"use strict";
$(document).ready(function() {

    var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    var newKonamiCode = [];

    ///THIS IS HOW TO PUSH KEY INPUT INTO AN ARRAY
    $(document).keydown(function(event) {
        var inputValue = event.keyCode;
            newKonamiCode.push(inputValue);
            console.log(newKonamiCode);
            compareCheats()

    });

    ///THIS IS TO COMPARE THE TWO ARRAYS
    function compareCheats() {
        if (newKonamiCode.join() === konamiCode.join()) {
            $('.konami').css('background-color', 'green');
            $(".hiddenUnhidden").css('visibility', 'visible')
        }
    }


console.log(event.keyCode);
































});