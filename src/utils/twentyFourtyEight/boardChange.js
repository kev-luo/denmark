export function randomAdd(board) {
  const numChoices = [2, 4];
  const newNum = numChoices[Math.floor(Math.random() * 2)];

  // vacancies contains the index value of the board array with no number in it
  let vacancies = [];
  for (let i=0; i<16; i++) {
    if(board[i] === 0) {
      vacancies.push(i)
    }
  }

  const vacanciesLength = vacancies.length;
  if(vacanciesLength === 0) return board;

  let numPlacement = vacancies[Math.floor(Math.random() * vacanciesLength)]
  board[numPlacement] = newNum;
  return board;
}