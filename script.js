let color = 'black';
function colorSquare(grids)
{
    if(color == 'random')
    {
        grids.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else
    grids.style.backgroundColor = color;
}

function gridWasPicked(gridNumber)
{
    if(gridNumber == 8)
    {
    paintBoard = document.querySelector('.paintBoard');
    for(let index = 0; index < gridNumber * gridNumber; index++)
    {
        paintBoard.innerHTML += "<div class='singleGrid'></div>"
    }
    const singleGrid = document.querySelectorAll('.singleGrid');
    singleGrid.forEach(singleGrid => gridReSizer8(singleGrid));
    grids = document.querySelectorAll('.singleGrid');
    for(let index = 0; index < gridNumber * gridNumber; index++)
    {
        grids[index].addEventListener(
            'mouseover', function(){
                if(isClick)
                colorSquare(grids[index]);
            }
        );
    }
   }
   if(gridNumber == 16)
   {
    paintBoard = document.querySelector('.paintBoard');
    for(let index = 0; index < gridNumber * gridNumber; index++)
    {
        paintBoard.innerHTML += "<div class='singleGrid'></div>"
    }
    const singleGrid = document.querySelectorAll('.singleGrid');
    singleGrid.forEach(singleGrid => gridReSizer16(singleGrid));
    grids = document.querySelectorAll('.singleGrid');
    for(let index = 0; index < gridNumber * gridNumber; index++)
    {
        grids[index].addEventListener(
            'mouseover', function(){
                if(isClick)
                colorSquare(grids[index]);
            }
        );
    }
   }
   if(gridNumber == 32)
   {
    paintBoard = document.querySelector('.paintBoard');
    for(let index = 0; index < gridNumber * gridNumber; index++)
    {
        paintBoard.innerHTML += "<div class='singleGrid'></div>"
    }
    const singleGrid = document.querySelectorAll('.singleGrid');
    singleGrid.forEach(singleGrid => gridReSizer32(singleGrid));
    grids = document.querySelectorAll('.singleGrid');
    for(let index = 0; index < gridNumber * gridNumber; index++)
    {
        grids[index].addEventListener(
            'mouseover', function(){
                if(isClick)
                colorSquare(grids[index]);
            }
        );
    }
   }
   if(gridNumber == 64)
   {
    paintBoard = document.querySelector('.paintBoard');
    for(let index = 0; index < gridNumber * gridNumber; index++)
    {
        paintBoard.innerHTML += "<div class='singleGrid'></div>"
    }
    const singleGrid = document.querySelectorAll('.singleGrid');
    singleGrid.forEach(singleGrid => gridReSizer64(singleGrid));
    grids = document.querySelectorAll('.singleGrid');
    for(let index = 0; index < gridNumber * gridNumber; index++)
    {
        grids[index].addEventListener(
            'mouseover', function(){
                if(isClick)
                colorSquare(grids[index]);
            }
        );
    }
   }
}

function gridReSizer8(singleGrid)
{
    singleGrid.style.width = "64px";
    singleGrid.style.height = "64px";
}

function gridReSizer16(singleGrid)
{
    singleGrid.style.width = "32px";
    singleGrid.style.height = "32px";
}

function gridReSizer32(singleGrid)
{
    singleGrid.style.width = "16px";
    singleGrid.style.height = "16px";
}

function gridReSizer64(singleGrid)
{
    singleGrid.style.width = "8px";
    singleGrid.style.height = "8px";
}

function clearBoard()
{
    const singleGrid = document.querySelectorAll('.singleGrid');
    singleGrid.forEach(singleGrid => { singleGrid.remove() }
    );
    if(color == 'white')
    color = 'black';
}

function sizeGrid(string)
{
    clearBoard();
    if(string == "grid8")
    {
        gridWasPicked(8);
        currentGrid = 8;
    }
    if(string == "grid16")
    {
        gridWasPicked(16);
        currentGrid = 16;
    }
    if(string == "grid32")
    {
        gridWasPicked(32);
        currentGrid = 32;
    }
}

function changeColor(newColor)
{
    switch (newColor) {
        case "pink":
            color = "#F5ABB9";
            break;
        case "blue":
            color = "#56C4ED";
            break;
        case "red":
            color = "#F20000";
            break;
        default:
            color = newColor;
            break;
    }
}

function colorRandom()
{
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const isHover = document.querySelectorAll('.isHover');
    isHover.style.backgroundColor = '#'+randomColor;
    console.log("#" +randomColor);
}

const reset = document.querySelector('.reset');
reset.addEventListener('click', function() { clearBoard(); gridWasPicked(currentGrid);
});

let currentGrid =16;
let isClick;
let paintBoard = document.querySelector('.paintBoard');
for(let index = 0; index < 256; index++)
{
    paintBoard.innerHTML += "<div class='singleGrid'></div>"
}
let grids = document.querySelectorAll('.singleGrid');
for(let index = 0; index < 256; index++)
{
    grids[index].addEventListener(
        'mouseover', function(){ 
            if(isClick)
            {
                colorSquare(grids[index]);
            }
        }
    );
}

document.querySelector('body').addEventListener('click', () => {isClick = !isClick;});
const gridSelections = document.querySelectorAll('.gridSelections');
gridSelections.forEach(gridSelections => {gridSelections.addEventListener('click', function() {
    sizeGrid(gridSelections.getAttribute('id'));
})
});
