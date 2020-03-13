/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log("Single solution for " + n + " rooks:", JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log("Number of solutions for " + n + " rooks:", solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log(
    "Single solution for " + n + " queens:",
    JSON.stringify(solution)
  );
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme
  var solutionArr = [];

  if (n === 1 || n === 0) {
    return 1;
  }

  var queenTree = function(board, rowIndex) {
    var current = board;

    for (var i = 0; i < n; i++) {
      var failSafe = 0;
      if (rowIndex >= n) {
        solutionCount++;
        rowIndex = 0;
      }
      current.togglePiece(rowIndex, i);
      if (!current.hasAnyQueensConflicts()) {
        solutionArr.push([rowIndex, i]);
        queenTree(current, rowIndex + 1);
      } else {
        failSafe++;
        current.togglePiece(rowIndex, i);
      }
      if (failSafe === n) {
        queenTree(current, rowIndex + 1);
      }
    }
  };

  var newBoard = new Board({ n: n });
  queenTree(newBoard, 0);

  console.log(solutionArr);

  console.log("Number of solutions for " + n + " queens:", solutionCount);
  return solutionCount;
};
