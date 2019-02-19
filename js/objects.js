
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Patrick",
        lastName: "Cowan"
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return 'Hello from ' + person.firstName + " " + person.lastName
    };

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'Patrick', amount: 30},
        {name: 'Kelsey', amount: 1000},
        {name: 'Kristen', amount: 15},
        {name: 'Danielle', amount: 25}

    ];

    shoppers.forEach(function (element, index, array) {
        var discount = shoppers[index].amount * .12;
        var discountTotal = (shoppers[index].amount - (shoppers[index].amount * .12));
        if (shoppers[index].amount > 200) {
            console.log(shoppers[index].name + ", your total is: " + shoppers[index].amount + ". Your discount is: " +
            discount + ". and your final total is " + discountTotal);
        } else {
            console.log('Sorry, ' + shoppers[index].name + " you don' get a discount, so your total is: " + shoppers[index].amount)
        }
    });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title:'1984',
            author: {
                firstName:'George' ,
                lastName:'Orwell'
            }
        },
        {
            title:'A Brief History of Time',
            author: {
                firstName:'Stephen' ,
                lastName:'Hawking'
            }
        },
        {
            title:'All the President',
            author: {
                firstName:'Bob',
                lastName: 'Woodward'
            }
        },
        {
            title:'Dune',
            author: {
                firstName:'Frank',
                lastName:'Herbert'
            }
        },
        {
            title:'Fahrenheit 451',
            author: {
                firstName:'Ray',
                lastName:'Bradbury'
            }
        }
    ];

    console.log(books);

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);

    console.log(books[1].title);
    console.log(books[1].author.firstName);
    console.log(books[1].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // for (var i = 0; i < 5; i++) {
    //     var bookNumber = (i + 1);
    //     console.log("Book # " + bookNumber + " Title: " + (books[i].title) + " Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    //
    // }

    for (var i = 0; i < 5; i++) {
        var bookNumber = (i + 1);
        console.log("Book # " + bookNumber + " Title: " + (books[i].title) + " Author: " + books[i].author.firstName + " " + books[i].author.lastName);

    }




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var bookies =[];

    function createBook(bookTitle, first, last) {
        bookies.push({title: bookTitle, author: {firstName: first, lastName: last}});
        return books
        }


        createBook("The Bible", "John", "Smith");
        createBook("The Bible", "John", "Smith");
        createBook("The Bible", "John", "Smith");

        console.log(bookies);

