import {fetchWithTimeout, fetchMovies, fetchBooks} from './services.js';
const movies = require ('./data/movies.json');

/* ------ Old code from module 3 ------  */ 
// export function fetchMovies(){

//     const resolveFunction = () => movies;

//     return fetchWithTimeout(1000).then(resolveFunction);

// }

// const moviePromise = fetchMovies();
// moviePromise.then(results => {
//     console.log(results);
// });
/* ------ Old code from module 3 ------  */ 

function getBooksAndMovies(){

    return Promise.all([fetchBooks(), fetchMovies()])
                   .then(([books, movies]) => ({
                       books,
                       movies
                   }))
                    .catch(error => console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();
getBooksAndMoviesPromise.then(results => {
    console.log(results);
});