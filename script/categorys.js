let categories = [];

document.querySelector(".headerlogo").addEventListener("click", handleClickLogo);

function handleClickLogo() {
    window.location="/index.html";
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
    }if(menuItemText === "Highscore"){
        window.location="/highscore.html";
    }
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

document.querySelectorAll(".menu-button").forEach(item => {
    item.addEventListener("click", handleClickMenuItem);
});

function handleClickMenuItem(e){
    let category = e.target.innerText;
    sessionStorage.setItem("choosenCategory", category);
    localStorage.setItem("score", Number(0));
    window.location="/quiz.html";
}



/*document.querySelectorAll(".menu-button").forEach(button => {
    categories.push(button.innerText);
    localStorage.setItem("categories", categories);
});*/ 