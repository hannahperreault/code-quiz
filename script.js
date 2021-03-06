var timerElement = document.querySelector("#timer");
var secondsLeft = 75;
var currentQuestion = 0;
var currentAnswer = 0;
var totalScore = 0;
var scores;

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

function onlyIntro() {
    $("#question-message, #end-message").hide();
};
function hideNonQuestions() {
    $("#intro-message, #end-message").hide();
};

onlyIntro();

$("#btn-start").on("click", function () {
    renderQuestion();
    var timerInterval = setInterval(function () {
        secondsLeft--;
        $(timerElement).text("Time Left: " + secondsLeft);

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);

});

function answerClicked() {
};

function renderQuestion() {
    hideNonQuestions();
    $("#question-message").show();
    showQuestion();
};

function showQuestion() {
    console.log(currentQuestion);

    var questionElement = $("<h2>");
    questionElement.text(questions[currentQuestion].prompt);
    $("#question-message").append(questionElement);

    for (var i = 0; i < 4; i++) {
        var answerElement = $("<button>", {
            "data-attribute": i,
            "class": "clicked-button",
        });
        answerElement.text(questions[currentQuestion].answer[i]);
        $("#question-message").append(answerElement);
    }
    $(".clicked-button").on("click", checkCorrect)

    $(".clicked-button").on("click", nextQuestion)

    function checkCorrect() {
        if ($(this).data("attribute") === questions[currentQuestion].correctAnswer) {
            console.log("correct");
            answerCorrect();
        } else {
            answerWrong();
        }
    }
    function nextQuestion() {
        currentQuestion++;
        $("#question-message").empty();
        if (currentQuestion > 4) {
            endQuiz();
            return;
        }
        showQuestion();

    };
};

function answerCorrect() {
    $("#feedback").text("Correct!");
    $("#feedback").show();
    setTimeout(function () {
        $("#feedback").fadeOut();
    }, 650);
    totalScore = Math.floor(totalScore + 10);

};

function answerWrong() {
    $("#feedback").text("Wrong!");
    $("#feedback").show();
    setTimeout(function () {
        $("#feedback").fadeOut();
    }, 650);
    secondsLeft = Math.floor(secondsLeft - 15);
    if (secondsLeft <= 0) {
        secondsLeft = 1
    }

};

function endQuiz() {
    $("#question-message").hide();
    $("#end-message").show();
    $("#final-score").text("Your final score is: " + totalScore);
    $("#submit").on("click", function () {
        event.preventDefault();
        saveScore();
        window.location = "highscores.html";

    })
};


function saveScore() {
    var scoreObject = [
        {
            name: document.querySelector("#name").value,
            score: totalScore,
        }
    ]
    console.log(scoreObject);

    var scoresJSON = JSON.stringify(scoreObject);
    localStorage.setItem("scores", scoresJSON);
    scores = JSON.parse(localStorage.getItem("scores"));
    console.log(scores);

    // scores are saving in local storage properly. cannot figure out how to get the scores to display on the high scores page... below is the as far as i got :(


    // scoreObject.forEach(function () {
    //     var tableRowElement = $('<tr>');
    //     var name = $('<td>').text(score.name);
    //     var score = $('<td>').text(score.score);
    //     tableRowElement.append(name);
    //     tableRowElement.append(score);
    //     $("#score-container").append(tableRowElement);

    // });

};


