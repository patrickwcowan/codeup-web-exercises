"use strict";

/////--------------------------------FUNCTION BONUS WORK---------------------------------////

// Write a function, isShortWord, that takes in a string and
// returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.

// function isShortWord(character) {
//     return character.length < 5
//
// }
//
// console.log(isShortWord("Wdddd"));

// Write a function, isSameLength, that takes in two string
// inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.

// function isSameLength(string1 ,string2) {
//     return string1.length == string2.length
//
// }
//
// console.log(isSameLength("Wha6","What1"));

// Write a function, getSmallerSegment, that takes in a string and a
// number input. The function should return a substring of the first argument
// // that is as many characters long as the second argument in lowercase.
//
// function getSmallerSegment(myString , myNumber) {
//    return myString.substring(0, myNumber).toLowerCase()
// }
//
// console.log(getSmallerSegment("WDFDFDS",4 ));

// example input: getSmallerSegment("Codeup", 3)
// example output: "cod"



// var globalVar = "Look, I'm Global";
//
// function scopeExample() {
//     var localVar = "Look I'm Local"
//     alert(localVar);
//     alert(globalVar);
// }
//
// scopeExample();

// Make a function named isOdd(number)
    function isOdd(number) {
        return (number % 2) === 1
    }

    isOdd(6);

// Make a function named isEven(number)

    function isEven(number) {
        return (number % 2) === 0
    }

    isEven(7);

// Make a function named identity(input) that returns the input exactly as provided.

    function identity(input) {
        return input
    }

    identity("Hey Patrick!");

// Make a function named isFive(input)
    function isFive(input) {
        return input == 5;
    }

    isFive(5);


// Make a function named addFive(input) that adds five to some input.
    function addFive(input) {
        return input + 5
    }

    addFive(10);

// Make a function named isMultipleOfFive(input)
    function isMultipleOfFive(input) {
        return (input % 5) === 0;
    }

    isMultipleOfFive(120);

// Make a function named isThree(input)
    function isThree(input) {
        return input == 3;
    }

    isThree(3);
// Make a function named isMultipleOfThree(input)

    function isMultipleofThree(input) {
        return (input % 3) === 0;
    }

    isMultipleofThree(3);

// Make a function named isMultipleOfThreeAndFive(input)

    function isMultipleOfThreeAndFive(input) {
    return (input % 3) === 0 && (input % 5) === 0
    }

    isMultipleOfThreeAndFive(15); //True
    isMultipleOfThreeAndFive(15); //False
    isMultipleOfThreeAndFive(12);  //False



// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

    function isMultipleOf(target, n) {
      return (target % n)  === 0;
    }

    isMultipleOf(11,2); //False
    isMultipleOf(11,3); //False
    isMultipleOf(12,2); //True




// Make a function named isTrue(boolean)

function isTrue(boolean) {
    return boolean;
}

// Make a function named isFalse(boolean)
// Make a function named isTruthy(input), remember that values other than true will behave like true
// Make a function named isFalsy(input), remember that values other than false behave like false
// Make a function named isVowel(letter)

    function isVowel(letter) {
        return (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'
            || letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U' );
    }

    isVowel('a'); // True
    isVowel('b'); // False
    isVowel('c'); // False
    isVowel('A'); // True

// Make a function named isConsonant(letter)

    function isConstonant(letter) {
    return (letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u'
    && letter !== 'A' && letter !== 'E' && letter !== 'I' && letter !== 'O' && letter !== 'U' );
}

isConstonant('a'); // False
isConstonant('b'); // True
isConstonant('c'); // True
isConstonant('A'); // False



// Make a function named isCapital(letter)

    function isCapital(letter) {
       return letter === letter.toUpperCase()
    }

isCapital('A'); //True
isCapital('a'); //False

// Make a function named isLowerCase(letter)

    function isLowerCase(letter) {
        return letter === letter.toLowerCase()
}

isLowerCase('c'); //True
isLowerCase('C'); //False

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter

    function hasLowerCase(string) {
        return string !== string.toUpperCase()

    }

hasLowerCase("Hi"); // True

// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named isZero(number)
// Make a function named notZero(input) that returns true if the input is not zero
// Write a function named lowerCase(string)
// Write a function named double(n) that returns a number times two
// Write a function named triple(n) that returns a number times 3
// Write a function named quadruple(n) that returns a number times 4
// Write a function named half(n) that returns 1/2 of the provided input
// Write a function named subtract(a, b) that returns a minus b
// Write a function named multiply(a, b) that returns the product of a times b
// Write a function named divide(a, b) that returns a divided by b
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
// Write a function named cube(n) that returns n * n * n
// Write a function named squareRoot(n) that returns the square root of the input
// Write a function named cubeRoot(n) that returns the cube root of the input
// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
// Write a function named degreesToRadians(number)
// Write a function named radiansToDegrees(number)
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
// Make a function named trim(string) that removes empty spaces before and after the input.
// Make a function named areEqual(input1, input2) that returns if both inputs have the same value
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
// Make a function named not(input) returns the input with a flipped boolean
// Make a function named notNot(input) that the negation of the negation of the input.
// Make a function named and(predicate1, predicate2) that returns the logical operation of AND
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.

/////--------------------------------CONDITIONALS BONUS WORK---------------------------------////

// Write a function makeJustinMessage() that returns the string "It's Justin!"
// if the input to the function is the string "justin" and "It's not Justin" otherwise.
//     If the input contains white space or numbers, return the string "INVALID INPUT".

function makeJustinMessage() {
    return "It's Justin!"
}

console.log(makeJustinMessage());


// Write a function that returns a string describing the action to be taken for a given street light color input. For example, if the function input is the string "red", a message like "STOP!" could be returned from the function. Input should not be case sensitive.
//
//     __
// Create a function that simply returns an input as an output. If no input is passed to the function when it is called, return the string "no input provided."
//
// __
// Create a function that returns a unique message string for a given digit input. If the input is not a single digit, return the string "too many digits". If the input is not a number, return "invalid input". String digits like "1" or "9" are valid inputs.
//
//     __
// Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
//     Catch any invalid inputs (not indicating a day of the week).
// For each day, allow the user to enter the abbreviated day (e.g. 'Monday', 'monday', 'Mon', or 'mon')
//
// __
// Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// - use an if/else
//     - refactor to use a ternary operator
//
// __
// Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter). The function then alerts the months available in that season and then asks the user to pick a given month. After selecting the month, alert a unique message for the month.
// - account for any invalid user input
// - case of input should not matter
// - accept both abbreviations and full names of the months
//
// __
// GOLD STAR BONUS
//
// Create a distance-unit-conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//
//     Prompt the user for a second unit of measurement to convert to.
//
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
//
// Use these conversion functions to make the correct unit conversion
//
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.
//
//     DOUBLE GOLD STAR BONUS
//
//     Allow unit conversion to metric system units