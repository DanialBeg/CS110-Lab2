var counter = 0;
var scoreX = 0;
var scoreO = 0;

var seen1 = false;
var seen2 = false;
var seen3 = false;
var seen4 = false;
var seen5 = false;
var seen6 = false;
var seen7 = false;
var seen8 = false;
var seen9 = false;

function checkWin(){

};

function one(){
    var choice = document.getElementById('xo1');
    var turn = document.getElementById('turn');

    if(choice.innerHTML === "X" || choice.innerHTML === "O"){
        return;
    }

    if(counter%2 == 0){
        choice.innerHTML = "X";
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        turn.innerHTML = "X";
    }
    console.log(counter);
    seen1 = true;

    if(counter == 8){
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
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
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
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
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
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
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
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
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
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
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
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
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
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
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
        turn.innerHTML = "O";
    }
    else if(counter%2 != 0){
        choice.innerHTML = "O";
        turn.innerHTML = "X";
    }
    
    seen9 = true;

    if(counter == 8){
        var gom = document.getElementById('go');
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
    gom.innerHTML = "It's your turn, X.";
    var seen1 = false;
    var seen2 = false;
    var seen3 = false;
    var seen4 = false;
    var seen5 = false;
    var seen6 = false;
    var seen7 = false;
    var seen8 = false;
    var seen9 = false;
};

function resetGame() {
    var sX = document.getElementById('display_scoreX');
    var sO = document.getElementById('display_scoreO');

    sX.innerHTML = '0';
    sO.innerHTML = '0';


};