// Global
const URL = 'http://localhost:3000/movies'

// DOM Selectors
const movieList = document.querySelector('#movie-list');
const movieInfo = document.querySelector('#movie-info'); // not used
const img = document.querySelector('#detail-image');
const title = document.querySelector('#title');
const year = document.querySelector('#year-released');
const desc = document.querySelector('#description');
const watched = document.querySelector('#watched');
const bloodAmount = document.querySelector('#blood-amount');
const bloodForm = document.querySelector('#blood-form');
const bloodCount = document.querySelector('#amount');

// Fetch Functions
function getMovieMenu(url) {
    fetch('http://localhost:3000/movies')
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        renderMovieMenu(res)
        renderMovie(res[0])
    })
}

// Event Listeners
watched.addEventListener('click', btnToggle);

bloodForm.addEventListener('submit', addBlood);

// Event Handlers
function btnToggle() {
    // console.log('btnToggle func invoked');
    watched.textContent = (watched.textContent == 'Unwatched' ? 'Watched' : 'Unwatched');
    // (console.log(watched);)
}

function addBlood(e) {
    e.preventDefault();
    // console.log('addBlood func invoked');
    bloodCount.textContent = parseInt(bloodCount.textContent) + parseInt(e.target['blood-amount'].value);
    bloodForm.reset();
}

// Render Functions
function renderMovieMenu(data) {
    // console.log(data);
    data.forEach(element => {
        const movieImg = document.createElement('img');
        movieImg.src = element.image;
        // console.log(movieImg.src);
        // console.log(element.image);
        movieList.append(movieImg);

        movieImg.addEventListener('click', e => {
            renderMovie(element);
            // console.log('I was clicked');
        })
    })
}

function renderMovie(data) {
    // console.log(data);
    // console.log(data);
    // console.log(typeof data);
    // // console.log(data[0]);
    // console.log(data.image);
    img.src = data.image;
    title.textContent = data.title;
    year.textContent = data.release_year;
    desc.textContent = data.description;
    watched.textContent = (data.watched ? 'Watched' : 'Unwatched');
    // if (data.watched) {
    //     watched.textContent = 'Watched'
    // } else {
    //     watched.textContent = 'Unwatched'
    // };
    bloodAmount.textContent = data.blood_amount;
}

// Initializers
getMovieMenu(URL);