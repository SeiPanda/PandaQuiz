document.querySelector("#start").addEventListener("click", handleClickStart);

function handleClickStart() {
    window.location="/category.html";
}

document.querySelector(".headerlogo").addEventListener("click", handleClickLogo);

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
  
        document.querySelector(".headerbar").classList.add("fa-cog");
        document.querySelector(".headerbar").classList.remove("fa-times")
        menuOpen=false;
    }else{
        document.querySelector(".headerbar").classList.remove("fa-cog");
        document.querySelector(".headerbar").classList.add("fa-times");
        menuOpen=true;
    }
}

function openPopup() {
    document.querySelector("#optionen_popup").style.display ="flex";
}

document.querySelectorAll(".item-container").forEach( menuItem => {
    menuItem.addEventListener("click", handleClickMenuItem);
});

function handleClickMenuItem(e) {
    const menuItemText = e.target.innerText;
    console.log(menuItemText)
    if(menuItemText === "Optionen"){
        openPopup();
    }
}

document.querySelector("#option_closingButton").addEventListener("click", closePopup);

function closePopup() {
    document.querySelector("#optionen_popup").style.display ="none";
}

/*var slider = document.getElementById("myRange");

var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}*/