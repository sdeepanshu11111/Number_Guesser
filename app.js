 /*
                                                  GAME FUCNTION:
                                                  -Player must guess a number between a min and max
                                                  -Player gets a certain amount of guesses
                                                  -Notify player of guesses remaining
                                                  -Notify player of the correct answer if loose
                                                  -Let player choose to play again
                                                  */

 //GAME VALUES
 let min = 1,
     max = 10,
     winningNum = Math.floor(Math.random() * 10 + 1),
     guessLeft = 3;



 // UI ELEMENTS
 const game = document.querySelector('.game'),
     minNum = document.querySelector('.min-num'),
     maxNum = document.querySelector('.max-num'),
     guessInput = document.querySelector('#guess-input'),
     inputBtn = document.querySelector('#guess-btn'),
     message = document.querySelector('.message'),
     submitBtn = document.querySelector('#guess-btn');

 //Assign UI Min and Max

 minNum.textContent = min;
 maxNum.textContent = max;


 // Game wraper

 game.addEventListener('mousedown', function(e) {
     if (e.target.className === 'play-again') {
         window.location.reload();
     }
 })

 //Listen or get value from input (listen for guess)

 inputBtn.addEventListener('click', function() {
     let guessValue = parseInt(guessInput.value);


     if (isNaN(guessValue) || guessValue < min || guessValue > max) {
         setMessage(`Please enter number between ${min} and ${max}`, 'red');
     } else {
         if (guessValue === winningNum) {

             gameOver(true, `${winningNum} is correct . YOU WON!`)

         } else {
             guessLeft -= 1;
             setMessage(`${guessValue} was incorrect you have ${guessLeft} remaining`, 'red');

             if (guessLeft === 0) {

                 gameOver(false, `You lost winning number was ${winningNum}`)


             } else {
                 guessInput.style.borderColor = 'red';
                 guessInput.value = '';
             }
         }
     }


 });

 //Game Over function
 function gameOver(won, msg) {

     let color;

     won === true ? color = 'green' : color = 'red';

     guessInput.disabled = true;

     guessInput.style.borderColor = color;

     message.style.color = color;

     setMessage(msg)

     // Play again
     inputBtn.value = 'Play again';

     inputBtn.classList += 'play-again';
 };


 function setMessage(msg, color) {
     message.textContent = msg;
     message.style.color = color
 };