const searchButton = document.getElementById ('search-button');
const searchForm = document.querySelector ('.search-form');
const searchBox = document.getElementById ('search-box')
    searchButton.addEventListener ('click', function (e) {
        searchForm.classList.toggle ('active');
        searchBox.focus ();
    });