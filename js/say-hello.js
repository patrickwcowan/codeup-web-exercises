//say-hello.js

function sayHello() {
    return "Hi from Patrick's other file"
}


function sayBye() {
    return "Bye from Patrick's other file"
}

// require 1 function
module.exports = sayHello;

//require 2 function
// module.exports = {sayHello,sayBye};

// export default {sayHello,sayBye};

// export const niceMessage = function () {
//     return 'hi'
// };