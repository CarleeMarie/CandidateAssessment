/*GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */

//Steps:
// 1. Establish 5 questions with multiple choice options.
// 2. Add an eventlistener to the start button.
// 3. Add a timer starts that starts when the start button is clicked (timer interval).
// 4. A question pops up (confirm or prompt?).
//  - The question has multiple choice answers that need to be clickable - only one is correct (array?).
// 3. After an answer is selected, check whether it is correct. (for loop)
//  - If it is correct:
//      - display message that confirms they answered it correctly
//  - It is incorrect:
//      - display message that lets them know they answered incorrectly
//      - subtract time from the clock (subtract from time interval).
// 4. Store the result and add on to a string to be revealed at the
//    end.
// 5. The next question appears right after the notification of right or wrong.
//  - Repeat steps 2 & 3.
// 6. When time reaches 0:
//  - display "time's up" message 
// 7. OR when all of the questions are answered, the game ends.
// 8. The user's score is shown (JSON.render?).
// 9. The user is able to save their initials and score (JSON.stringify?).







//Start Button for Quiz (bot of these are from W3 school)
element.addEventListener("click", myFunction);

function myFunction() {
    //put question and multiple choice information here
  document.getElementById("demo").innerHTML = "Hello World";
  // at the same time need to start the timer...??
}

// what is the difference between this code and the one above it?
const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}



//For timer
var myfunc = setInterval(function() {
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    document.getElementById("secs").innerHTML = seconds + "s"
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
}, 1000);
//https://www.educative.io/answers/how-to-create-a-countdown-timer-using-javascript


// need variable to store the score - scoreCard

//use at end to get player initials and display them:
const para = document.querySelector('p'); //this is where you pull the HTML element that you want to be clicked on to run the code below

para.addEventListener('click', updateName); //event listener. in parenthesis is the event "click" and the function that will run when the item is clicked

function updateName() {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
}
