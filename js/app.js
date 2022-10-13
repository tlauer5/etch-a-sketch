const container = document.querySelector('.container');

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


function hoveredSquare(){
    this.classList.add('hovered');
}

setUpGrid();


const classic = document.querySelector('.classic');
classic.addEventListener('clicked', classicClicked);


const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('clicked', rainbowClicked);


const rubber = document.querySelector('.classic');
rubber.addEventListener('clicked', rubberClicked);