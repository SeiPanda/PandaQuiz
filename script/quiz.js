import questions  from "./demoFragen.js"

document.querySelector("#logo").addEventListener("click", handleClickLogo);

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
let randomQuestions = questions.sort(() => Math.random() - .5).slice(0, 10);

showQuestion();

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
   
    const answerText = e.target.innerText;
    const correctAnswer = randomQuestions[currentQuestion].answers.find(answer => answer.correct == true);
   
    if(answerText === correctAnswer.text){
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
    document.querySelectorAll(".answer").forEach( answer => answer.classList.remove("correct", "false"))
    let question = randomQuestions[currentQuestion];
    document.querySelector("#question-text").innerText=question.question;
    let randomAnswers = question.answers.sort(() => Math.random() - .5);
    document.querySelector("#answer-1").innerText=randomAnswers[0].text;
    document.querySelector("#answer-2").innerText=randomAnswers[1].text;
    document.querySelector("#answer-3").innerText=randomAnswers[2].text;
    document.querySelector("#answer-4").innerText=randomAnswers[3].text;
} 


