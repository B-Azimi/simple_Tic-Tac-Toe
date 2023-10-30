const sign_selection = (sign) => {
    const playerChoose_1 = document.querySelector('.player-1');
    const playerChoose_2 = document.querySelector('.player-2');
    if (playerChoose_1.innerText === '') {
        if (sign === 'X') {
            playerChoose_1.innerText += sign;
            playerChoose_2.innerText += 'O';
        }else{
            playerChoose_1.innerText += 'O';
            playerChoose_2.innerText += 'X';
        } 
    }
      
} 

let valueWrapper=[];
let boardPlaces = {p1:'',p2:'',p3:'',p4:'',p5:'',p6:'',p7:'',p8:'',p9:''};
const select_cell_1 = () => {
    const playerChoose_1 = document.querySelector('.player-1').innerText;
    const playerChoose_2 = document.querySelector('.player-2').innerText;
    if (!valueWrapper.length) {
        document.querySelector('.board-cell-1').innerText = playerChoose_1 ;
        
    }else if(valueWrapper[valueWrapper.length-1]==='X'){
        document.querySelector('.board-cell-1').innerText = 'O' ;
} else{
    document.querySelector('.board-cell-1').innerText = 'X' ;
}
valueWrapper.push(document.querySelector('.board-cell-1').innerText);
boardPlaces.p1=document.querySelector('.board-cell-1').innerText;

if (((boardPlaces.p1===boardPlaces.p2 && boardPlaces.p2===boardPlaces.p3) || 
(boardPlaces.p1===boardPlaces.p4 && boardPlaces.p4===boardPlaces.p7) ||
(boardPlaces.p1===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p9) )
    && boardPlaces.p1=== playerChoose_1){
        document.querySelector('.show-result').innerText = 'Player_One Wins!' ;
       
} else if (((boardPlaces.p1===boardPlaces.p2 && boardPlaces.p2===boardPlaces.p3) || 
(boardPlaces.p1===boardPlaces.p4 && boardPlaces.p4===boardPlaces.p7) ||
(boardPlaces.p1===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p9))
&& boardPlaces.p1=== playerChoose_2) {
    document.querySelector('.show-result').innerText = 'Player_Two Wins!' ;   
}
}    
const select_cell_2 = () => {
    const playerChoose_1 = document.querySelector('.player-1').innerText;
    const playerChoose_2 = document.querySelector('.player-2').innerText;
    if (!valueWrapper.length) {
        document.querySelector('.board-cell-2').innerText = playerChoose_1 ;
        
    }else if(valueWrapper[valueWrapper.length-1]==='X'){
        document.querySelector('.board-cell-2').innerText = 'O' ;
} else{
    document.querySelector('.board-cell-2').innerText = 'X' ;
}
valueWrapper.push(document.querySelector('.board-cell-2').innerText);
boardPlaces.p2=document.querySelector('.board-cell-2').innerText;
if (((boardPlaces.p1===boardPlaces.p2 && boardPlaces.p2===boardPlaces.p3) || 
(boardPlaces.p2===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p8)  )
    && boardPlaces.p2=== playerChoose_1){
        document.querySelector('.show-result').innerText = 'Player_One Wins!' ;
       
} else if (((boardPlaces.p1===boardPlaces.p2 && boardPlaces.p2===boardPlaces.p3) || 
(boardPlaces.p2===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p8)  )
    && boardPlaces.p2=== playerChoose_2) {
    document.querySelector('.show-result').innerText = 'Player_Two Wins!' ;   
}
}
const select_cell_3 = () => {
    const playerChoose_1 = document.querySelector('.player-1').innerText;
    const playerChoose_2 = document.querySelector('.player-2').innerText;
    if (!valueWrapper.length) {
        document.querySelector('.board-cell-3').innerText = playerChoose_1 ;
        
    }else if(valueWrapper[valueWrapper.length-1]==='X'){
        document.querySelector('.board-cell-3').innerText = 'O' ;
} else{
    document.querySelector('.board-cell-3').innerText = 'X' ;
}
valueWrapper.push(document.querySelector('.board-cell-3').innerText);
boardPlaces.p3=document.querySelector('.board-cell-3').innerText;
if (((boardPlaces.p1===boardPlaces.p2 && boardPlaces.p2===boardPlaces.p3) || 
(boardPlaces.p3===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p7) || 
(boardPlaces.p3===boardPlaces.p6 && boardPlaces.p6===boardPlaces.p9) )
    && boardPlaces.p3=== playerChoose_1
     ) {
        document.querySelector('.show-result').innerText = 'Player_One Wins!' ;
} else if (((boardPlaces.p1===boardPlaces.p2 && boardPlaces.p2===boardPlaces.p3) || 
(boardPlaces.p3===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p7) || 
(boardPlaces.p3===boardPlaces.p6 && boardPlaces.p6===boardPlaces.p9) )
    && boardPlaces.p3=== playerChoose_2) {
            document.querySelector('.show-result').innerText = 'Player_Two Wins!' ;   
}
}  
const select_cell_4 = () => {
    const playerChoose_1 = document.querySelector('.player-1').innerText;
    const playerChoose_2 = document.querySelector('.player-2').innerText;
    if (!valueWrapper.length) {
        document.querySelector('.board-cell-4').innerText = playerChoose_1 ;
        
    }else if(valueWrapper[valueWrapper.length-1]==='X'){
        document.querySelector('.board-cell-4').innerText = 'O' ;
} else{
    document.querySelector('.board-cell-4').innerText = 'X' ;
}
valueWrapper.push(document.querySelector('.board-cell-4').innerText);
boardPlaces.p4=document.querySelector('.board-cell-4').innerText;
if (((boardPlaces.p4===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p6) || 
(boardPlaces.p1===boardPlaces.p4 && boardPlaces.p4===boardPlaces.p7)  )
    && boardPlaces.p4=== playerChoose_1
     ) {
        document.querySelector('.show-result').innerText = 'Player_One Wins!' ;
} else if (((boardPlaces.p4===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p6) || 
(boardPlaces.p1===boardPlaces.p4 && boardPlaces.p4===boardPlaces.p7)  )
    && boardPlaces.p4=== playerChoose_2) {
            document.querySelector('.show-result').innerText = 'Player_Two Wins!' ;   
}
}  
const select_cell_5 = () => {
    const playerChoose_1 = document.querySelector('.player-1').innerText;
    const playerChoose_2 = document.querySelector('.player-2').innerText;
    if (!valueWrapper.length) {
        document.querySelector('.board-cell-5').innerText = playerChoose_1 ;
        
    }else if(valueWrapper[valueWrapper.length-1]==='X'){
        document.querySelector('.board-cell-5').innerText = 'O' ;
} else{
    document.querySelector('.board-cell-5').innerText = 'X' ;
}
valueWrapper.push(document.querySelector('.board-cell-5').innerText);
boardPlaces.p5=document.querySelector('.board-cell-5').innerText;
if (((boardPlaces.p1===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p9) || 
(boardPlaces.p2===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p8) || 
(boardPlaces.p4===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p6) ||
(boardPlaces.p3===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p7)  )
    && boardPlaces.p5=== playerChoose_1
     ) {
        document.querySelector('.show-result').innerText = 'Player_One Wins!' ;
} else if (((boardPlaces.p1===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p9) || 
(boardPlaces.p2===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p8) || 
(boardPlaces.p4===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p6) ||
(boardPlaces.p3===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p7)  )
    && boardPlaces.p5=== playerChoose_2) {
            document.querySelector('.show-result').innerText = 'Player_Two Wins!' ;   
}
}  
const select_cell_6 = () => {
    const playerChoose_1 = document.querySelector('.player-1').innerText;
    const playerChoose_2 = document.querySelector('.player-2').innerText;
    if (!valueWrapper.length) {
        document.querySelector('.board-cell-6').innerText = playerChoose_1 ;
        
    }else if(valueWrapper[valueWrapper.length-1]==='X'){
        document.querySelector('.board-cell-6').innerText = 'O' ;
} else{
    document.querySelector('.board-cell-6').innerText = 'X' ;
}
valueWrapper.push(document.querySelector('.board-cell-6').innerText);
boardPlaces.p6=document.querySelector('.board-cell-6').innerText;
if (((boardPlaces.p3===boardPlaces.p6 && boardPlaces.p6===boardPlaces.p9) || 
(boardPlaces.p4===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p6) )
    && boardPlaces.p6=== playerChoose_1
     ) {
        document.querySelector('.show-result').innerText = 'Player_One Wins!' ;
} else if (((boardPlaces.p3===boardPlaces.p6 && boardPlaces.p6===boardPlaces.p9) || 
(boardPlaces.p4===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p6) )
    && boardPlaces.p6=== playerChoose_2) {
            document.querySelector('.show-result').innerText = 'Player_Two Wins!' ;   
}
}  
const select_cell_7 = () => {
    const playerChoose_1 = document.querySelector('.player-1').innerText;
    const playerChoose_2 = document.querySelector('.player-2').innerText;
    if (!valueWrapper.length) {
        document.querySelector('.board-cell-7').innerText = playerChoose_1 ;
        
    }else if(valueWrapper[valueWrapper.length-1]==='X'){
        document.querySelector('.board-cell-7').innerText = 'O' ;
} else{
    document.querySelector('.board-cell-7').innerText = 'X' ;
}
valueWrapper.push(document.querySelector('.board-cell-7').innerText);
boardPlaces.p7=document.querySelector('.board-cell-7').innerText;
if (((boardPlaces.p1===boardPlaces.p4 && boardPlaces.p4===boardPlaces.p7) || 
(boardPlaces.p3===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p7)||
(boardPlaces.p7===boardPlaces.p8 && boardPlaces.p8===boardPlaces.p9)  )
    && boardPlaces.p7=== playerChoose_1
     ) {
        document.querySelector('.show-result').innerText = 'Player_One Wins!' ;
} else if (((boardPlaces.p1===boardPlaces.p4 && boardPlaces.p4===boardPlaces.p7) || 
(boardPlaces.p3===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p7)||
(boardPlaces.p7===boardPlaces.p8 && boardPlaces.p8===boardPlaces.p9)  )
    && boardPlaces.p7=== playerChoose_2) {
            document.querySelector('.show-result').innerText = 'Player_Two Wins!' ;   
}
}  
const select_cell_8 = () => {
    const playerChoose_1 = document.querySelector('.player-1').innerText;
    const playerChoose_2 = document.querySelector('.player-2').innerText;
    if (!valueWrapper.length) {
        document.querySelector('.board-cell-8').innerText = playerChoose_1 ;
        
    }else if(valueWrapper[valueWrapper.length-1]==='X'){
        document.querySelector('.board-cell-8').innerText = 'O' ;
} else{
    document.querySelector('.board-cell-8').innerText = 'X' ;
}
valueWrapper.push(document.querySelector('.board-cell-8').innerText);
boardPlaces.p8=document.querySelector('.board-cell-8').innerText;
if (((boardPlaces.p2===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p8) || 
(boardPlaces.p7===boardPlaces.p8 && boardPlaces.p8===boardPlaces.p9)  )
    && boardPlaces.p8=== playerChoose_1){
        document.querySelector('.show-result').innerText = 'Player_One Wins!' ;
       
} else if (((boardPlaces.p2===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p8) || 
(boardPlaces.p7===boardPlaces.p8 && boardPlaces.p8===boardPlaces.p9)  )
    && boardPlaces.p8=== playerChoose_2) {
    document.querySelector('.show-result').innerText = 'Player_Two Wins!' ;   
}
}  
const select_cell_9 = () => {
    const playerChoose_1 = document.querySelector('.player-1').innerText;
    const playerChoose_2 = document.querySelector('.player-2').innerText;
    if (!valueWrapper.length) {
        document.querySelector('.board-cell-9').innerText = playerChoose_1 ;
        
    }else if(valueWrapper[valueWrapper.length-1]==='X'){
        document.querySelector('.board-cell-9').innerText = 'O' ;
} else{
    document.querySelector('.board-cell-9').innerText = 'X' ;
}
valueWrapper.push(document.querySelector('.board-cell-9').innerText);
boardPlaces.p9=document.querySelector('.board-cell-9').innerText;
if (((boardPlaces.p1===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p9) || 
(boardPlaces.p7===boardPlaces.p8 && boardPlaces.p8===boardPlaces.p9) || 
(boardPlaces.p3===boardPlaces.p6 && boardPlaces.p6===boardPlaces.p9) )
    && boardPlaces.p9=== playerChoose_1
     ) {
        document.querySelector('.show-result').innerText = 'Player_One Wins!' ;
} else if (((boardPlaces.p1===boardPlaces.p5 && boardPlaces.p5===boardPlaces.p9) || 
(boardPlaces.p7===boardPlaces.p8 && boardPlaces.p8===boardPlaces.p9) || 
(boardPlaces.p3===boardPlaces.p6 && boardPlaces.p6===boardPlaces.p9) )
    && boardPlaces.p9=== playerChoose_2) {
            document.querySelector('.show-result').innerText = 'Player_Two Wins!' ;   
}
}  
    const reset_board = () => {
        document.querySelector('.player-1').innerText = '';
        document.querySelector('.player-2').innerText = '';
        document.querySelector('.board-cell-1').innerText = '';
        document.querySelector('.board-cell-2').innerText = '';
        document.querySelector('.board-cell-3').innerText = '';
        document.querySelector('.board-cell-4').innerText = '';
        document.querySelector('.board-cell-5').innerText = '';
        document.querySelector('.board-cell-6').innerText = '';
        document.querySelector('.board-cell-7').innerText = '';
        document.querySelector('.board-cell-8').innerText = '';
        document.querySelector('.board-cell-9').innerText = '';
        document.querySelector('.show-result').innerText = '';   
        valueWrapper=[];
        boardPlaces = {p1:null,p2:null,p3:null,
            p4:null,p5:null,p6:null,
            p7:null,p8:null,p9:null};  
    }
