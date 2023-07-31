function fillTextbox(value) {
    const firstTextbox = document.getElementById('firstTextbox');
    const secondTextbox = document.getElementById('secondTextbox');
    const thirdTextbox = document.getElementById('thirdTextbox');

    if (!firstTextbox.value) {
        firstTextbox.value = value;
    } else if (!secondTextbox.value) {
        secondTextbox.value = value;
    } else if (!thirdTextbox.value) {
        thirdTextbox.value = value;
    }

    updateCombinedTextbox();
}


function updateCombinedTextbox() {
    const firstValue = parseInt(document.getElementById('firstTextbox').value) || 0;
    const secondValue = parseInt(document.getElementById('secondTextbox').value) || 0;
    const thirdValue = parseInt(document.getElementById('thirdTextbox').value) || 0;
    const combinedTextbox = document.getElementById('combinedTextbox');

    combinedTextbox.value = firstValue + secondValue + thirdValue;
}

  function updateScore() {
    const scoreElement = document.getElementById('score');
    const firstTextboxValue = parseInt(document.getElementById('firstTextbox').value);
    const secondTextboxValue = parseInt(document.getElementById('secondTextbox').value);
    const thirdTextboxValue = parseInt(document.getElementById('thirdTextbox').value);

    if (!isNaN(firstTextboxValue) && !isNaN(secondTextboxValue) && !isNaN(thirdTextboxValue)) {
      const combinedValue = firstTextboxValue + secondTextboxValue + thirdTextboxValue;
      const currentScore = parseInt(scoreElement.textContent);
      const newScore = currentScore - combinedValue;
      
      if (newScore > 0) {
        scoreElement.textContent = newScore;
        document.getElementById('firstTextbox').value = '';
        document.getElementById('secondTextbox').value = '';
        document.getElementById('thirdTextbox').value = '';
        document.getElementById('combinedTextbox').value = '';
      } else if (newScore < 0) {
        alert("You busted, mark all 3 darts as 'Miss' for busts");
        document.getElementById('firstTextbox').value = '';
        document.getElementById('secondTextbox').value = '';
        document.getElementById('thirdTextbox').value = '';
        document.getElementById('combinedTextbox').value = '';
      } else if (newScore == 0) {
        alert('You Win! Game Over');
        // document.getElementById('firstTextbox').value = '';
        // document.getElementById('secondTextbox').value = '';
        // document.getElementById('thirdTextbox').value = '';
        // document.getElementById('combinedTextbox').value = '';
        window.location.reload();
    }
    } else {
      alert('Please enter a score for each of the 3 darts');
      document.getElementById('firstTextbox').value = '';
        document.getElementById('secondTextbox').value = '';
        document.getElementById('thirdTextbox').value = '';
        document.getElementById('combinedTextbox').value = '';
    } 
  }

