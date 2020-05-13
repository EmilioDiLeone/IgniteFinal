let apikey = "&apikey=b9eb715b";

let titles = ["Big Bang Theory", "Family Guy", "Breaking Bad", "The Vampire Diaries", "Friends", "Gossip Girl", "How I Met Your Mother", "The Simpsons", "Futurama", "King of The Hill", "Orange is the New Black", "Bojack Horseman", "American Dad", "South Park", "Arrow", "CSI", "Smallville", "Cobra 11"];

async function loadName(titleId) {
    //get the serie for the given title
    let response = await fetch("http://www.omdbapi.com/?t=" + titleId + apikey);

    //transforms them into a javascript object
    let titleInfo = await response.json();
    //returns just the title inside of the data array
    return titleInfo;

}

async function loadInfo() {

    let seriesContanier = document.querySelector("#item");
    seriesContanier.innerHTML = "";

    titles.forEach(title => {

       loadName(title).then(tit => loadImg(tit, seriesContanier));
    })

}

async function loadImg(tit, seriesContanier) {

    seriesContanier.innerHTML += `<img id=item src = ${tit.Poster} alt = ${tit.Title}>`;

}
