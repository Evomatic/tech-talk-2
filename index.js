import fetch from 'node-fetch';

//CRUD - Create, Read, Update, and Delete.
//RESTful API - representational state transfer.
//CRUD is the standardized use of HTTP action verbs.

// Making `POST`, `GET`, `PATCH` and `DELETE` Requests Using `fetch`in JavaScript.

//GET - 📥 - recieve data
//POST - ✉️ - send data
//PATCH - 🩹 - update data
//DELETE - 🔥 - delete data


/**
 * 🦴 Fetch sends a network request to a server and returns some data!
 * Provides an interface that can allow web browsers to make an HTTP request to web servers.
 * Does this by taking the desired URL as a parameter and returning a promise of the fetched data.
 * In order to retrieve the data, you need to use the response method in two steps.
 */


/**
 * Will use a free fake API from https://jsonplaceholder.typicode.com/ that will act as the content we want to fetch.
 */


/**
 * Promises 🤞🤞
 * an object representing the eventual completion or failure of an asynchronous operation.
 * callback funtions - functions that are passed as an argument to another function.
 * In the case of promises, callback functions are attached, like a chain, instead of passed into a function.
 * Callbacks are added with .then() and .then(), ensures that scope of code will not be invoked until the current run finishes.
 * Invoked one after the other, in order of insertion.
 * Basically, each promise represents the completion of another asynchronous step in the chain.
 */

//GET - 📥 
fetch('https://jsonplaceholder.typicode.com/users')
//lets fetch some data!🦴 🦴 
.then(response => response.json())
//return of raw data
.then(results => console.log(results))
//returns parsed data as json
.catch(error => console.log('There was an error!', error));
//throw an error




//POST - ✉️ 
/**
 * common HTTP method that is used to send data to a server for creating or updating content.
 * Data sent is saved in the request body of the HTTP request.
 * using POST to ask the server to add new data.
 */

//The new user we want to add! 🧙‍♂️
const newUser = {
    name: "Harry Potter",
    username: "ChosenOne",
    email: "Hpotter@hogwarts.com",
    address: {
      street: 'Private Drive',
      suite: '4',
      city: 'Little Whinging',
      zipcode: '31428-2261',
    }
}


// fetch('https://jsonplaceholder.typicode.com/users', {
//     //supplying request options
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json', //telling fetch what we want to send a json file
// }, 
// body: JSON.stringify(newUser) //body of the content we want to send. A new user in this case. Must be converted to json
// })
// .then(response => response.json())
// .then(results => console.log('Success:', results))
// .catch((error) => {
//     console.log('Error:', error);
// });




//PATCH - 🩹
/**
 * Used when partial data needs to be updated.
 */

//point to the user id that we want to update.
// fetch('https://jsonplaceholder.typicode.com/users/11', {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         username: "gryffindor4lyfe"
//     })
// }).then(response => response.json())
// .then(results => console.log('Username updated!', results))
// .catch((error) => {
//     console.log('Error:', error);
// });


//DELETE - 🔥
/**
 * Delets the targeted data object.
 * Let's delete the user object we created.
 */

//point to the user id that we want to delete.
// fetch('https://jsonplaceholder.typicode.com/users/11', {
//     method: 'DELETE',
// })
// .then(response => response.json())
// .then(results => console.log('User was deleted!', results));



/** ✨ CONCLUSION ✨ */
/** Important for querying a database when you want to build an application.
 * The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.
 * 
 * 
 * 
 * Article: https://evomatic.medium.com/making-post-get-patch-and-delete-requests-using-fetch-in-javascript-aef26c4d385
 * Repository: 
 */



