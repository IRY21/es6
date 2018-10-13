let movieList = document.getElementById('movies');

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url, done) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if(xhr.status === 200) {
                let json = JSON.parse(xhr.response);
                //console.log(json);
                //done(json.Search);
                resolve(json.Search);
            } else {
                //console.error(xhr.statusText);
                reject(xhr.statusText);
            }
        };
    
        xhr.onerror = function(error) {
            //console.error(error);
            reject(error);
        }
    
        xhr.send();
    });
}

const apikey = 'aed59106';
let batman = getData(`http://www.omdbapi.com/?apikey=${apikey}&s=batman`);
let superman = getData(`http://www.omdbapi.com/?apikey=${apikey}&s=superman`);

/* batman
    .then(movies => {
        movies.forEach(movie => addMovieToList(movie));
    })
    .catch(error => console.error(error));

superman
    .then(movies => {
        movies.forEach(movie => addMovieToList(movie));
    })
    .catch(error => console.error(error)); */

Promise.race([batman, superman])
    .then(movies => {
        movies.forEach(movie => addMovieToList(movie));
    })
    .catch(error => console.error(error));



/* function go(num) { // go
    return new Promise(function(resolve, reject) {
        let delay = Math.ceil(Math.random() * 3000);
        console.log(num, delay);
        setTimeout(() => {
            if(delay > 2000) reject(num);
            else resolve(num);
        }, delay);
    });
}

let p1 = go(1);
let p2 = go(2);
let p3 = go(3);

Promise.race([p1, p2, p3])
    .then(val => console.log(val))
    .catch(error => console.error(error)); */

/* getData(`http://www.omdbapi.com/?apikey=${apikey}&s=${search}`, function(movies) { //start
    movies.forEach(function(movie) {
        addMovieToList(movie);
    });
}); */