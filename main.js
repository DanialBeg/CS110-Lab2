var counter = 0;
var scoreX = 0;
var scoreO = 0;

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
    if ((onev === twov === threev)){
        var gom = document.getElementById('go');
        gom.innerHTML = "X wins!";
        return true;
    }
    return false;
};

function one(){
    var choice = document.getElementById('xo1');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O"){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        onev = 'X';
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        onev = 'O';
        turn.innerHTML = "X";
    }
    console.log(counter);
    seen1 = true;

    if(checkWin()){
        scoreX += 1;
        var gom = document.getElementById('go');
        gom.innerHTML = "X wins!";
    }

    else if(counter == 8){
        var gom = document.getElementById('go');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
};

function two(){
    var choice = document.getElementById('xo2');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O"){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        twov = 'X';
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        twov = 'O';
        turn.innerHTML = "X";
    }
    seen2 = true;

    if(counter == 8){
        var gom = document.getElementById('go');
        gom.innerHTML = "Game over.";
    }
    counter += 1;
    console.log(counter);
};

function three(){
    var choice = document.getElementById('xo3');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O"){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        threev = 'X';
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        threev = 'O';
        turn.innerHTML = "X";
    }
    seen3 = true;

    if(counter == 8){
        var gom = document.getElementById('go');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
};

function four(){
    var choice = document.getElementById('xo4');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O"){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        fourv = 'X';
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        fourv = 'O';
        turn.innerHTML = "X";
    }
    seen4 = true;

    if(counter == 8){
        var gom = document.getElementById('go');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
};

function five(){
    var choice = document.getElementById('xo5');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O"){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        fivev = 'X';
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        fivev = 'O';
        turn.innerHTML = "X";
    }
    seen5 = true;

    if(counter == 8){
        var gom = document.getElementById('go');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
};

function six(){
    var choice = document.getElementById('xo6');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O"){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        sixv = 'X';
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        sixv = 'O';
        turn.innerHTML = "X";
    }
    seen6 = true;

    if(counter == 8){
        var gom = document.getElementById('go');
        gom.innerHTML = "Game over.";
    }
    counter += 1;
};

function seven(){
    var choice = document.getElementById('xo7');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O"){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        sevenv = 'X';
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        sevenv = 'O';
        turn.innerHTML = "X";
    }
    seen7 = true;

    if(counter == 8){
        var gom = document.getElementById('go');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
};

function eight(){
    var choice = document.getElementById('xo8');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O"){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        eightv = 'X';
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        eightv = 'O';
        turn.innerHTML = "X";
    }
    seen8 = true;

    if(counter == 8){
        var gom = document.getElementById('go');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
};

function nine(){
    var choice = document.getElementById('xo9');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O"){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        ninev = 'X';
        if(counter < 8){
            turn.innerHTML = "O";
        }
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        ninev = 'O';
        if(counter < 8){
            turn.innerHTML = "X";
        }
    }
    
    seen9 = true;

    if(counter == 8){
        var gom = document.getElementById('gameover');
        gom.innerHTML = "Game over.";
    }

    counter += 1;
    console.log(counter);
};

function newGame() {
    var boxes = document.getElementsByClassName('xo');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "&#8203";
    }
    counter = 0;
    var gom = document.getElementById('go');
    //gom.innerHTML = "It's your turn, X.";
};

function resetGame() {
    var boxes = document.getElementsByClassName('xo');
    var sX = document.getElementById('display_scoreX');
    var sO = document.getElementById('display_scoreO');

    sX.innerHTML = '0';
    sO.innerHTML = '0';

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "&#8203";
    }

    scoreX = 0;
    scoreO = 0;
};