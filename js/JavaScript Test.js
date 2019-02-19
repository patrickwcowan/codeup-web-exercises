// Mini Exercise 3
// PAIR UP!
//     Create a dog object...
//     The dog object should have properties for:
//     breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
//     bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array

function bark() {
    console.log("Woof");
}

function fix() {
    if (dog.sterilized === false){
        dog.sterilized = true
    }
}

function getOlder() {
    dog.age = dog.age + 1;
}

function vaccinate(nameOfShot,currentdate,index) {
    dog.shotRecords[index].typeOfShot = nameOfShot;
    dog.shotRecords[index].date = currentdate;
}

var dog = {
    breed: "Chow",
    weightInPounds: 12,
    age: 4,
    color: "White",
    sterilized: false,
    shotRecords: [
        {
        date:'',
        typeOfShot:''
        },
        {
        date:'',
        typeOfShot:''
        }
    ],
    vaccinate: vaccinate,
    dogSound: bark,
    dogOlder: getOlder,
    getFixed: fix
};

dog.dogSound();
console.log(dog.age);
dog.dogOlder();
console.log(dog.age);
console.log(dog.sterilized);
dog.getFixed();
console.log(dog.sterilized);
console.log(dog.shotRecords[0]);
dog.vaccinate("Heart Worms", "Feb 15", [0]);
console.log(dog.shotRecords[0]);
console.log(dog.shotRecords);
