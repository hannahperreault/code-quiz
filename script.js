//*when first starting the page, they see an intro message
//in the html, create div with intro <"#intro-message">

//*variable to store the current count, set at zero for default
var timerElement = document.querySelector("#timer");
var secondsLeft = 75;
var currentQuestion = 0;

//variable to store the array of the questions
var questions = [
    {
        prompt: "Commonly used data types DO NOT include:",
        answer: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: 2,
    },
    {
        prompt: "The condition in an if / else statement is enclosed within ____",
        answer: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: 2,
    },
    {
        prompt: "Arrays in JavaScript can be used to store:",
        answer: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: 3,
    },
    {
        prompt: "String values must be enclosed within ____ when being assigned to variables",
        answer: ["quotes", "curly brackets", "commas", "parentheses"],
        correctAnswer: 0,
    },
    {

        prompt: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        correctAnswer: 3,
    }

];

$("#question-message, #end-message").hide();

//NEED *variable to store the index of the current question they are answering

$("#btn-start").on("click", function () {
    renderQuestion();
    $("#intro-message").hide();
    var timerInterval = setInterval(function () {
        secondsLeft--;
        $(timerElement).text("Time Left: " + secondsLeft);

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }

    }, 1000);
});

function renderQuestion() {
    $("#question-message").show();

    if (currentQuestion > 4) {
        endQuiz();
        return;
    }

    //  questions[currentQuestion].prompt
    var questionElement = $("<h2>");
    questionElement.text(questions[currentQuestion].prompt);
    $("#question-message").append(questionElement);



    //     questions.forEach(function (questions) {
    //     var questionElement = $("<hr>");
    // questionElement.text(questions.prompt);
    //     $("#question-text").text(questionElement);

    // });
};

function endQuiz() {
    $("#question-message").hide();
    $("#end-message").show();


};


    // questions.forEach(question) {
    //     var questionText = $("<h2>");
    //     var answerBtn = $("<button>");
    //     answerBtn.addClass("answer-button");
    //     answerBtn.attr("data-answer", questions[question]);

    //     $("#question-text").text(questionText);
    //     console.log(questionText);
    // };

//*click button to start
//when user clicks start, hide the intro div
//create setInterval of 75000ms 
//update teh count to 75
//every time the interval runs, we need to decrement the current count by 1, re-render the current count
//

//render the first question
    //the question (string)
    //array of possible answers
    //correct answer (number, index of the answer of the possible answers)
    //using DOM manip, create a new el with the questino info and display it on the screen appendChild.



//once game starts, display with buttons for the answers
///when clicked, determine if correct/in
//use data attributes to tell if button clicked is right (with event listener)
//display next wquestions, and display status of their answer for a short period of time


//end condition--
    //create function for end game by either condition. call the function to display end page if:
//user answers all questions OR
//time runs out


//when game ends, allow user to enter their initials and store their score
//redirect user to high scores page, which dsiplays all high scores
