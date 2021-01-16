function createGrid(x) {
    container.innerHTML = '';
    container.style['grid-template-rows'] = 'repeat('+x+', 1fr)';
    container.style['grid-template-columns'] = 'repeat('+x+', 1fr)';

    for (let i = 0; i < (x*x); i++) {
        let cell = document.createElement("div");
        cell.classList.add('cell')
        cell.removeAttribute('style');
        container.appendChild(cell)
        cell.addEventListener('mouseenter', paintCell);
    }
}

function paintCell(e) {
    e.target.style["background-color"] = "black";
}

function getSize() {
    let gridSize = document.querySelector('#grid-input').value;
    if (Number.isInteger(Number(gridSize))) {
        if (Number(gridSize) <= 100) {
            createGrid(gridSize);
        } else {
            alert('Please enter a number smaller or equal to 100')
        }   
    } else {
        alert('Please enter an integer')
    }
    
}

let container = document.querySelector('#container');

createGrid(16);

let generate = document.querySelector('#grid-submit')
generate.addEventListener('click', getSize);
