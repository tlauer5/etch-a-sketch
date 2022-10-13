const container = document.querySelector('.container');
let currentPaint = 'classic';
const colors = ['#00C0FF', '#EE82EE', '#FF4500', '#00FF00', '#FF00FF', '#FF0000', '#FFFF00', '#FFCF00', '#FC4F4F'];



function setUpGrid() {
    

    for( let i = 0; i < 16; i++) {
        
        const row = document.createElement('div');
        row.classList.add('row');

        for( let i = 0; i < 16; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', hoveredSquare);
        row.appendChild(div);
        }

        container.appendChild(row);
    }

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


setUpGrid();
const buttons = document.querySelectorAll('.button');
buttons.forEach(btn => btn.addEventListener('click', function(){currentPaint = this.classList[0];}));

