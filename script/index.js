document.querySelector("#start").addEventListener("click", handleClickStart);

function handleClickStart() {
    window.location="/quiz.html";
}

document.querySelector("#logo").addEventListener("click", handleClickLogo);

function handleClickLogo() {
    window.location="/index.html";
}

document.querySelector("#highscore").addEventListener("click", handleClickHighscore);

function handleClickHighscore() {
    window.location="/highscore.html";
}

document.querySelector("#multi").addEventListener("click", handleClickMulti);

function handleClickMulti() {
    window.location="/multi.html";
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
    if(menuItemText === "Highscore"){
        window.location="/highscore.html";
    }else{
        alert("Optionen")
    }
}