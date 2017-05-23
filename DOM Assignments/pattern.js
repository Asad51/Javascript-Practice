/**
 * Created by Md. Asadul Islam on 5/15/2017.
 */


function repeatPattern() {
    var top_position = 100;
    var left_position = 100;
    var height = 400, width = 400;
    var colorList = ["red","orange","yellow","green","blue","indigo","violet","blueviolet","aqua","brown"];
    while(width>30) {
        var myDiv = document.createElement("div");
        var colorChooser = Math.random() * 10;
        colorChooser = Math.floor(colorChooser);
        myDiv.style.top = top_position + "px";
        myDiv.style.left = left_position + "px";
        myDiv.style.width = width + "px";
        myDiv.style.height = height + "px";
        myDiv.style.background = colorList[colorChooser];

        var theBody = document.getElementById("theBody");
        theBody.appendChild(myDiv);
        top_position += 10;
        left_position +=10;
        width -= 20;
        height -= 20;
    }
}

function plyAgain() {
    repeatPattern();
}
