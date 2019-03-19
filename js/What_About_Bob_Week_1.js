// Week 1 LAB Exercises


// Exercise 1
// The parameter weekday is true if it is a weekday, and the parameter vacation
// is true if we are on vacation. We sleep in if it is not a weekday or we're on ' +
// 'vacation. Return true if we sleep in.
//
// Examples
//
// sleepIn(true, true) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true

// function sleepIn(weekday,vacation) {
//     if (vacation === true || weekday === false) {
//         return true
//     } else if (weekday === true){
//         return false
//     }
// }
//
// console.log(sleepIn());

// Exercise 2
// Given two int values, return their sum. Unless the two values are the same, then
// return double their sum.
//
//     Examples
//
// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

// function sumDouble(value1,value2) {
//     return value1 + value2
// }


// Exercise 3
// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes
// the absolute value of a number.
//
//     Examples
//
// nearHundred(93) → true
// nearHundred(90) → true
// nearHundred(89) → false


// Exercise 4
// Given a string and a non-negative int n, return a larger string that is n copies of the original
// string.
//
//     Examples
//
// stringTimes('Hi', 2) → HiHi
// stringTimes('Hi', 3) → HiHiHi
// stringTimes('Hi', 1) → Hi


const laugh = num => 'ha'.repeat(num) + '!';
console.log(laugh(3));

function stringTimes(string,n) {
    return string.repeat(n)

}

// Exercise 5
// Return the number of times that the string "hi" appears anywhere in the given string.
//
//     Examples
//
// countHi('abc hi ho') → 1
// countHi('ABChi hi') → 2
// countHi('hihi') → 2

// Exercise 6
// Return true if the string "cat" and "dog" appear the same number of times in the given
// string.
//
//     Examples
//
// catDog('catdog') → true
// catDog('catcat') → false
// catDog('1cat1cadodog') → true

// Exercise 7
// Return the number of times that the string "code" appears anywhere in the given string,
//     except we'll accept any letter for the 'd', so "cope" and "cooe" count.
//
// Examples
//
// countCode('aaacodebbb') → 1
// countCode('codexxcode') → 2
// countCode('cozexxcope') → 2


// Exercise 8
// Given an array of ints, return true if 6 appears as either the first or last element in the array.
//     The array will be length 1 or more.
//
//     Examples
//
// firstLast6([1, 2, 6]) → true
// firstLast6([6, 1, 2, 3]) → true
// firstLast6([13, 6, 1, 2, 3]) → false



// Exercise 9
// Given an array of ints, return true if the array is length 1 or more, and the first element and
// the last element are equal.
//
//     Examples
//
// sameFirstLast([1, 2, 3]) → false
// sameFirstLast([1, 2, 3, 1]) → true
// sameFirstLast([1, 2, 1]) → true


// Exercise 10
// Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.


// Exercise 11
// Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same
// last element. Both arrays will be length 1 or more.
//
//     Examples
//
// commonEnd([1, 2, 3], [7, 3]) → true
// commonEnd([1, 2, 3], [7, 3, 2]) → false
// commonEnd([1, 2, 3], [1, 3]) → true


// Exercise 12
// Given an array of scores, return true if each score is equal or greater than the one before. The array will be length 2 or more.
//
//     Examples
//
// scoresIncreasing([1, 3, 4]) → true
// scoresIncreasing([1, 3, 2]) → false
// scoresIncreasing([1, 1, 4]) → true



//Exercise 13
// The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive).
//     Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.
//
//     Examples
//
// squirrelPlay(70, false) → true
// squirrelPlay(95, false) → false
// squirrelPlay(95, true) → true


// Exercise 14
// Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.
//
//     Examples
//
// endOther('Hiabc', 'abc') → true
// endOther('AbC', 'HiaBc') → true
// endOther('abc', 'abXabc') → true



// Exercise 15
// Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.
//
//     Examples
//
// endOther('Hiabc', 'abc') → true
// endOther('AbC', 'HiaBc') → true
// endOther('abc', 'abXabc') → true

// Exercise 16
// Given an array of ints length 3, return the sum of all the elements.
//
//     Examples
//
// sum3([1, 2, 3]) → 6
// sum3([5, 11, 2]) → 18
// sum3([7, 0, 0]) → 7


// Exercise 17
// Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.
//
// Examples
//
// rotateLeft3([1, 2, 3]) → 2,3,1
// rotateLeft3([5, 11, 9]) → 11,9,5
// rotateLeft3([7, 0, 0]) → 0,0,7


// Exercise 18
// Return the number of even ints in the given array. Note: the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.
//
// Examples
//
// countEvens([2, 1, 2, 3, 4]) → 3
// countEvens([2, 2, 0]) → 3
// countEvens([1, 3, 5]) → 0

// Exercise 19
// Given an array length 1 or more of ints, return the difference between the largest and smallest values in the array. Note: the built-in Math.min(v1, v2) and Math.max(v1, v2) methods return the smaller or larger of two values.
//
//     Examples
//
// bigDiff([10, 3, 5, 6]) → 7
// bigDiff([7, 2, 10, 9]) → 8
// bigDiff([2, 10, 7, 2]) → 8


// Exercise 20
// You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
//
//     Examples
//
// caughtSpeeding(60, false) → 0
// caughtSpeeding(65, false) → 1
// caughtSpeeding(65, true) → 0