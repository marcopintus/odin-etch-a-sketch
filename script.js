let title = document.createElement("div");
title.classList.add("title");
title.textContent = "Etch-a-Sketch";
document.body.appendChild(title);

let canvasWidth = 650;
let canvasHeight = canvasWidth;

let canvas = document.createElement("div");
canvas.classList.add("canvas");
document.body.appendChild(canvas);

let numTilesSide = 16;
let tileDimension = canvasWidth/numTilesSide;



function generateGrid(numTiles){
    let canvWidth = 650;
    let tileDim = canvWidth/numTiles;
    for (let i=0; i<numTiles**2;i++){
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.setAttribute("style",`width: ${tileDim}px; height: ${tileDim}px;`)

        tile.addEventListener('mouseenter',()=>{
        tile.classList.add("ligth-up");
    })
    canvas.appendChild(tile);
    }   
    
    
}


generateGrid(numTilesSide)


let controlPanel = document.createElement("div");
controlPanel.classList.add("control-panel");
controlPanel.setAttribute("style",`width: ${canvasWidth}px; height:100px`)
document.body.appendChild(controlPanel);

let sliderContainer = document.createElement("div");
sliderContainer.classList.add("slider-container");
controlPanel.appendChild(sliderContainer);

let sliderValue = document.createElement("p");
sliderValue.classList.add("slider-value");
sliderValue.textContent = `${numTilesSide}x${numTilesSide}`;
sliderContainer.appendChild(sliderValue)

let slider = document.createElement("input");
slider.classList.add("slider");
slider.setAttribute("type", "range");
slider.setAttribute("min", "1");
slider.setAttribute("max", "100");
slider.setAttribute("value", "16");
sliderContainer.appendChild(slider)

function deleteGrid(){
    let tiles = document.querySelectorAll(".tile");
    tiles.forEach((tl)=>{
        tl.remove()
    })
}

function updateGrid(){
    deleteGrid()
    generateGrid(slider.value)
    sliderValue.innerHTML = `${slider.value}x${slider.value}`;
    
}


slider.oninput = updateGrid


let clearButton = document.createElement("button");
clearButton.classList.add("clear-button");
clearButton.textContent = "Clear"
controlPanel.appendChild(clearButton)


clearButton.onclick = updateGrid


let rainbowButton = document.createElement("button");
rainbowButton.classList.add("rainbow-button");
rainbowButton.textContent = "Rainbow"
controlPanel.appendChild(rainbowButton)


