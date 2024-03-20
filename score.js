// Iteration 5: Store the player score and display it on the game over screen
var scoreBoard = document.getElementById("score-board");
var timeLeft = localStorage.getItem('score');
scoreBoard.textContent = timeLeft;


play_again_button=document.getElementById("play-again-button");
play_again_button.addEventListener("click", function()
{
  window.location.href = "game.html";
});
