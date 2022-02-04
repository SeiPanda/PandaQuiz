loadPoints();
loadHighscoreListe();

let open = false
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
    
    document.querySelector("#table-container-outer").innerHTML = "";

    let storageScores = localStorage.getItem("playerScores")
    let playerScores = [];
    if(storageScores) {
        playerScores = JSON.parse(storageScores);
    }

    //load all highscores
    let allHighscores = [];
    let div = '<div class="eachCategoryTable"><div class="heading-container"><i class="fas fa-caret-down"></i><span class="heading">Highscore</span><span>&nbsp;&nbsp;&nbsp;</span><span class="heading2">RANKING</span></div><div class="highscoreTable-container"><div class="table-container">';
    playerScores.forEach( category => {
        category.scores.forEach(( player, index) => {
            if(index < 5){
                allHighscores.push(player);
            }
        });
    });
    allHighscores.sort( (a, b) => Number(b.score) - Number(a.score) );
    allHighscores.forEach( (player, index) => {
        div += "<div class='score-outer'><div class='countBox'><span class='count'>"  + (index+1) + "</span></div><span class='name'>" + player.name + "</span><span class='score'>" + player.score + "</span></div>";
    });

    div += "</div></div></div>";
    document.querySelector("#table-container-outer").innerHTML += div;
    div = "";


    playerScores.forEach( category => {
        let div = '<div class="eachCategoryTable"><div class="heading-container"><i class="fas fa-caret-down"></i><span class="heading">' + category.category + '</span><span>&nbsp;&nbsp;&nbsp;</span><span class="heading2">RANKING</span></div><div class="highscoreTable-container"><div class="table-container">';
        //hier dann die scores
        category.scores.sort( (a, b) => Number(b.score) - Number(a.score) );
        category.scores.forEach( (player, index) => {
            console.log(player);
            div += "<div class='score-outer'><div class='countBox'><span class='count'>"  + (index+1) + "</span></div><span class='name'>" + player.name + "</span><span class='score'>" + player.score + "</span></div>";
        });
        div += "</div></div></div>";
        document.querySelector("#table-container-outer").innerHTML += div;
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
    if(menuOpen === true) {   
        document.querySelector("body").style.overflow = "scroll";
        document.querySelector(".headerbar").classList.add("fa-bars");
        document.querySelector(".headerbar").classList.remove("fa-times")
        menuOpen=false;
    }else {
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector(".headerbar").classList.remove("fa-bars");
        document.querySelector(".headerbar").classList.add("fa-times")
        menuOpen=true;
    }
}

function openOptPopup() {
    document.querySelector("#optionen_popup").style.display ="flex";
}

document.querySelectorAll(".item-container").forEach( menuItem => {
    menuItem.addEventListener("click", handleClickMenuItem);
});

function handleClickMenuItem(e) {
    const menuItemText = e.target.innerText;

    if(menuItemText ==="Optionen") {
        openOptPopup();
    }
    if(menuItemText === "Home") {
        window.location="/index.html";
    }
}

document.querySelector("#option_closingButton").addEventListener("click", closeOptPopup);

function closeOptPopup() {
    document.querySelector("#optionen_popup").style.display ="none";
}

/*var slider = document.getElementById("myRange");

var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}*/

document.querySelector("#submitButton").addEventListener("click", submitName);

function submitName() {

    let currentName = document.querySelector("#inputName").value
    if(currentName === "") {
        alert("enter Name")
        return
    }

    document.querySelector("#inputName").value ="";
    document.querySelector("#PopUpName").style.display ="none";

    let correctEntry = highscores.find( entry => entry.category === sessionStorage.getItem("choosenCategory"));

    let entry = {
        name: currentName,
        score: localStorage.getItem("score")
    }

    if(!correctEntry) {
        // dosent exist, new
        let categoryEntry = {
            category: sessionStorage.getItem("choosenCategory"),
            scores: []
        }
        categoryEntry.scores.push(entry);
        highscores.push(categoryEntry);
    } else {
        // exist, add to score
        correctEntry.scores.push(entry);
    }
    localStorage.setItem("playerScores", JSON.stringify(highscores));
    loadHighscoreListe();
}

document.querySelector("#closingButton").addEventListener("click", closePopup);

function closePopup() {
    document.querySelector("#PopUpName").style.display ="none";
}

document.querySelectorAll(".eachCategoryTable").forEach( cateTable => {
    cateTable.addEventListener("click", handleClickTable);
});

function handleClickTable( event ) {
    let target = event.target;

    if(target.nodeName === "SPAN" && !target.classList.contains("heading") && !target.classList.contains("heading2") ) {
        target = target.parentNode.parentNode;
    }

    if(target.classList.contains("heading") || target.classList.contains("heading2") ) {
        target = target.parentNode.parentNode.children[1].children[0];
    }

    if(target.classList.contains("fa-caret-down") ) {
        target = target.parentNode.parentNode.children[1].children[0];
        console.log(target)
    }

    if(target.classList.contains("score-outer")){
        target = target.parentNode;
    }

    if(target.classList.contains("countBox")){
        target = target.parentNode.parentNode;
    }

    if(target.classList.contains("table-container")){
        target = target;
    }

    if(target.classList.contains("eachCategoryTable") || target.classList.contains("heading-container")){
        return;
    }

    target.childNodes.forEach( child => child.classList.toggle("currentClosed"));
    target.parentNode.parentNode.childNodes[0].childNodes[0].classList.toggle("closed")

}

