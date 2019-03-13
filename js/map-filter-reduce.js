const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// for (var i =0;i<users.length;i++)
// console.log(users[i].email.length);

//TODO: Use .filter to create an array of user objects where each user object has at
// least 3 languages in the languages array.

// var threeLanguages = users.filter(function (user) {
//     return user.languages.length >= 3
// });

//or

// var threeLanguages = users.filter(user => user.languages.length >= 3);
//
// console.log(threeLanguages);

//TODO: Use .map to create an array of strings where each element is a user's email address

// var emails = users.map(function (user) {
//     return user.email
// });

//or

// var emails = users.map(user => user.email);
//
// console.log(emails);

//TODO: Use reduce to get the total years of experience from the list of users. Once you get
// the total of years you can use the result to calculate the average.

// var totalYears = users.reduce(function (accumulator, users) {
//     return accumulator + users.yearsOfExperience;
// }, 0);

// var totalYears = users.reduce((n,users) => {
//     return n + users.yearsOfExperience;
// }, 0);
//
//
// console.log(totalYears);

// let averageExerpience = totalYears/users.length;
//
// console.log(averageExerpience);


//TODO: Use reduce to get the longest email from the list of users.

// var longestEmail = users.reduce(function (total,email) {
//     if (email.email.length > total.length) {
//         total = email.email
//     } return total
// }, '');
//
// console.log(longestEmail);


//TODO: Use reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.


// let arrayOfNames = users.reduce((total,name) =>{ return total + ',' + name.name}, '' );
//
// console.log(arrayOfNames);


//TODO: Bonus Use reduce to get the unique list of languages from the list of users.

let uniqueLanguages = users.reduce(function (list , language) {
   list += language.languages;
   list = Array.from(new Set(list.split(','))).toString();
   return list

},);

console.log(uniqueLanguages);


// FILTER
//If the callback returns true, them element will be in the new collection, if it returns false; the element will not

// var arrayEven = users.filter(function (n) {
//     return (n.id % 2 === 0)
// });
//
// console.log(arrayEven);
//
// ////written both ways
//
// var arrayOdd = users.filter(n => n.id % 2 === 1);
//
// console.log(arrayOdd);

//MAP
// the return value of the callback will be the new value of the element

// var maps = users.map(function (n) {
//     return n.id + 2
// });
//
// console.log(maps);
//
// /// written both ways
//
// var newMaps = users.map(n => n.id + 2);
//
// console.log(newMaps);


//REDUCE
// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 0);
//
// console.log(sum);
//
// const sum1 = numbers.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue
// }, 0);
//
// console.log(sum1);

// const salesPeople = [
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ];
//
// console.log(salesPeople.length);
//
// const totalSales = salesPeople.reduce((total, person) => {
//     return (total + person.sales);
// }, 0);
//
// console.log(totalSales);


// const numbers = [1,2,3,4,5];

////////////MAP//////////////

/// adding 1 to each element
// const newNumbers = numbers.map(function (n) {
//    return n + 1
// });

// const newNumbers = numbers.map(n => n + 1);
//
// console.log(newNumbers);


/// adding the index of each number to the element
// const addOne = numbers.map(function (n) {
//    return n + numbers.indexOf(n);
// });
//
// const addONe = numbers.map(n => n + numbers.indexOf(n));
//
// console.log(addOne);

////////////FILTER//////////////
// const onesAndZeros = [0,1,0,0,1,0,1,1,0];
//
// var allOnes = onesAndZeros.filter(function (n) {
//     return (n % 2) === 1
// });

// var allOnes = onesAndZeros.filter(n => (n % 2) === 1);
//
// console.log(allOnes);

// var allZeros= onesAndZeros.filter(function (n) {
//     return (n % 2) === 0
// });

// var allZeros = onesAndZeros.filter(n => (n % 2) === 0);

// var allZeros = onesAndZeros.filter(n => n == false);
//
// var allOnes = onesAndZeros.filter(n => n == true);
//
// console.log(allZeros);
// console.log(allOnes);

////////////REDUCE//////////////

// const numbers = [1,2,3,4,5];
//
// const sum = numbers.reduce(function (total,randomNumber) {
//    return total + randomNumber
// });
//
// console.log(sum);



// const colors = ['blue', 'yellow', 'green', 'neon', 'black', 'blue', 'yellow', 'blue'];


// function counterColoros(array) {
//     const colorCountObject = array.reduce((totalColors, color) => {
//         if (typeof totalColors[color] === 'undefined') {
//             totalColors[color] = 1;
//         } else {
//             totalColors[color] += 1;
//         }
//             return totalColors;
//     }, {});
//     return colorCountObject
// }
//
// console.log(counterColoros(colors));


// const lyrics = ['we', 'all', 'live', 'in', 'the', 'yellow'];
//
// const oneLine = lyrics.reduce((previous,current) => previous + ' ' + current);
//
// console.log(oneLine);

// const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
//
// // Create an array of the first letters of each fruit
//
// var firstThree = fruits.map(function (n) {
//     for (var i = 0; i < n.length;i++)
//       var output = n[i];
// });
//
// console.log(firstThree);

// Create array of user objects based on the customers array of objects (each
// user object should just have name and age properties)

// Create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects