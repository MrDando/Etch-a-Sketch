function createGrid(x) {
    container.style['grid-template-rows'] = 'repeat('+x+', 1fr)';
    container.style['grid-template-columns'] = 'repeat('+x+', 1fr)';

    for (let i = 0; i < (x*x); i++) {
        let cell = document.createElement("div");
        cell.classList.add('cell')
        container.appendChild(cell)
        cell.addEventListener('mouseenter', paintCell);
    }
}

function paintCell(e) {
    e.target.style["background-color"] = "black";
}

let container = document.querySelector('#container');

createGrid(16);