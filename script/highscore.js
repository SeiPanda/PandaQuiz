loadPoints();
loadHighscoreListe();

let highscores = [];
let lsScores = localStorage.getItem("playerScores");

if(lsScores) {
    highscores = JSON.parse(lsScores);
}

let referrerFile = document.referrer.split("/")[document.referrer.split("/").length-1];
if(referrerFile === "quiz.html") {
    document.querySelector("#PopUpName").style.display = "flex";
}

function loadPoints () {
    let currentPoints = localStorage.getItem("score");
    document.querySelector("#currentPoints").innerText = currentPoints;
}

function loadHighscoreListe(){
    
    document.querySelector("#table-container").innerHTML = "";

    let storageScores = localStorage.getItem("playerScores")
    let playerScores = [];
    if(storageScores)
        playerScores = JSON.parse(storageScores);


    //load all highscores
    let allHighscores = [];
    let div = '<div id="eachCategoryTable"><div id="heading-container"><span iD="heading">Highscore</span><span>&nbsp;&nbsp;&nbsp;</span><span id="heading2">RANKING</span></div><div id="highscoreTable-container"><div id="table-container">';
    playerScores.forEach( category => {
        category.scores.forEach( player => {
            allHighscores.push(player);
        });
    });
    allHighscores.sort( (a, b) => Number(b.score) - Number(a.score) );
    allHighscores.forEach( (player, index) => {
        div += "<div class='score-outer'><div class='countBox'><span class='count'>"  + (index+1) + "</span></div><span class='name'>" + player.name + "</span><span class='score'>" + player.score + "</span></div>";
    });

    div += "</div></div></div>";
    document.querySelector("#table-container").innerHTML += div;
    div = "";


    playerScores.forEach( category => {
        let div = '<div id="eachCategoryTable"><div id="heading-container"><span iD="heading">' + category.category + '</span><span>&nbsp;&nbsp;&nbsp;</span><span id="heading2">RANKING</span></div><div id="highscoreTable-container"><div id="table-container">';
        //hier dann die scores
        category.scores.sort( (a, b) => Number(b.score) - Number(a.score) );
        category.scores.forEach( (player, index) => {
            console.log(player);
            div += "<div class='score-outer'><div class='countBox'><span class='count'>"  + (index+1) + "</span></div><span class='name'>" + player.name + "</span><span class='score'>" + player.score + "</span></div>";
        });
        div += "</div></div></div>";
        document.querySelector("#table-container").innerHTML += div;
    });
}

document.querySelector(".headerlogo").addEventListener("click", handleClickLogo);

function handleClickLogo() {
    window.location="/index.html";
}

document.querySelector("#menu").addEventListener("click", loadMenu);

let menuOpen = false;
function loadMenu(){
    document.querySelector("#menu-container").classList.toggle("show");
    if(menuOpen === true){   
        document.querySelector("body").style.overflow = "scroll";
        document.querySelector(".headerbar").classList.add("fa-bars");
        document.querySelector(".headerbar").classList.remove("fa-times")
        menuOpen=false;
    }else{
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector(".headerbar").classList.remove("fa-bars");
        document.querySelector(".headerbar").classList.add("fa-times")
        menuOpen=true;
    }
}

document.querySelectorAll(".item-container").forEach( menuItem => {
    menuItem.addEventListener("click", handleClickMenuItem);
});

function handleClickMenuItem(e) {
    const menuItemText = e.target.innerText;
    console.log(menuItemText)
    if(menuItemText ==="Optionen"){
        alert("Optionen")
    }
    if(menuItemText === "Home"){
        window.location="/index.html";
    }
}

document.querySelector("#submitButton").addEventListener("click", submitName);

function submitName(){

    let currentName = document.querySelector("#inputName").value
    if(currentName === ""){
        alert("enter Name")
        return
    }
    console.log(currentName)

    document.querySelector("#inputName").value ="";
    document.querySelector("#PopUpName").style.visibility ="hidden";

    let correctEntry = highscores.find( entry => entry.category === sessionStorage.getItem("choosenCategory"));

    let entry = {
        name: currentName,
        score: localStorage.getItem("score")
    }

    if(!correctEntry) {
        // Wenns ned existiert dann neu anlegen
        let categoryEntry = {
            category: sessionStorage.getItem("choosenCategory"),
            scores: []
        }
        categoryEntry.scores.push(entry);
        highscores.push(categoryEntry);
    } else {
        //wenns des gibt, dann in scores hinzufügen
        
        correctEntry.scores.push(entry);
    }
    
    //highscores.push(entry);
    
    localStorage.setItem("playerScores", JSON.stringify(highscores));
    loadHighscoreListe();
    // der hat die Daten geladen bevor er die neuen gesetzt bekommen hat
}

document.querySelector("#closingButton").addEventListener("click", closePopup);

function closePopup() {
    document.querySelector("#PopUpName").style.visibility ="hidden";
}

