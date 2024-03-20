// Iteration 2: Generate 2 random number and display it on the screen
document.addEventListener('DOMContentLoaded', function() {

  var num1 = document.getElementById("number1");
  var num2 = document.getElementById("number2");
  var buttons = document.getElementById("buttons").getElementsByTagName("img");
  var timerDisplay = document.getElementById('timer');
  var score=0;
  
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generateRandomNumbers() {
    var randomNum1 = randomNumber(1, 100);
    var randomNum2 = randomNumber(1, 100);
    num1.textContent = randomNum1;
    num2.textContent = randomNum2;
  }

  generateRandomNumbers();

// Iteration 3: Make the options button functional
  function SymbolButtonClick() {
    var relation = this.getAttribute('id');
    var number1 = parseInt(num1.textContent);
    var number2 = parseInt(num2.textContent);

    if ((relation === 'greater-than' && number1 > number2) ||
        (relation === 'equal-to' && number1 === number2) ||
        (relation === 'lesser-than' && number1 < number2)) {
      timeLeft++;
      score++;
      updateTimer();
    }
    console.log(score);
    generateRandomNumbers();
  }


  for (let button of buttons) {
    button.addEventListener('click', SymbolButtonClick);
  }


// Iteration 4: Build a timer for the game
  var timeLeft = 5; 

  function updateTimer() {
    timerDisplay.textContent = timeLeft;
  }

  function handleTimeout() {
    localStorage.setItem('score', score);
  
    window.location.href = "gameOver.html";
  }

  updateTimer();
  var timerInterval = setInterval(function() {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(timerInterval); 
      handleTimeout();
    }
  }, 1000);
});
