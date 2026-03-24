let searchInputEl = document.getElementById('searchInput');
let searchResultsEl = document.getElementById('searchResults');
let spinnerEl = document.getElementById('spinner');

function creatAndAppendResult(result) {
    let {
        link,
        title,
        description
    } = result;
    //creating ResultItem
    let resultItem = document.createElement("div");
    resultItem.classList.add("result-item");

    //creating Title Element
    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItem.appendChild(titleEl);

    //creating break Element
    let titleBreakEl = document.createElement("br");
    resultItem.appendChild(titleBreakEl);

    //creating link Element
    let linkEl = document.createElement("a");
    linkEl.href = link;
    linkEl.target = "_blank";
    linkEl.textContent = link;
    linkEl.classList.add("result-url");
    resultItem.appendChild(linkEl);

    //creating break Element
    let linkBreakEl = document.createElement("br");
    resultItem.appendChild(linkBreakEl);

    //creating discripton
    let discriptionEl = document.createElement("p");
    discriptionEl.textContent = description;
    discriptionEl.classList.add("link-description");
    resultItem.appendChild(discriptionEl);


    searchResultsEl.appendChild(resultItem);
}


function displayresult(searchResult) {
    spinnerEl.classList.add("d-none");
    for (let result of searchResult) {
        creatAndAppendResult(result);
    }
}

function wikipediaSearch(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";
        let input = searchInputEl.value;
        let url = "https://en.wikipedia.org/wiki/https://en.wikipedia.org/wiki/Help:Searching" + input;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
               let { search_results } =jsonData;
                
                displayresult(search_results);
            });
    }
}

searchInputEl.addEventListener("keydown", wikipediaSearch)