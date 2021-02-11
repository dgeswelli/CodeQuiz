// developed global variables for the timer to be able to function properly, a score storing global variable, and global variables for each button listed in the html //

var score = 0;
var question = document.querySelector("#question");
var answer = document.querySelector("# ");
var choiceOne = document.querySelector("#choiceOne");
var choiceTwo = document.querySelector("#choiceTwo");
var choiceThree = document.querySelector("#choiceThree");
var choiceFour = document.querySelector("#choiceFour");
var choiceFive = document.querySelector("#choiceFive");
var begin = document.querySelector("#begin");
var submit = document.querySelector("#submit")
var timeLimit = 70;
var time = document.querySelector("#time");

// developed function for the quiz timer, set to log the response "Time Limit Reached" when timer hits 0 //

function quizTimer() {
    setInterval(function countdown() {
        timeLimit --
        time.textContent = timeLimit
        if (timeLimit <= 0) {
            console.log("Time Limit Reached");
            clearInterval(timer);
            return;
        }
    },
    1000);
}