var counter = 0;
var scoreX = 0;
var scoreO = 0;
var gamewon = false;
var playermoves = [];

var onev = '';
var twov = '';
var threev = '';
var fourv = '';
var fivev = '';
var sixv = '';
var sevenv = '';
var eightv = '';
var ninev = '';
var tenv = '';

function checkWin(){
    console.log(onev);
    console.log(twov);
    console.log(threev);
    if (onev === 'X' && twov === 'X' && threev === 'X' || 
        onev === 'O' && twov === 'O' && threev === 'O'){
        console.log("entered if");
        var gom = document.getElementById('gameover');
        if(counter %2 == 0){
            gom.innerHTML = "X wins!"
            scoreX += 1;
            var scoreSpan = document.getElementById("display_scoreX");
            scoreSpan.innerHTML = scoreX;
        } else {
            gom.innerHTML = "O wins!"
            scoreO += 1;
            var scoreSpan = document.getElementById("display_scoreO");
            scoreSpan.innerHTML = scoreO;
        }
        // gom.innerHTML = "X wins!";
        return true;
    }
    else if(fourv === 'X' && fivev === 'X' && sixv === 'X' || 
            fourv === 'O' && fivev === 'O' && sixv === 'O'){
        console.log("entered if");
        var gom = document.getElementById('gameover');
        if(counter %2 == 0){
            gom.innerHTML = "X wins!"
            scoreX += 1;
            var scoreSpan = document.getElementById('display_scoreX');
            scoreSpan.innerHTML = scoreX;
        } else {
            gom.innerHTML = "O wins!"
            scoreO += 1;
            var scoreSpan = document.getElementById("display_scoreO");
            scoreSpan.innerHTML = scoreO;
        }
        // gom.innerHTML = "X wins!";
        return true;
    } else if(sevenv === 'X' && eightv === 'X' && ninev === 'X' || 
            sevenv === 'O' && eightv === 'O' && ninev === 'O'){
        console.log("entered if");
        var gom = document.getElementById('gameover');
        if(counter %2 == 0){
            gom.innerHTML = "X wins!"
            scoreX += 1;
            var scoreSpan = document.getElementById('display_scoreX');
            scoreSpan.innerHTML = scoreX;
        } else {
            gom.innerHTML = "O wins!"
            scoreO += 1;
            var scoreSpan = document.getElementById("display_scoreO");
            scoreSpan.innerHTML = scoreO;
        }
        // gom.innerHTML = "X wins!";
        return true;
    }
    else if(onev === 'X' && fourv === 'X' && sevenv === 'X' || 
            onev === 'O' && fourv === 'O' && sevenv === 'O'){
        console.log("entered if");
        var gom = document.getElementById('gameover');
        if(counter %2 == 0){
            gom.innerHTML = "X wins!"
            scoreX += 1;
            var scoreSpan = document.getElementById('display_scoreX');
            scoreSpan.innerHTML = scoreX;
        } else {
            gom.innerHTML = "O wins!"
            scoreO += 1;
            var scoreSpan = document.getElementById("display_scoreO");
            scoreSpan.innerHTML = scoreO;
        }
        // gom.innerHTML = "X wins!";
        return true;
    }
    else if(twov === 'X' && fivev === 'X' && eightv === 'X' || 
            twov === 'O' && fivev === 'O' && eightv === 'O'){
        console.log("entered if");
        var gom = document.getElementById('gameover');
        if(counter %2 == 0){
            gom.innerHTML = "X wins!"
            scoreX += 1;
            var scoreSpan = document.getElementById('display_scoreX');
            scoreSpan.innerHTML = scoreX;
        } else {
            gom.innerHTML = "O wins!"
            scoreO += 1;
            var scoreSpan = document.getElementById("display_scoreO");
            scoreSpan.innerHTML = scoreO;
        }
        // gom.innerHTML = "X wins!";
        return true;
    }
    else if(threev === 'X' && sixv === 'X' && ninev === 'X' || 
            threev === 'O' && sixv === 'O' && ninev === 'O'){
        console.log("entered if");
        var gom = document.getElementById('gameover');
        if(counter %2 == 0){
            gom.innerHTML = "X wins!"
            scoreX += 1;
            var scoreSpan = document.getElementById('display_scoreX');
            scoreSpan.innerHTML = scoreX;
        } else {
            gom.innerHTML = "O wins!"
            scoreO += 1;
            var scoreSpan = document.getElementById("display_scoreO");
            scoreSpan.innerHTML = scoreO;
        }
        // gom.innerHTML = "X wins!";
        return true;
    }
    else if(onev === 'X' && fivev === 'X' && ninev === 'X' || 
            onev === 'O' && fivev === 'O' && ninev === 'O'){
        console.log("entered if");
        var gom = document.getElementById('gameover');
        if(counter %2 == 0){
            gom.innerHTML = "X wins!"
            scoreX += 1;
            var scoreSpan = document.getElementById('display_scoreX');
            scoreSpan.innerHTML = scoreX;
        } else {
            gom.innerHTML = "O wins!"
            scoreO += 1;
            var scoreSpan = document.getElementById("display_scoreO");
            scoreSpan.innerHTML = scoreO;
        }
        // gom.innerHTML = "X wins!";
        return true;
    }
    else if(threev === 'X' && fivev === 'X' && sevenv === 'X' || 
            threev === 'O' && fivev === 'O' && sevenv === 'O'){
        console.log("entered if");
        var gom = document.getElementById('gameover');
        if(counter %2 == 0){
            gom.innerHTML = "X wins!"
            scoreX += 1;
            var scoreSpan = document.getElementById('display_scoreX');
            scoreSpan.innerHTML = scoreX;
        } else {
            gom.innerHTML = "O wins!"
            scoreO += 1;
            var scoreSpan = document.getElementById("display_scoreO");
            scoreSpan.innerHTML = scoreO;
        }
        // gom.innerHTML = "X wins!";
        return true;
    }
    return false;
};

function one(){
    var choice = document.getElementById('xo1');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O" || gamewon === true){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        onev = 'X';
        if(counter < 8){
            turn.innerHTML = "O";
        }
        playermoves.push('1');
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        onev = 'O';
        if(counter < 8){
            turn.innerHTML = "X";
        }
    }
    //console.log(counter);
    seen1 = true;

    if(checkWin()){
        gamewon = true;
    }
    else if(counter == 8){
        var gom = document.getElementById('gameover');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
};

function two(){
    var choice = document.getElementById('xo2');
    var turn = document.getElementById('turn');

    console.log(gamewon);

    if(choice.innerHTML === "X" || choice.innerHTML === "O" || gamewon === true){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        twov = 'X';
        if(counter < 8){
            turn.innerHTML = "O";
        }
        playermoves.push('2');
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        twov = 'O';
        if(counter < 8){
            turn.innerHTML = "X";
        }
    }
    seen2 = true;

    if(checkWin()){
        gamewon = true;
    }
    else if(counter == 8){
        var gom = document.getElementById('gameover');
        gom.innerHTML = "Game over.";
    }
    counter += 1;
    //console.log(counter);
};

function three(){
    var choice = document.getElementById('xo3');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O" || gamewon === true){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        threev = 'X';
        if(counter < 8){
            turn.innerHTML = "O";
        }
        playermoves.push('3');
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        threev = 'O';
        if(counter < 8){
            turn.innerHTML = "X";
        }
    }
    seen3 = true;

    if(checkWin()){
        gamewon = true;
    }
    else if(counter == 8){
        var gom = document.getElementById('gameover');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
};

function four(){
    var choice = document.getElementById('xo4');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O" || gamewon === true){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        fourv = 'X';
        if(counter < 8){
            turn.innerHTML = "O";
        }
        playermoves.push('4');
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        fourv = 'O';
        if(counter < 8){
            turn.innerHTML = "X";
        }
    }
    seen4 = true;

    if(checkWin()){
        gamewon = true;
    }
    else if(counter == 8){
        var gom = document.getElementById('gameover');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
};

function five(){
    var choice = document.getElementById('xo5');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O" || gamewon === true){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        fivev = 'X';
        if(counter < 8){
            turn.innerHTML = "O";
        }
        playermoves.push('5');
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        fivev = 'O';
        if(counter < 8){
            turn.innerHTML = "X";
        }
    }
    seen5 = true;

    if(checkWin()){
        gamewon = true;
    }
    else if(counter == 8){
        var gom = document.getElementById('gameover');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
};

function six(){
    var choice = document.getElementById('xo6');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O" || gamewon === true){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        sixv = 'X';
        if(counter < 8){
            turn.innerHTML = "O";
        }
        playermoves.push('6');
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        sixv = 'O';
        if(counter < 8){
            turn.innerHTML = "X";
        }
    }
    seen6 = true;

    if(checkWin()){
        gamewon = true;
    }
    else if(counter == 8){
        var gom = document.getElementById('gameover');
        gom.innerHTML = "Game over.";
    }
    counter += 1;
};

function seven(){
    var choice = document.getElementById('xo7');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O" || gamewon === true){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        sevenv = 'X';
        if(counter < 8){
            turn.innerHTML = "O";
        }
        playermoves.push('7');
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        sevenv = 'O';
        if(counter < 8){
            turn.innerHTML = "X";
        }
    }
    seen7 = true;
    
    if(checkWin()){
        gamewon = true;
    }
    else if(counter == 8){
        var gom = document.getElementById('gameover');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
};

function eight(){
    var choice = document.getElementById('xo8');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O" || gamewon === true){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        eightv = 'X';
        if(counter < 8){
            turn.innerHTML = "O";
        }
        playermoves.push('8');
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        eightv = 'O';
        if(counter < 8){
            turn.innerHTML = "X";
        }
    }
    seen8 = true;

    if(checkWin()){
        gamewon = true;
    }
    else if(counter == 8){
        var gom = document.getElementById('gameover');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
};

function nine(){
    var choice = document.getElementById('xo9');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O" || gamewon === true){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        ninev = 'X';
        if(counter < 8){
            turn.innerHTML = "O";
        }
        playermoves.push('9');
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        ninev = 'O';
        if(counter < 8){
            turn.innerHTML = "X";
        }
    }
    
    seen9 = true;

    if(checkWin()){
        gamewon = true;
    }
    else if(counter == 8){
        var gom = document.getElementById('gameover');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
    //console.log(counter);
};

function newGame() {
    var boxes = document.getElementsByClassName('xo');
    var turn = document.getElementById('turn');
    // var arr = [onev, twov, threev, fourv, fivev, sixv,
    //             sevenv, eightv, ninev];

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "&#8203";
    }

    // for (var j = 0; j < arr.length; j++) {
    //     arr[j] = '';
    // }

    onev = '';
    twov = '';
    threev = '';
    fourv = '';
    fivev = '';
    sixv = '';
    sevenv = '';
    eightv = '';
    ninev = '';
    tenv = '';
    
    counter = 0;
    var gom = document.getElementById('gameover');
    gom.innerHTML = "";
    turn.innerHTML = 'X';
    gamewon = false;
    playermoves = [];
};

function resetGame() {
    var boxes = document.getElementsByClassName('xo');
    var sX = document.getElementById('display_scoreX');
    var sO = document.getElementById('display_scoreO');
    var turn = document.getElementById('turn');

    sX.innerHTML = '0';
    sO.innerHTML = '0';
    scoreX = 0;
    scoreO = 0;
    sX.innerHTML = scoreX;
    sO.innerHTML = scoreO;

    newGame();

    // for (var i = 0; i < boxes.length; i++) {
    //     boxes[i].innerHTML = "&#8203";
    // }

    
    // var gom = document.getElementById('gameover');
    // gom.innerHTML = "";
    // counter = 0;
    // gamewon = false;
    // turn.innerHTML = 'X';
};

function aiPlay() {
    var availMoves = ['1','2','3','4','5','6','7','8','9'];
    var aimoves = [];
    var match = false;

    for(var i = 0; i < availMoves.length; i++){
        match = false;
        for(var j = 0; j < playermoves.length; j++){
            if(availMoves[i] === playermoves[j]){
                match = true;
            }
        }
        if(!match){
            aimoves.push(availMoves[i]);
        }
    }

    //var aimoves = availMoves.filter(x => playermoves.includes(x));
    var rand = Math.floor(Math.random()*aimoves.length)
    console.log('AI');
    console.log(aimoves);
    rand = aimoves[rand];
    playermoves.push(rand);

    // console.log('AI');
    // console.log(rand);

    if(gamewon === true){
        playermoves = [];
        return;
    }
    
    if(counter%2 != 0) {
        if(rand == '1') {
            one();
        }else if(rand == '2'){
            two();
        }else if(rand == '3'){
            three();
        }else if(rand == '4'){
            four();
        }else if(rand == '5'){
            five();
        }else if(rand == '6'){
            six();
        }else if(rand == '7'){
            seven();
        }else if(rand == '8'){
            eight();
        }else if(rand == '9'){
            nine();
        }
    }
};