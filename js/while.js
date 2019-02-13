///////////////////Loop While Exercise///////////

/////////////////// 2 ///////////////////////////

// var i = 2;
//
// while (i < 65537) {
//     console.log(i);
//     i = i * 2;
// }

/////////////////// 3 ///////////////////////////


var allCones = Math.floor(Math.random() * 50) + 50;


// for (var i = 0; i < 100; i++) {
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     if (allCones - conesBought > 0) {
//         console.log(conesBought + " cones sold!" );
//     } else {
//         console.log("I'm all sold out!")
//     }
// }


// for (var i = 0; i < 100; i++) {
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//     if (allCones - conesBought > 0) {
//         console.log(conesBought + " cones sold!" );
//         allCones = allCones - conesBought
//     } else if (allCones < conesBought) {
//         console.log("Cannot sell you " + conesBought + " cones, I only have " + allCones);
//     } else {
//         console.log("I'm all sold out!")
//     }
// }

console.log(allCones);

for (var i = 0; i < allCones; i++) {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (allCones === 0) {
        console.log("I'm all sold out!");
        allCones = allCones - conesBought
    } if (allCones - conesBought > 0) {
        console.log(conesBought + " cones sold!");
    } else {
        console.log("Cannot sell you " + conesBought + " cones, I only have " + allCones)
    }
}






