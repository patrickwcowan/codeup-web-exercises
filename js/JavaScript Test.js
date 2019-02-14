// 1.  create an array of shapes
    var shapes = ['circle', 'triangle', 'square', 'rectangle', 'sphere'];
// – prompt the user to search for a specific shape
//     var userSearch = prompt("What shape would you like? i.e circle, triangle, square, rectangle, sphere");
// – using a for loop, iterate through the array to log the shapes until the matching shape is found

// for (var i = 0; i < shapes.length; i++) {
//     var index = shapes.indexOf(userSearch);
//     if (index === i) {
//         console.log('Found you shape: ' + userSearch);
//         break;
//     } else {
//         console.log("Not your shape, this is : " + shapes[i]);
//     }
// }

// – once the shape is found, log a message (“Shape is found”) and use a break statement to exit loop.

    // console.log('Found you shape: ' + userSearch);

// 2.  Create a function that returns a random day of the week

    var daysOfTheWeek =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var randomNumber = Math.floor(Math.random() * 7);

    function randomDay(){
        return daysOfTheWeek[randomNumber];
    }

    // console.log(randomDay());

// 3.  Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// – someFunction("a") // returns 1
// – someFunction("z") // returns 26

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function someFunction(input) {
    var index = alphabet.indexOf(input);
    return (index + 1);
}

// console.log(someFunction("g")); // 7
// console.log(someFunction("m")); // 13

// 4.  Create a function that returns the longest string in a given array of string elements.

var foods = ['Cheese', 'Egg', 'Sandwiches', 'Hamburger', 'water'];

var lgth = 0;
var longest;
//
function longestString(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i].length > lgth) {
            lgth = input[i].length;
            longest = input[i];
        }
    }
    return longest
}

console.log(longestString(foods));





// 5.   Create a function that takes in two arrays of elements, including numbers. If all numbers added together in the first array is equal to all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array may contain non-numeric elements.
// – var arr1 = ['bob', 1, true, 1, 2];
// – var arr2 = [2, null, undefined, 0, 2, "apple"]
// – exampleFunction(arr1, arr2) // returns true

