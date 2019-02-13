///////////////////Break and Continue////////////

/////////////////// 2 ///////////////////////////
var random = prompt("Please enter a odd number between 1 and 50");

for (var i = 1; i < 50; i) {

    if (+random % 2 === 0){

        random = prompt("Please re-enter a valid Odd number");

        continue;

    } else {
        console.log("Your Odd Number is: " + random)
    }

    if (i % 2 === 1){
        break
    }

}




/////////////////// 3 ///////////////////////////

var random = prompt("Enter a random number");

console.log("Random odd number to skip is: " + random);

for (var i = 1; i < 100; i++) {

    if (i % 2 === 0) {
        //Skip the even numbers.
        continue;
    }

    if (+random === i) {
        console.log("Yikes! Skipping number: " +i);
    } else {
        console.log("Here is an odd number: " +i);
    }

    if (i > 48) {
        break;
    }

}
