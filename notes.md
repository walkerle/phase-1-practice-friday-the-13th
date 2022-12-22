# Core Deliverables

[x] Run json-server --watch db.json

Challenge #1
[x] Create image for each movie (.createElement, .forEach)
[x] Append image to #movie-list <nav> (find target, .append())

Challenge #2
[x] Load first page dataset (capture .movie id=1 Friday the 13th)
Note have response in fetch to capture first page, but have function to call each detail

Challenge #3
[x] 'Click' event captures image, title, year, description, watched, blood_amount (event Listener, update html elements)
[x] Make button settings; 'UnWatched' for false vs 'Watched' for true

Challenge #4
[x] Make button settings toggle 'Watched' and 'Unwatched' when clicked depending on value of watched (from front end? or fetch/backend?) (event listener, PATCH method?)

Challenge #5
[x] Enable more drops for button form

# Data Shape
{
    "movies" : [
        {
            "id": 1,
            "title": "Friday the 13th",
            "release_year": 1980,
            "description": "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child's drowning.",
            "image": "./assets/f13-1.jpeg",
            "watched": false,
            "blood_amount": 0
        },