let btnXHR = document.getElementById('xhrSearch');
let btnFetch = document.getElementById('fetchSearch');
let btnFetchAsyncAwait = document.getElementById('fetchAsyncAwaitSearch');

let searchText = document.querySelector('header input[type="text"]');
let searchResults = document.getElementById("searchResults");

// Constants
const url = "https://api.giphy.com/v1/gifs/search";
const api_key = "nkw1Ciqhez94sD08IdKE7Iw8cr89s8dP";

btnXHR.addEventListener("click", function () {
    // Clear previous search results
    searchResults.innerHTML = "";
    fetchGiphyAPI_UsingXHR(searchText.value);
});

btnFetch.addEventListener("click", function () {
    // Clear previous search results
    searchResults.innerHTML = "";
    fetchGiphyAPI_UsingFetch(searchText.value);
});

btnFetchAsyncAwait.addEventListener("click", function () {
    // Clear previous search results
    searchResults.innerHTML = "";
    fetchGiphyAPI_UsingFetchAsyncAwait(searchText.value)
        .catch((e) => {
            console.error(e);
        });
});


function fetchGiphyAPI_UsingXHR(keyword) {
    if (!keyword) {
        return;
    }

    let params = `api_key=${api_key}&limit=5&q=` + encodeURIComponent(keyword);
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            processResponse(JSON.parse(this.responseText));
        }
    });

    xhr.open("GET", `${url}?${params}`);
    xhr.send();
}

function processResponse(resp) {
    for (let item of resp.data) {
        let imgElement = document.createElement("img");
        imgElement.src = item.images.downsized_medium.url;
        imgElement.alt = item.title;
        searchResults.appendChild(imgElement);
    }
}

function fetchGiphyAPI_UsingFetch(keyword) {
    if (!keyword) {
        return;
    }
    let params = `api_key=${api_key}&limit=5&q=` + encodeURIComponent(keyword);
    let requestOptions = {
        method: 'GET'
    };
    fetch(`${url}?${params}`, requestOptions)
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            processResponse(JSON.parse(data));
        })
        .catch((e) => {
            console.error(e);
        });
}


async function fetchGiphyAPI_UsingFetchAsyncAwait(keyword) {
    if (!keyword) {
        return;
    }

    let params = `api_key=${api_key}&limit=5&q=` + encodeURIComponent(keyword);
    let requestOptions = {
        method: 'GET'
    };

    try {
        const response = await fetch(`${url}?${params}`, requestOptions);
        const data = await response.json();
        processResponse(data);
    } catch (e) {
        console.error(e);
    }
}
