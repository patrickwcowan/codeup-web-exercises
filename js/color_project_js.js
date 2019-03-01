"use strict";

$(document).ready(function() {

function randomColor() {

    var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
    var output = colors[Math.floor(Math.random() * colors.length)];
    return output
}


    $('.changer').click(function () {
        $(this).css('background', randomColor());
        console.log('You changed to: ' + randomColor());
    });


    var count = 0;
    var max = 10;
    var interval = 50; // interval time in milliseconds

        setInterval(function () {
            $('.box1').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box2').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box3').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box4').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box5').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box6').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box7').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box8').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box9').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box10').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box11').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box12').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box13').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box14').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box15').css('background', randomColor());
    }, interval);

    setInterval(function () {
        $('.box16').css('background', randomColor());
    }, interval);






// function boxOne() {
//         var random = randomColor();
//         $('.box1').css('background', random);
//         console.log("Box 1 color is: " + random);
//         $('.changer').hover(
//             function() {
//                 $('.box1').html(random);
//             },
//             function() {
//                 $('.box1').html('<h1></h1>');
//             }
//         );
//     }
//
//
//     boxOne();
//
//     function boxTwo() {
//         var random = randomColor();
//         $('.box2').css('background', random);
//         console.log("Box 2 color is: " + random);
//         // $(".initial2").html(random);
//     }
//     boxTwo();
//
//     function boxThree() {
//         var random = randomColor();
//         $('.box3').css('background', random);
//         console.log("Box 3 color is: " + random);
//         // $(".initial3").html(random);
//     }
//     boxThree();
//
//     function boxFour() {
//         var random = randomColor();
//         $('.box4').css('background', random);
//         console.log("Box 4 color is: " + random);
//         // $(".initial4").html(random);
//     }
//     boxFour();
//
//     function boxFive() {
//         var random = randomColor();
//         $('.box5').css('background', random);
//         console.log("Box 5 color is: " + random);
//         // $(".initial5").html(random);
//     }
//     boxFive();
//
//     function boxSix() {
//         var random = randomColor();
//         $('.box6').css('background', random);
//         console.log("Box 6 color is: " + random);
//         // $(".initial6").html(random);
//     }
//     boxSix();
//
//     function boxSeven() {
//         var random = randomColor();
//         $('.box7').css('background', random);
//         console.log("Box 7 color is: " + random);
//         // $(".initial7").html(random);
//     }
//     boxSeven();
//
//     function boxEight() {
//         var random = randomColor();
//         $('.box8').css('background', random);
//         console.log("Box 8 color is: " + random);
//         // $(".initial8").html(random);
//     }
//     boxEight();
//
//     function boxNine() {
//         var random = randomColor();
//         $('.box9').css('background', random);
//         console.log("Box 9 color is: " + random);
//         // $(".initial9").html(random);
//     }
//     boxNine();























});