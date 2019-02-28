"use strict";
$(document).ready(function() {

    // ID Selectors
    //     alert($('#olist').html());
    //     alert($('#name').html());

    //Class Selectors
    // $('.codeup').css('border', '1px solid red');

    //Element Selectors
    // $('li').css('font-size', '20px');
    //
    // $('h1').css('background-color', 'yellow');
    // $('p').css('background-color', 'yellow');
    // $('li').css('background-color', 'yellow');
    // alert($('h1').html());

    //Multiple Selectors
    // $("p, li, h1").css('background-color', 'yellow');

    // $('*').css('background-color', 'red');

    $('h1').click(function () {
        $('h1').css('background', 'yellow')
    });


    $('p').dblclick(function () {
        $(this).css('font-size', '18px')
    })

    $('li').hover(
        function () {
            $('li').css('color', 'red');
        },
        function () {
            $('li').css('color', 'black');
        }


    )



























});