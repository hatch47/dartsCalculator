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

let counter = 1;

function updateScore() {
  const numPlayers = parseInt(document.getElementById("players").value);
  const currentPlayer = (counter % numPlayers) || numPlayers; // Calculate the current player based on the counter

  const scoreElement = document.getElementById('score' + currentPlayer);
  const firstTextboxValue = parseInt(document.getElementById('firstTextbox').value);
  const secondTextboxValue = parseInt(document.getElementById('secondTextbox').value);
  const thirdTextboxValue = parseInt(document.getElementById('thirdTextbox').value);

  if (!isNaN(firstTextboxValue) && !isNaN(secondTextboxValue) && !isNaN(thirdTextboxValue)) {
    const combinedValue = firstTextboxValue + secondTextboxValue + thirdTextboxValue;
    const currentScore = parseInt(scoreElement.textContent);
    const newScore = currentScore - combinedValue;
    counter++;
    switchTurn();
    
    if (newScore > 0) {
      scoreElement.textContent = newScore;
      document.getElementById('firstTextbox').value = '';
      document.getElementById('secondTextbox').value = '';
      document.getElementById('thirdTextbox').value = '';
      document.getElementById('combinedTextbox').value = '';
    } else if (newScore < 0) {
      alert("You Busted!");
      document.getElementById('firstTextbox').value = '';
      document.getElementById('secondTextbox').value = '';
      document.getElementById('thirdTextbox').value = '';
      document.getElementById('combinedTextbox').value = '';
    } else if (newScore === 0) {
      alert('Winner! Game Over.');
      window.location.reload();
    }
    
    // counter++;
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
    switchTurn();
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

    // Reset all scores to empty
    document.getElementById("score1").innerText = "";
    document.getElementById("score2").innerText = "";
    document.getElementById("score3").innerText = "";
    document.getElementById("score4").innerText = "";

    // Set scores based on the number of players
    const numPlayers = parseInt(document.getElementById("players").value);
    if (numPlayers >= 1) {
      document.getElementById("score1").innerText = score;
    }
    if (numPlayers >= 2) {
      document.getElementById("score2").innerText = score;
    }
    if (numPlayers >= 3) {
      document.getElementById("score3").innerText = score;
    }
    if (numPlayers >= 4) {
      document.getElementById("score4").innerText = score;
    }
  }

  function limitCharacters(textarea, limit) {
    if (textarea.value.length > limit) {
        textarea.value = textarea.value.substring(0, limit);
    }
}

function switchTurn() {
  const numPlayers = parseInt(document.getElementById("players").value);
  const currentPlayer = (counter % numPlayers) || numPlayers;

  // Reset all turns to empty
  document.getElementById("turn1").innerText = "";
  document.getElementById("turn2").innerText = "";
  document.getElementById("turn3").innerText = "";
  document.getElementById("turn4").innerText = "";

  // Set the "^" symbol on the current player's turn
  switch (currentPlayer) {
    case 1:
      document.getElementById("turn1").innerText = "\u25BC";
      break;
    case 2:
      document.getElementById("turn2").innerText = "\u25BC";
      break;
    case 3:
      document.getElementById("turn3").innerText = "\u25BC";
      break;
    case 4:
      document.getElementById("turn4").innerText = "\u25BC";
      break;
    default:
      break;
  }
}




