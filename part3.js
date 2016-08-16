var numberOfFaces = 5;

var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");

function generateFaces() {
    for (var i = 0; i < numberOfFaces; i++) {
        var x = document.createElement("img");
        x.setAttribute("src", "http://party-clipart.clipartonline.net/_/rsrc/1383341523568/party-clowns-and-balloons/clown-14.png?height=320&width=320");
        x.setAttribute("height", 100 + "px");
        x.setAttribute("width", 100 + "px");
        x.setAttribute("alt", "clown");
        x.setAttribute("position", "absolute");
        x.style.top = Math.random() * 400 + "px";
        x.style.left = Math.random() * 400 + "px";
        theLeftSide.appendChild(x);
    }

    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.childNodes[leftSideImages.childNodes.length - 1]);
    theRightSide.appendChild(leftSideImages);

}

generateFaces();