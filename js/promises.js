function wait(seconds) {

    return new Promise((resolve) => {
        setTimeout(function () {
        resolve()
        }, seconds)
    })

}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

function usernameSearch(username) {

    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${githubtoken}`}})
        .then(response => response.json().then(updatedResponse => {
            console.log(updatedResponse[0].created_at);
        }))
}

usernameSearch('patrickwcowan');


///Promises Notes

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() =>
//     {
//         let number = Math.random();
//         console.log(number);
//         if (number > .5) {
//             resolve();
//         } else {
//             reject()
//         }
//     }, 1500);
// })
//
// // console.log(myPromise);
//
// .then(() => console.log('resolved!'))
// .catch(() => console.log('rejected!'));

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() =>
//     {
//         let number = Math.random();
//         if (number > .5) {
//             resolve(`Here is your number ${number}`);
//         } else {
//             reject(`There was an error`)
//         }
//     }, 500);
// })
//
// // console.log(myPromise);
//
//     .then((thing) => console.log(thing))
//     .catch((thing) => console.log(thing));

// const letsPromise = function () {
//     const myPromise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let number = Math.random();
//             console.log(number);
//             if (number > .5) {
//                 resolve();
//             } else {
//                 reject()
//             }
//         }, 500);
//     })
//
//         .then(() => console.log('resolved!'))
//     .catch(() => console.log('rejected!'));
//
// };
//
// letsPromise();
//
// console.log(letsPromise);

// fetch('https://api.github.com/users/patrickwcowan')
//     .then(response => console.log(response.json()))
//     .catch(error => console.error(error));





