/**
 * Created by Asadul Islam on 5/26/2017.
 */

var squareX;
var squareY;
var square;
var score = 0;
var showScore;
var mainArea;

function mainControl() {
    squareX = 60;
    squareY = 180;
    score = 0;
    showScore = document.getElementById("score");
    square = document.getElementById("playSquare");
    mainArea = document.getElementById("mainArea");
    createNewBar();
}

function createNewBar() {
    var stop = false;
    var theTimer;
    var countPast = 0;
    var positionX = 530;
    var positionY = 100;
    var length1 = Math.floor(Math.random() * 150);
    var length2 = Math.floor(Math.random() * (200 - length1 - 50))
    var positionY2 = 300 - length2;

    var barUp = document.createElement("div");
    barUp.style.top = positionY + "px";
    barUp.style.left = positionX + "px";
    barUp.style.width = "20px";
    barUp.style.height = length1 + "px";
    barUp.style.backgroundColor = "green";
    barUp.style.position = "fixed";

    var barDown = document.createElement("div");
    barDown.style.top = positionY2 + "px";
    barDown.style.left = positionX + "px";
    barDown.style.width = "20px";
    barDown.style.height = length2 + "px";
    barDown.style.backgroundColor = "green";
    barDown.style.position = "fixed";

    mainArea.appendChild(barUp);
    mainArea.appendChild(barDown);
    movePosition();

    function movePosition() {

        if ((squareY <= (positionY + length1) && (squareX+40)==positionX) || (positionY2<=squareY+40 && (squareX+40)==positionX)) {
            stop = true;
            clearTimeout(theTimer);
        }

        if (stop && mainArea.firstChild){
            mainArea.removeChild(barUp);
            mainArea.removeChild(barDown);
            gameOver();
            return;
        }
        else if (stop){
            mainArea.removeChild(barUp);
            mainArea.removeChild(barDown);
            return;
        }

        if (countPast == 200 && !stop) {
            createNewBar();
        }
        else if (positionX == 50) {
            mainArea.removeChild(barUp);
            mainArea.removeChild(barDown);
        }


        countPast++;
        score = score + 0.10;
        positionX = positionX - 1;
        barUp.style.left = positionX + "px";
        barDown.style.left = positionX + "px";
        theTimer = setTimeout(movePosition, 20 - Math.floor(score / 1000));
        showScore.innerHTML = "Score : " + Math.floor(score);
    }

    function gameOver() {
        alert("Game over.");
        while (mainArea.hasChildNodes()){
            mainArea.removeChild(barUp);
            mainArea.removeChild(barDown);
        }
        countPast = 0;
        positionX = 530;
        positionY = 100;
        mainControl();
    }

}

function controlUp() {
    squareY = squareY - 5;
    square.style.top = squareY + "px";
}

function controlDown() {
    squareY = squareY + 5;
    square.style.top = squareY + "px";
}

function controlLeft() {
    squareX = squareX - 5;
    square.style.left = squareX + "px";
}

function controlRight() {
    squareX = squareX + 5;
    square.style.left = squareX + "px";
}