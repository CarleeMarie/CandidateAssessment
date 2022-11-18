//Use const to store references to parts of the user interface (HTML elements). 
//example: const guessSubmit = document.querySelector('.guessSubmit');
const quizContainer = document.getElementById('quiz');
const startBtn = document.getElementById('start');
const resultsContainer = document.getElementById('results');
//const guessSubmit = document.getElementById('submit');
const btnArea = document.getElementById('btnArea');
var seconds;


// putting questions and answers into an array so that I can use a loop.
const quizQuestions = [
  {
    question: "Which option below is a semantic element in HTML?", 
    answers: ["<div>", "id", "<body>","#title"],
    correctAnswer: "<body>"
  },
  {
    question: "Why do we need CSS?", 
    answers: ["It helps the page be found by Google.", "It adds styles to the page.", "It adds interaction to the page.", "It is the infrastructure of the page."],
    correctAnswer: "It adds styles to the page."
  },
  {
    question: "How do you comment out code in JavaScript?", 
    answers: ["<!-- -->", "//", "/*  */", "both b & c"],
    correctAnswer: "both b & c"
  },
  {
    question: "What language can you use to add interaction to a webpage?", 
    answers: ["JavaScript", "jQuery", "Vue.js","all of the above"],
    correctAnswer: "all of the above"
  },
  {
    question: "Which part of an application's code do you like best?", 
    answers: ["HTML", "CSS", "JavaScript", "all of the above"],
    correctAnswer: "a b c d"
  }, 
];


function checkAnswers() {

}
//code for 75 second timer
var timer;
function countDownTime () {
  //set seconds variable to 75//
  if(timeInSeconds < 75) {
    document.getElementById("timer").innerHTML = timeInSeconds;
  }
    if (timeInSeconds > 0) {
      timeInSeconds--;
    } else if (timeInSeconds === 0) {
        clearInterval(timer);
        alert("Time is up!");
    }
  }
  startBtn.onclick = function() {
    if(!timer) {
      timer = window.setInterval(function() {
        countDownTime ();
      }, 1000);
    }
  } 
//defining the function to display the questions
function displayQuestion() {
  let questionEl = document.createElement('h2');
  questionEl.textContent = quizQuestions[count].question;
  quizContainer.append(questionEl);

  let choicesArr = quizQuestions[count].answers;
  choicesArr.forEach(choice => {
    let button = document.createElement('button');
    button.textContent = choice;
    btnArea.append(button);
  });

//calling the functions defined above
  function setUpQuiz() {
  displayQuestion();
  countDownTime();
}

// element.innerHTML = "<div id=btnArea></div>";



// If timer reaches 0, run showResults so users can view and save their score
// Timer

// 4.
// End screen where users can input initials as well as see their score
// Use local storage to save scores
// Use strings so you don't have to worry about JSON.stringify or JSON.parse
// Your timer should stop when the user is at the end screen
// define a global variable with no value, reassign it your timer value which gives it global value so you can clear it in your showResults function
function showResults() {}
//when answer button is clicked "count" needs to increase by 1

startBtn.addEventListener('click', setUpQuiz);

// 3.
// Look at module 4, activity 17
// Think about event.target.textContent
// Use a conditional statement to check if the answer is right
// If the answer is incorrect, you will want to subtract time
//  EXAMPLE: timeLeft -= 5
// count++; 
// displayQuestion; will run with the new updated count

// Before you check answer, you want to make sure that if your count is 4, which means all of the questions have been answered, then you want to run showResults

btnArea.addEventListener('click', function(event) {
  console.log(event.target.textContent);
  // USE THIS AREA FOR YOUR CHECKANSWER FUNCTION
} )