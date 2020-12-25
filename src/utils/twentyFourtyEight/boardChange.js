import _ from "lodash";

export function randomAdd(board) {
  let boardClone = [...board.flat()];
  const numChoices = [2, 4];
  const newNum = numChoices[Math.floor(Math.random() * 2)];

  // vacancies contains the index value of the board array with no number in it
  let vacancies = [];
  for (let i = 0; i < 16; i++) {
    if (boardClone[i] === 0) {
      vacancies.push(i);
    }
  }

  const vacanciesLength = vacancies.length;
  if (vacanciesLength === 0) return board;

  let numPlacement = vacancies[Math.floor(Math.random() * vacanciesLength)];
  boardClone[numPlacement] = newNum;
  return _.chunk(boardClone, 4);
}

export function boardMove(board, direction) {
  var boardCopy = _.cloneDeep(board);
  var itStart; //iteration start point
  var itDir; //iteration direction
  //var nextVac;

  if (direction === "ArrowUp" || direction === "ArrowDown") {
    //iterate by col
    if (direction === "ArrowUp") {
      itStart = 0;
      itDir = 1;
    } else {
      itStart = 3;
      itDir = -1;
    }
    for (var j = 0; j < 4; ++j) {
      var merged = [false, false, false, false];
      for (var i = itStart, nextVac = itStart; ; i += itDir) {
        if (boardCopy[i][j] !== 0) {
          var temp = boardCopy[i][j];
          boardCopy[i][j] = 0;
          if (
            nextVac !== itStart &&
            temp === boardCopy[nextVac - itDir][j] &&
            merged[nextVac - itDir] === false
          ) {
            //first block not merge, merge once for every col, merge iff equal
            merged[nextVac - itDir] = true;
            boardCopy[nextVac - itDir][j] *= 2;
          } else {
            //console.log([nextVac, j]);
            boardCopy[nextVac][j] = temp;
            nextVac += itDir;
          }
        }
        if (i === 3 - itStart) break;
      }
    }
  } else {
    //iterate by row
    if (direction === "ArrowLeft") {
      itStart = 0;
      itDir = 1;
    } else {
      itStart = 3;
      itDir = -1;
    }
    for (i = 0; i < 4; ++i) {
      merged = [false, false, false, false];
      for (j = itStart, nextVac = itStart; ; j += itDir) {
        if (boardCopy[i][j] !== 0) {
          temp = boardCopy[i][j];
          boardCopy[i][j] = 0;
          if (
            nextVac !== itStart &&
            temp === boardCopy[i][nextVac - itDir] &&
            merged[nextVac - itDir] === false
          ) {
            //first block not merge, merge once for every col, merge iff equal
            merged[nextVac - itDir] = true;
            boardCopy[i][nextVac - itDir] *= 2;
          } else {
            boardCopy[i][nextVac] = temp;
            nextVac += itDir;
          }
        }
        if (j === 3 - itStart) break;
      }
    }
  }
  return boardCopy
  // console.log("zipped: ", _.zip(...board))
}
