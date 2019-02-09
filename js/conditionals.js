"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


// var questionNumber = confirm("Would you like to enter a number?");
//
//     if (questionNumber) {
//         var enterNumber = prompt("Please enter a number");
//         if (isNaN(enterNumber)) {
//             alert("You didn't enter a number.");
//
//         } else {
//             if (enterNumber % 2 === 0) {
//                 alert("Your Number is Even");
//             } else {
//                 alert("Your Number is Odd");
//             }
//             alert("Your number + 100 is: " + (+enterNumber + 100));
//             if (enterNumber < 0) {
//                 alert("Your number is negative");
//             } else {
//                 alert("Your number is positive");
//             }
//
//
//         }
//     } else {
//         alert("That's too bad!");
//     }
//
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(inputColor) {


    if (inputColor === "blue") {
        return "blue is my favorite color";
    } else if (inputColor === "red") {
        return "red is the color of roses"
    } else if (inputColor === "cyan") {
        return "I'm not sure what cyan is"
    } else if (inputColor === "orange") {
        return "orange is the color of oranges"
    } else if (inputColor === "yellow") {
        return "yellow is the color of pencils"
    } else if (inputColor === "green") {
        return "green is the color of grass"
    } else if (inputColor === "indigo") {
        return "indigo is a color I'm not sure about"
    } else if (inputColor === "violet") {
        return "violet is another color I'm not sure about"
    } else {
        return "Please re-enter a color"
    }
}

analyzeColor("blue");
analyzeColor("red");
analyzeColor("cyan");




// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

analyzeColor(randomColor);

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

var answer;

switch (randomColor) {
    case "red":
        answer = "red is the color of roses";
        break;
    case "orange":
        answer = "orange is the color of oranges";
        break;
    case "yellow":
        answer = "yellow is the color of pencils";
        break;
    case "green":
        answer = "green is the color of grass";
        break;
    case "blue":
        answer = "blue is my favorite color";
        break;
    case "indigo":
        answer = "indigo is a color I'm not sure about";
        break;
    case "violet":
        answer = "violet is another color I'm not sure about";
        break;
    default:
        answer = "This color does not work";

}

// console.log(answer); <-- Console.log


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// var colorInput = prompt("What is your favorite Color?"); <--- This is my prompt

// alert(analyzeColor(colorInput)); <-- my alert for my favorite input Color



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(discount,bill) {

    if (discount === 0) {
        return "You discount is nothing, your total is: $" + bill;
    } else if (discount === 1) {
        return "You discount is 10%, your total is: $" + (bill - (.10 * bill));
    } else if (discount === 2) {
        return "You discount is 25%, your total is: $" + (bill - (.25 * bill));
    } else if (discount === 3) {
        return "You discount is 35%, your total is: $" + (bill - (.35 * bill));
    } else if (discount === 4) {
        return "You discount is 50%, your total is: $" + (bill - (.50 * bill));
    } else if (discount === 5) {
        return "You discount is 100%, your total is: $0";
    } else {
        return "It seems like you don't have a lucky number"
    }

}

// console.log(calculateTotal(0, 100)); //returns 100 <---- ConsoleLogs
// console.log(calculateTotal(1, 100)); //returns 90 <---- ConsoleLogs
// console.log(calculateTotal(2, 100)); //returns 75 <---- ConsoleLogs
// console.log(calculateTotal(3, 100)); //returns 65 <---- ConsoleLogs
// console.log(calculateTotal(4, 100)); //returns 50 <---- ConsoleLogs
// console.log(calculateTotal(5, 100)); //returns 0 <---- ConsoleLogs

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var customerBill = prompt("What is your bill? Exp: 24.99 or 50");

alert("Your Lucky Number is: " + luckyNumber);
alert("Your price before before the discount was: $" + customerBill);
alert(calculateTotal(luckyNumber,customerBill));




