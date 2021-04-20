// developed global variables for the timer to be able to function properly, a score storing global variable, and global variables for each button listed in the html //

var score = 0;
var questionId = document.querySelector("#question");
var answer = document.querySelector("#answer");
var choiceOne = document.querySelector("#choiceOne");
var choiceTwo = document.querySelector("#choiceTwo");
var choiceThree = document.querySelector("#choiceThree");
var choiceFour = document.querySelector("#choiceFour");
var choiceFive = document.querySelector("#choiceFive");
var begin = document.querySelector("#begin");
var submit = document.querySelector("#submit")
var timeLimit = 70;
var qIndex = 0
var time = document.querySelector("#time");

// developed function for the quiz timer, set to log the response "Time Limit Reached" when timer hits 0 //

function quizTimer() {
    var timerInterval = setInterval(function countdown() {
        timeLimit --;
        time.textContent = timeLimit;
        if (timeLimit === 0) {
            clearInterval(timerInterval);
            alert("Time Limit Reached");
            return;
        }
    },
    1000);
};

function nextQuestion() {
    if (qIndex ===(quiz.question.length - 1)) {
        questionId.innerHTML = quiz.question[0].prompt;
        choiceOne.innerHTML = quiz.question[0].text[0]
        choiceTwo.innerHTML = quiz.question[0].text[1]
        choiceThree.innerHTML = quiz.question[0].text[2]
        choiceFour.innerHTML = quiz.question[0].text[3]
        choiceFive.innerHTML = quiz.question[0].text[4]
    }
}

begin.addEventListener("click", nextQuestion);

var quiz =  {

    question: [
        {prompt: "In the original release of Star Wars: A New Hope who shot first?",
        text: ["Greedo", "Luke Skywalker", "Han Solo", "Obi-Wan", "Chewbacca"],
        correctanswer: 2},

        {prompt: "In what year did the Star Wars: A New Hope premiere?",
        text: ["1977", "1974", "1990", "1984", "1980"],
        correctanswer: 0},

        {prompt: "Who is the co-pilot of the Millenium Falcon?",
        text: ["R2-D2", "C-3PO", "Darth Vader", "Chewbacca", "Jar Jar Binks"],
        correctanswer: 3},

        {prompt: "Other than Obi-Wan Kenobi, who trained Luke Skywalker in the ways of the force?",
        text: ["Darth Vader", "Qui Gon Jin", "Ki Adi Mundi", "Mace Windu", "Yoda"],
        correctanswer: 4},

        {prompt: "Who is the father of Princess Leia?",
        text: ["Luke Skywalker", "Han Solo", "Darth Vader", "Yoda", "Obi Wan"],
        correctanswer: 2},

        {question: "Who ruled the galaxy before the Galactic Empire?",
        text: ["The Gungans", "The Jawas", "The Trade Federation", "The Republic", "The Jedi Council"],
        correctanswer: 3},
    ],

}
// console.log(quiz.quizQuestions.text)









begin.addEventListener("click", quizTimer);