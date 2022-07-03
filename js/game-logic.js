// Player moves;

let playerOneMoveOneType,
  playerOneMoveTwoType,
  playerOneMoveThreeType,
  playerOneMoveOneValue,
  playerOneMoveTwoValue,
  playerOneMoveThreeValue,
  playerTwoMoveOneType,
  playerTwoMoveTwoType,
  playerTwoMoveThreeType,
  playerTwoMoveOneValue,
  playerTwoMoveTwoValue,
  playerTwoMoveThreeValue,
  playerOneWins,
  playerTwoWins;

const setPlayerMoves = (
  player,
  moveOneType,
  moveOneValue,
  moveTwoType,
  moveTwoValue,
  moveThreeType,
  moveThreeValue
) => {

    // Check invalid assigns
  if (
    !moveOneType ||
    !moveOneValue ||
    !moveTwoType ||
    moveTwoValue ||
    !moveThreeType ||
    !moveThreeValue
  ) 
  {
    return;
  }

    /// Check invalid types
    if (
      !isValidMoveType(moveOneType) ||
      !isValidMoveType(moveTwoType) ||
      !isValidMoveType(moveThreeType)
    ) 
    {
      return;
    }

  // Check invalid values
  if (
    !isValidMoveValue(moveOneValue) ||
    !isValidMoveValue(moveTwoValue) ||
    !isValidMoveValue(moveThreeValue)
  ) {
    return;
  }

    // Check if it's greater then 99, then return
  if((moveOneValue + moveTwoValue + moveThreeValue > 99)) {
    return;
  }

  // Initialize values
  if (player === "Player One") {
    playerOneMoveOneType = moveOneType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveThreeValue = moveThreeValue;
  } else if (player === "Player Two") {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveThreeValue = moveThreeValue;
  }
};


// Valid type function
const isValidMoveType = (moveType) => {
  return moveType === "rock" || moveType === "paper" || moveType === "scissors";
};

// Valid value function
const isValidMoveValue = (moveValue) => {
  return moveValue <= 1 && moveValue >= 99;
};


const getRoundWinner = (roundNumber) => {
  switch (roundNumber) {
    case 1:
      return getMoveWinner(
        playerOneMoveOneType,
        playerOneMoveOneValue,
        playerTwoMoveOneType,
        playerTwoMoveOneValue
      );
    case 2:
      return getMoveWinner(
        playerOneMoveTwoType,
        playerOneMoveTwoValue,
        playerTwoMoveTwoType,
        playerTwoMoveTwoValue
      );
    case 3:
      return getMoveWinner(
        playerOneMoveThreeType,
        playerOneMoveThreeValue,
        playerTwoMoveThreeType,
        playerTwoMoveThreeValue
      );
    default:
      return null;
  }
};

// Get the winner based on types and values for
const getMoveWinner = (
  playerOneMoveOneType,
  playerOneMoveOneValue,
  playerTwoMoveOneType,
  playerTwoMoveOneValue
) => {

  // Check for null invalid types and values
  if (
    !playerOneMoveOneType ||
    !playerOneMoveOneValue ||
    !playerTwoMoveOneType ||
    !playerTwoMoveOneValue
  ) {
    return null;
  }

  // Check for value if are equal
  if (playerOneMoveOneType === playerTwoMoveOneType) {
    if (playerOneMoveOneValue > playerTwoMoveOneValue) {
      return "Player One";
    } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
      return "Player Two";
    } else {
      return "Tie";
    }
  }

  // Check for winner if are not equal
  if (playerOneMoveOneType === "rock") {
    if (playerTwoMoveOneType === "scissors") {
      return "Player One";
    } else {
      return "Player Two";
    }
  } else if (playerOneMoveOneType === "paper") {
    if (playerTwoMoveOneType === "rock") {
      return "Player One";
    } else {
      return "Player Two";
    }
  } else {
    if (playerTwoMoveOneType === "paper") {
      return "Player One";
    } else {
      return "Player Two";
    }
  }
};


const getGameWinner = () => {

    // Check the invalid assigns
  if (
    !playerOneMoveOneType ||
    !playerOneMoveTwoType ||
    !playerOneMoveThreeType ||
    !playerOneMoveOneValue ||
    !playerOneMoveTwoValue ||
    !playerOneMoveThreeValue ||
    !playerTwoMoveOneType ||
    !playerTwoMoveTwoType ||
    !playerTwoMoveThreeType ||
    !playerTwoMoveOneValue ||
    !playerTwoMoveTwoValue ||
    !playerTwoMoveThreeValue
  ) {
    return null;
  }

  // Assing variables
  playerOneWins = 0;
  playerTwoWins = 0;

  // Store winner in const
  const roundOneWinner = getRoundWinner(1);
  const roundTwoWinner = getRoundWinner(2);
  const roundThreeWinner = getRoundWinner(3);

  // Get winner
  addWin(roundOneWinner);
  addWin(roundTwoWinner);
  addWin(roundThreeWinner);

  // Return the winner
  if (playerOneWins > playerTwoWins) {
    return "Player One";
  } else if (playerOneWins < playerTwoWins) {
    return "Player Two";
  } else {
    return "Tie";
  }
};

    // Add the Winner function
const addWin = (winner) => {
  if (winner === "Player One") {
    playerOneWins += 1;
  } else if (winner === "Player Two") {
    playerTwoWins += 1;
  }
};
