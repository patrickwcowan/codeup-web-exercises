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






do {
    var customerCones = Math.floor(Math.random() * 5) + 1;
    if (allCones - customerCones > 0) console.log(customerCones + " Cones Sold")
} 
while (allCones <= 0);

console.log("All out of Cones!");