/**
 * Created by Md. Asadul Islam on 5/15/2017.
 */

var i=5;
var correct = document.createElement("img");
function findMissingOne() {
    var j=1;
    var img1 = document.getElementById("div1");
    var img2 = document.getElementById("div2");
    while (j<=i){
        var top_position = 200 + Math.random() * 300;
        var left_position = 50 + Math.random() * 300;
        //top_position = Math.floor(top_position);
        //left_position = Math.floor(left_position);

        var imageIcon = document.createElement("img");
        imageIcon.src = "imoji.jpg";
        imageIcon.style.top = top_position + "px";
        imageIcon.style.left = left_position + "px";
        imageIcon.style.width = "28px";
        imageIcon.style.height = "28px";

        var imageIcon1 = document.createElement("img");
        imageIcon1.src = "imoji.jpg";
        imageIcon1.style.left = left_position + 400 + "px";
        imageIcon1.style.top = top_position + "px";
        imageIcon1.style.width = "28px";
        imageIcon1.style.height = "28px";

        if (i==j){
            img1.appendChild(imageIcon);
            imageIcon.addEventListener("click",rightClick);
            correct = imageIcon;
            break;
        }

        img1.appendChild(imageIcon);
        imageIcon.addEventListener("click",wrongClick);
        img2.appendChild(imageIcon1);

        j++;
    }
}

function rightClick() {
    alert("Congratulation. You have completed level "+ i/5 + ".");
    var img1 = document.getElementById("div1");
    var img2 = document.getElementById("div2");
    while (img1.firstChild){
        img1.removeChild(img1.firstChild);
    }
    while (img2.firstChild){
        img2.removeChild(img2.firstChild);
    }
    i = i+5;
    findMissingOne();

}

function wrongClick() {
    alert("Game is over");
    var img1 = document.getElementById("div1");
    var img2 = document.getElementById("div2");
    while (img1.firstChild){
        img1.removeChild(img1.firstChild);
    }
    while (img2.firstChild){
        img2.removeChild(img2.firstChild);
    }
    i = 5;
    findMissingOne();
}

function playAgain() {
    var img1 = document.getElementById("div1");
    var img2 = document.getElementById("div2");
    while (img1.firstChild){
        img1.removeChild(img1.firstChild);
    }
    while (img2.firstChild){
        img2.removeChild(img2.firstChild);
    }
    i = 5;
    findMissingOne();
}

function gameHelper() {
    alert("This is a funny game.\n In the right side, one imoji is missing, find out the imoji in left side.");
}