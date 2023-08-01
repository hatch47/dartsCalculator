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

  function startGame() {
    setScore();
  
    const playersSelect = document.getElementById("players");
    const numPlayers = parseInt(playersSelect.value);
  
    for (let i = 1; i <= 4; i++) {
      const teamTextarea = document.getElementById(`name-textbox${i}`);
      if (i <= numPlayers) {
        teamTextarea.style.display = "block";
      } else {
        teamTextarea.style.display = "none";
      }
    }
  }
  

  function setScore() {
    const selectedGameType = document.getElementById("gameType").value;
    let score = ""; // Default score

    // Set the score based on the selected game type
    switch (selectedGameType) {
        case "301":
            score = 301;
            break;
        case "101":
            score = 101;
            break;
        case "201":
            score = 201;
            break;
        case "301":
            score = 301;
            break;
        case "401":
            score = 401;
            break;
        case "501":
            score = 501;
            break;
        case "601":
            score = 601;
            break;
        case "701":
            score = 701;
            break;
        case "801":
            score = 801;
            break;
        case "901":
            score = 901;
            break;
        case "1001":
            score = 1001;
            break;
        default:
            score = 301;
            break;
    }

    document.getElementById("score").innerText = score;
}




