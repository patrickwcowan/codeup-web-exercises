$(document).ready(function() {



    function randomChoice() {

        var colors = [boxOneFade(),boxTwoFade(),boxThreeFade(),boxFoureFade()];
        var output = colors[Math.floor(Math.random() * 4)];
        console.log(output)
    }

    // randomChoice();



    var boxOneFade = function() {
        $('.box1').hide().fadeIn(800);
    };

    var boxTwoFade =function() {
        $('.box2').hide().fadeIn(800);
    };

    var boxThreeFade = function() {
        $('.box3').hide().fadeIn(800);
    };


    var boxFoureFade = function() {
        $('.box4').hide().fadeIn(800);
    };

    $('button').click(function () {
        randomChoice()
    });




















});