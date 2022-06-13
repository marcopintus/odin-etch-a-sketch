let title = document.createElement("div");
title.classList.add("title");
title.textContent = "Etch-a-Sketch";
document.body.appendChild(title);

let canvasWidth = 800;
let canvasHeight = canvasWidth;

let canvas = document.createElement("div");
canvas.classList.add("canvas");
canvas.setAttribute("style", `width: ${canvasWidth}px; heigth: ${canvasHeight}px;`)
document.body.appendChild(canvas);

let numTilesSide = 16;
let tileDimension = canvasWidth/numTilesSide;

for (let i=0; i<numTilesSide**2;i++){
    console.log(i)
    let tile = document.createElement("div");
    tile.classList.add("tile");
    tile.setAttribute("style",`width: ${tileDimension}px; height: ${tileDimension}px;`)
    canvas.appendChild(tile);
}