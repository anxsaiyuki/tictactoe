  var prompt = require('prompt');
 
  // 
  // Start the prompt 
  // 
  prompt.start();
  
  var gameInProgress = true;
  var blocks = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  var playerArr = ['X','O'];
  var board = `
     -------
     |1|2|3|
     -------
     |4|5|6|
     -------
     |7|8|9|
     -------`;
  // 
  // Get two properties from the user: username and email 
  //
  console.log(board)
  var getUserMove = function(player) {
    console.log("Player " + playerArr[player])
    prompt.get(['Move'], function (err, result) {
      drawboard(result.Move, player);

    });
  }

  var drawboard = function(move, player) {
    var playerMove = parseInt(move);
    console.log(move);
    console.log(player)
    var boardString = '';
    var ceiling = '-------';
    var counter = 0;
    var stop = false;
    boardString += 
          `
          `;
    for (var j = 0; j < blocks.length; j++) {
      for (var i = 0; i < blocks[j].length; i++) {
        if (playerMove === blocks[j][i]) {
          boardString += playerArr[player];
          blocks[j][i] = playerArr[player];
          stop = checkIfPlayerWins(j,i,player)
        } else {
          boardString += blocks[j][i];
        }
        counter++;
        if (counter === 3) {
          boardString += 
          `
          `;
          counter = 0;
        }
      }
    }
    console.log(boardString);
    if (!stop) {
      if (player === 0) {
        getUserMove(1);
      } else {
        getUserMove(0);
      }
    }

  }

  var checkIfPlayerWins = function(row, col, player) {
    //Check Row
    var win = false;
    for (var i = 0; i < blocks.length; i++) {
      var counter = 0;
      for (var j = 0; j < blocks[i].length; j++) {
        if (blocks[i][j] === playerArr[player]) {
          counter++;
          if (counter === 3) {
            win = true;
          }
        }
      }
    }

    for (var i = 0; i < blocks.length; i++) {
      var counter = 0;
      for (var j = 0; j < blocks[i].length; j++) {
        if (blocks[j][i] === playerArr[player]) {
          counter++;
          if (counter === 3) {
            win = true;
          }
        }
      }
    }

    var counter = 0;
    for (var i = 0; i < blocks.length; i++) {
      if (blocks[i][i] === playerArr[player]) {
          counter++;
          if (counter === 3) {
            win = true;
          }
      }
    }

    var counter = 0;
    for (var i = 0; i < blocks.length; i++) {
      if (blocks[2-i][i] === playerArr[player]) {
        counter++;
        if (counter === 3) {
          win = true;
        }
      }
    }

    if (win) {
      console.log(playerArr[player] + " YOU WIN!!");
      return true;
    } else {
      return false;
    }
  }


  getUserMove(0);
  //2,0 1,1 0,2
     // -------
     // |1|2|3|
     // -------
     // |4|5|x|
     // -------
     // |7|8|9|
     // -------;