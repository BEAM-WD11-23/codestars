import { getData, getPosts } from "./js/services/posts.service.js"

// Creating a Promise (You'll do this not often/rarely)

// Using a Promise (Often)
// getData('https://freetestapi.com/api/v1/moviess')
// .then(data => {
//     console.log(data);
//     let allPosts = ''

//     data.forEach(element => {
//         const post = `
//         <div class="post">
//             <img src=${element.poster} >
//             <h1>${element.title}</h1>
//             <p>${element.director}</p>
//         </div>
//         `
//         allPosts = allPosts + post
//     })

//     document.querySelector('body')
//     .innerHTML = allPosts
// })
// .catch(error => {
//     console.error(error);
//     document.querySelector('body')
//     .innerHTML = `<h3>Unfortunately and error occurred while getting the posts.</h3>`
// })



