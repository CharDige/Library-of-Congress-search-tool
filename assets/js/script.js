var searchInputEl = $("#search-input");
var searchBlockEl = $("#search-block");
var searchResultsEl = $("#search-results");
var searchButton = $("#search-button")

var apiUrl = "https://www.loc.gov/search/?q=baseball&fo=json";

var submitButtonHandler = function(event) {
    event.preventDefault();

    var searchResults = function(){
        fetch(apiUrl).then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                })
            }
        })
    }

    searchResults();
}





searchButton.on("click", submitButtonHandler);
