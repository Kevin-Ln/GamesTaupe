let myHeading = document.getElementById('85');
    let myParagraph = document.getElementById('86');
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guesses = document.querySelector('.guesses');
    let lastResult = document.querySelector('.lastResult');
    let lowOrHi = document.querySelector('.lowOrHi');
    let guessSubmit = document.querySelector('.guessSubmit');
    let guessField = document.querySelector('.guessField');
    let guessCount = 1;
    let resetButton;
    var vpseudo = localStorage.getItem('pseudo');
            myHeading.innerHTML = 'Bienvenue ' + vpseudo + ' !'
            myParagraph.innerHTML = "J'ai séléctionné un nombre entre 1 et 100,  rien que pour toi " + vpseudo + ".";
    function checkGuess() {
      let userGuess = Number(guessField.value);
      if (guessCount === 1) {
        guesses.textContent = 'Choix précédents : ';
      }

      guesses.textContent += userGuess + ' ';

      if (userGuess === randomNumber) {
        lastResult.textContent = 'Bravo, ' + vpseudo + ' tu es libre !';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        flooter.style.display = 'block';
        setGameOver();
      } else if (guessCount === 10) {
        lastResult.textContent = 'Perdu ' + vpseudo + " désormais tu m'appartiens";
        lowOrHi.textContent = '';        
        setGameOver();
      } else {
        lastResult.textContent = 'Raté ' + vpseudo + ' essais encore !';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
          lowOrHi.textContent='Trop petit essais encore !' ;
        } else if(userGuess > randomNumber) {
          lowOrHi.textContent = 'Trop grand essais encore !';
        }
      }

      guessCount++;
      guessField.value = '';
      guessField.focus();
    }

    guessSubmit.addEventListener('click', checkGuess);

    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      const game = document.getElementById('game');
      resetButton = document.createElement('button');
      resetButton.classList.add("reset");
      game.appendChild(resetButton);
      resetButton.textContent = 'Rejouer';
      resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
      guessCount = 1;
      let resetParas = document.querySelectorAll('.resultParas p');
      for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent='';
      }

      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value='';
      guessField.focus();
      lastResult.style.backgroundColor='black';
      randomNumber=Math.floor(Math.random() * 100) + 1;
    }