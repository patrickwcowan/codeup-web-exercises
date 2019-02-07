console.log('Hello from external JavaScript');

alert("Welcome to my Website");

var userInput = prompt('What is your favorite color?');

console.log('Great, ' + userInput + ' is my favorite color too');






var mermaid = prompt ('How many days did you rent The Little Mermaid?');
var bear = prompt ('How many days did you rent Brother Bear?');
var hercules = prompt ('How many days did you rent Hercules?');

alert("Your total amount would be " + (Number(mermaid) + Number(bear) + Number(hercules)) * 3);




var googlehours = prompt ('How many hours did you work at Google?');
var amazonhours = prompt('How many hours did you work at Amazon?');
var facebookhours = prompt ('How many hours did you work at Facebook?');

alert('Your paycheck should be ' + ((Number(googlehours)*400) + (Number(amazonhours)*380) + (Number(facebookhours)*350)));


var classisFull = confirm("Confirm that class is full");
var classSchedulesCheck = confirm("Class schedules check out");

var studentEnrolled = !classisFull && classSchedulesCheck;

alert("Student enrollment status:" + studentEnrolled);




var numberOfItems = prompt("Enter number of items bought: ");
var offerIsValid = confirm("Offer is valid?");
var isPremiumMember = confirm("Are you a premium Member");

var productDiscountApplied = (isPremiumMember || +numberOfItems > 2) && offerIsValid;

alert("Product discount status: " + productDiscountApplied);




// Ensuring that premium members offer is valid too