// functions
function generateGrid(numTiles){
    // generates the grid for a given number of tiles on one side of the square
    let canvWidth = 650;
    let tileDim = canvWidth/numTiles;
    for (let i=0; i<numTiles**2;i++){
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.setAttribute("style",`width: ${tileDim}px; height: ${tileDim}px;`)
        tile.addEventListener('mouseenter',()=>{
            tile.classList.add("light-up");      
        }) 
    canvas.appendChild(tile);
    }       
}

function deleteGrid(){
    // removes all the tiles from the grid
    let tiles = document.querySelectorAll(".tile");
    tiles.forEach((tl)=>{
        tl.remove()
    })
}

function updateGrid(){
    // deletes the existing grid, to create a new one which has the correct amount of tiles
    // it then deactivates the rainbow button, to start from the default colour
    deleteGrid()
    generateGrid(slider.value)
    sliderValue.innerHTML = `${slider.value}x${slider.value}`;
    rainbowButton.classList.remove("activated")
    setColor(rainbow)   
}

function toggleRainbow(rainbow){
    // turn on and off the rainbow mode, adding the rainbow to the backgound of the button
    let tileDimen = canvasWidth/slider.value;
    let check = document.querySelector(".activated")
    if ( check == null ){
        rainbow = true;
        setColor(rainbow,tileDimen);
    } else {
        rainbow = false;
        setColor(rainbow,tileDimen);
    }  
    rainbowButton.classList.toggle("activated");   
}

function setColor(rainbow){
    // sets the colour depending on whether the rainbow mode is active or not
    let tileDimen = canvasWidth/slider.value;
    let tiles = document.querySelectorAll(".tile");
    tiles.forEach( tile => {
        if(rainbow==false){
            tile.addEventListener("mouseenter",() => {
                tile.classList.add("light-up");
                tile.setAttribute("style",`width: ${tileDimen}px; height: ${tileDimen}px; background-color: black; margin:0; padding:0;`); 
            } )
        } else {
            tile.addEventListener("mouseenter",() => {
                tile.classList.add("rainbow");
                let ranR = Math.random()*255;
                let ranG = Math.random()*255;
                let ranB = Math.random()*255;
                tile.setAttribute("style",`width: ${tileDimen}px; height: ${tileDimen}px; background-color: rgb(${ranR},${ranG},${ranB}); margin:0; padding:0;`);    
         })
        }
    }
    )
}


// variable initialization
let canvasWidth = 650;  // [px]
let canvasHeight = canvasWidth;
let numTilesSide = 16;
let tileDimension = canvasWidth/numTilesSide;
let rainbow = false


// html page creation
let title = document.createElement("div");
title.classList.add("title");
title.textContent = "Etch-a-Sketch";
document.body.appendChild(title);

let canvas = document.createElement("div");
canvas.classList.add("canvas");
document.body.appendChild(canvas);

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

let clearButton = document.createElement("button");
clearButton.classList.add("clear-button");
clearButton.textContent = "Clear"
controlPanel.appendChild(clearButton)

let rainbowButton = document.createElement("button");
rainbowButton.classList.add("rainbow-button");
rainbowButton.textContent = "Rainbow"
controlPanel.appendChild(rainbowButton)


// main
generateGrid(numTilesSide)
setColor(rainbow,tileDimension)
canvas.onmouseenter = setColor(rainbow)
clearButton.onclick = updateGrid
slider.oninput = updateGrid
rainbowButton.onclick = toggleRainbow