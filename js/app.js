const container = document.querySelector('.container');
let currentPaint = 'classic';
let currentSize = 16;
const colors = ['#00C0FF', '#EE82EE', '#FF4500', '#00FF00', '#FF00FF', '#FF0000', '#FFFF00', '#FFCF00', '#FC4F4F'];



function setUpGrid() {
    

    for( let i = 0; i < currentSize; i++) {
        
        const row = document.createElement('div');
        row.classList.add('row');

        for( let j = 0; j < currentSize; j++) {
        const div = document.createElement('div');
        div.classList.add('square');
        setHeightWidth(div);
        div.addEventListener('mouseover', hoveredSquare);
        row.appendChild(div);
        }

        container.appendChild(row);
    }

}


function removeGrid(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.remove());
}


function hoveredSquare() {

    this.classList.remove(...this.classList);
    this.classList.add('square');

    if(currentPaint === 'classic') {
        this.style.backgroundColor = 'black';
    } else if (currentPaint === 'rubber') {
        this.style.backgroundColor = 'white';
    } else if (currentPaint === 'rainbow') {
        this.style.backgroundColor = `${colors[Math.floor(Math.random() * colors.length)]}`;
    }
    
}


function changeSize(){
    
    let newSize = prompt('New Size:');

    if(!isNaN(newSize)) {
        if(newSize > 100) newSize = 100;
        
        currentSize = newSize;
    } else {
        currentSize = 0;
    }

    reset();
}

function reset() {
    removeGrid();
    setUpGrid(currentSize);
}

function setHeightWidth(div) {

    //heigth and width should always be 500px
    let size = 500 / currentSize; 
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
}


setUpGrid(currentSize);
const buttons = document.querySelectorAll('.button');
buttons.forEach(btn => btn.addEventListener('click', function(){currentPaint = this.classList[0];}));

const btnChangeSize = document.querySelector('.size');
btnChangeSize.addEventListener('click', changeSize);
const btnReset = document.querySelector('.reset');
btnReset.addEventListener('click', reset);
