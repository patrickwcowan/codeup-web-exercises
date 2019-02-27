// ------------- PRACTICE 1
// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascending order.
//     Example input: ["fred", true, 5, 3]
// Example output: [3, 5]

var randomInput = ["cat", true, 8, 3, "dog", false, 4, 7];
//
// function filterNumbers(input) {
//     for(var i = 0; i <= 10; i++) {
//         if(!isNaN(parseFloat(i))){
//             return input.sort().slice(0,4);///returns [3, 5, "7"]
//         }
//     }
// }
// console.log(filterNumbers(randomInput));

function filterNumbers(arr) {
    var output = [];

    //loop through array and delete non-numbers

    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            output.push(arr[i]);
        }
    }
    //arrange number in chronological order
    output.sort();

    return output;
}

console.log(filterNumbers(randomInput));



// ------------- PRACTICE 2
// Write a function, getOlder() that takes in array of dog objects and increases the value of the age properties by 1.
var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];

function getOlder() {
    dogs.forEach(function(element, index, array){
        element.age = element.age + 1;
    });
}

(getOlder());
console.log(dogs);






// ------------- PRACTICE 3
// Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false
var myCars = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
]
// Example output:
//     [
//         {
//             make: 'Volvo',
//             color: 'red',
//             year: 1996,
//             isDirty: false // changed to false
//         },
//         {
//             make: 'Toyota',
//             color: 'black',
//             year: 2004,
//             isDirty: false // stays the same
//         },
//         {
//             make: 'Ford',
//             color: 'white',
//             year: 2007,
//             isDirty: false // changed to false
//         }
//     ]


function washCars() {
    myCars.forEach(function(element, index, array){
        element.isDirty = false;
    });
}

(washCars());
console.log(myCars);


// ------------- PRACTICE 4
// Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the 
// isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins
var userObjects = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
];
// Example Output (before refactor): 2
// Example Output (after 1st refactor): [
//     'user1@email.com',
//     'user2@email.com'
// ]
// Example Output (after 2nd refactor): [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]

function adminList() {
   for (var i = 0; i < userObjects.length; i++) {
    if (userObjects.isAdmin === true) {
        return userObjects;
    }
}}

console.log(adminList());


// ------------- PRACTICE 5
// Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//     Example Input:
//     var breads  = [
//         "white",
//         "wheat",
//         "rye",
//         "white"
//     ];
// var fillings = [
//     "pb&j",
//     "ham",
//     "cheese steak",
//     "tuna"
// ];
// makeSandwhichObjects(breads, fillings) // example call to the function
// Example Output: [
//     {
//         bread: "white,
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rye",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ]
// Collap