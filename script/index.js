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