var sessionCategory = sessionStorage.getItem("choosenCategory");
if(sessionCategory == null) {
    window.location = "/";
}

var questionTime = 10;

var questionBlock = [];
var timerInterval;

import("./demoFragen.js").then(fileData => {

    if(sessionCategory === "Anime"){
        console.log("anime");
        questionBlock = fileData.questions;
    }
    if(sessionCategory === "Marvel"){
        console.log("marvel");
        questionBlock = fileData.marvelQuestions;
    }
    console.log(fileData.questions);
    console.log(questionBlock);
    runOnStart();
});

let maxAnzahlQuestions = 10;

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

let currentQuestion = 0;
let randomQuestions;

function runOnStart() {
    randomQuestions = questionBlock.sort(() => Math.random() - .5).slice(0, maxAnzahlQuestions);
    showQuestion();
}


document.querySelectorAll(".answer").forEach( answerDiv => {
    answerDiv.addEventListener("click", handleClickAnswer);
});

document.querySelector(".mask").addEventListener("click", loadQuestionImage);

function loadQuestionImage(){
    document.querySelector(".mask").classList.add("hidden");
    currentQuestion++;
    showQuestion();
}

function handleClickAnswer(e){

    clearInterval( timerInterval );
   
    const answerText = e.target.innerText;
    const correctAnswer = randomQuestions[currentQuestion].answers.find(answer => answer.correct == true);
   
    if(answerText === correctAnswer.text){
        localStorage.setItem("score", Number(localStorage.getItem("score"))+5);
        e.target.classList.add("correct");
    }else{
        e.target.classList.add("false");
        showCorrectAnswer();
    }
    document.querySelector(".mask").classList.remove("hidden")
}

function showCorrectAnswer(){
    const correctAnswer = randomQuestions[currentQuestion].answers.find(answer => answer.correct == true);
    document.querySelectorAll(".answer").forEach( answerDiv => {
        if(answerDiv.innerText === correctAnswer.text){
            answerDiv.classList.add("correct");
        }
    })
}

function showQuestion() {
    if(maxAnzahlQuestions === currentQuestion) 
        window.location = "/highscore.html";

    document.querySelectorAll(".answer").forEach( answer => answer.classList.remove("correct", "false"))
    let question = randomQuestions[currentQuestion];
    document.querySelector("#question-text").innerText=question.question;
    let randomAnswers = question.answers.sort(() => Math.random() - .5);
    document.querySelector("#answer-1").innerText=randomAnswers[0].text;
    document.querySelector("#answer-2").innerText=randomAnswers[1].text;
    document.querySelector("#answer-3").innerText=randomAnswers[2].text;
    document.querySelector("#answer-4").innerText=randomAnswers[3].text;
    runTimer();
} 

document.querySelectorAll(".item-container").forEach( menuItem => {
    menuItem.addEventListener("click", handleClickMenuItem);
});

function handleClickMenuItem(e) {
    const menuItemText = e.target.innerText;
    console.log(menuItemText)
    if(menuItemText === "Highscore"){
        window.location="/highscore.html";
    }
    if(menuItemText === "Home"){
        window.location="/index.html";
    }
    if(menuItemText === "Optionen"){
        alert("Optionen")
    }
}

function runTimer() {
  
    let timeLeft = questionTime * 100;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.querySelector("#progressBar").style.width = (100 - (timeLeft / questionTime)) + "%";
        if(timeLeft === 0){
            clearInterval( timerInterval );
            showCorrectAnswer();
            document.querySelector(".mask").classList.remove("hidden")
        }
    }, 10);
}