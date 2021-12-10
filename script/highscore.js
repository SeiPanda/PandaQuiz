loadPoints();

let highscores = [];
let lsScores = localStorage.getItem("playerScores");
if(lsScores) {
    highscores = JSON.parse(lsScores);
} 

console.log();

let referrerFile = document.referrer.split("/")[document.referrer.split("/").length-1];
if(referrerFile === "quiz.html") {
    document.querySelector("#PopUpName").style.display = "flex";
}



function loadPoints () {
    let currentPoints = localStorage.getItem("score");
    document.querySelector("#currentPoints").innerText = currentPoints;
}

loadHighscoreListe();

function loadHighscoreListe(){
    document.querySelector("#table-container").innerHTML = "";
    highscores.sort((a,b) => { return b.score - a.score; });
    highscores.forEach( (player, index) => {
        document.querySelector("#table-container").innerHTML += "<div class='score-outer'><div class='countBox'><span class='count'>"  + (index+1) + "</span></div><span class='name'>" + player.name + "</span><span class='score'>" + player.score + "</span></div>";
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
  
        document.querySelector(".headerbar").classList.add("fa-bars");
        document.querySelector(".headerbar").classList.remove("fa-times")
        menuOpen=false;
    }else{
        
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
    localStorage.setItem("playerName", currentName)

    document.querySelector("#inputName").value ="";
    document.querySelector("#PopUpName").style.visibility ="hidden";

    let entry = {
        name: currentName,
        score: localStorage.getItem("score")
    }
    
    highscores.push(entry);
    loadHighscoreListe();
    localStorage.setItem("playerScores", JSON.stringify(highscores));
}

document.querySelector("#closingButton").addEventListener("click", closePopup);

function closePopup() {
    document.querySelector("#PopUpName").style.visibility ="hidden";
}