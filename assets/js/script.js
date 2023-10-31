const board = [
  ['','',''],
  ['','',''],
  ['','','']
]

// ['','','','','','','','','']

let currentPlayer = 'X';

// fill the addressed cell with current player
const fillCell = (row , col) => {
  board[row-1][col-1] = currentPlayer;  
}

// change current player turn
const changeTurn = () =>{
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// check if addressed cell is filled or not
const isCellFilled = (row , col) =>{
  return board[row-1][col-1] !== ''; 
}

// check if game has winner or not
const gameHasWinner = () =>{
  let hasWinner = false;
  hasWinner = board.some((row)=> {
    return row.every((cell) => cell === currentPlayer)
  })
  if (hasWinner) {
    return true ;
  }

  hasWinner = [0,1,2].some((col)=>{
    return board[0][col] === board[1][col] && board[1][col]=== board[2][col];
  })
  if (hasWinner) {
    return true ;
  }

  // check every row
  // hasWinner = board[0][0] === board[0][1] === board [0][2];
  // if (hasWinner) {
  //   return true;
  // }
  // hasWinner = board[1][0] === board[1][1] === board [1][2];
  // if (hasWinner) {
  //   return true;
  // }
  // hasWinner = board[2][0] === board[2][1] === board [2][2];
  // if (hasWinner) {
  //   return true;
  // }
  // hasWinner = board[1][0] === board[1][1] === board [1][2];
  // if (hasWinner) {
  //   return true;
  // }  hasWinner = board[0][0] === board[0][1] === board [0][2];
  // if (hasWinner) {
  //   return true;
  // }
  // hasWinner = board[1][0] === board[1][1] === board [1][2];
  // if (hasWinner) {
  //   return true;
  // }  hasWinner = board[0][0] === board[0][1] === board [0][2];
  // if (hasWinner) {
  //   return true;
  // }
  // hasWinner = board[1][0] === board[1][1] === board [1][2];
  // if (hasWinner) {
  //   return true;
  // }
  // return hasWinner;
}

// check if every cell is filled
const isGameFinished = () =>{
  // return board.every((row) =>{
  //   return row.every((cell)=>{
  //     return cell !== ''; 
  //   })
  // })
  return board.flat().every((cell)=> cell !== '')
}

// runs when a cell is clicked on
const onCellClick = (row , col) =>{
  
 if (isCellFilled(row , col)) {
  alert('try another cell');
 }else{
  fillCell(row , col);
  if (gameHasWinner()) {
    alert(` winner is ${currentPlayer} !`)
  }else if (isGameFinished()) {
    alert('Draw!')
  }else{
    changeTurn();
  }
 }
 console.log(board);
}

