const searchButton = document.getElementById ('search-button');
const searchForm = document.querySelector ('.search-form');
const searchBox = document.getElementById ('search-box');
const inputSearch = document.querySelector ('.input-search')
    searchButton.addEventListener ('click', function (e) {
        searchForm.classList.toggle ('active');
        inputSearch.focus ();
        e.preventDefault ();
    });