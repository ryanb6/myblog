let squareNum = 8;
let sketchpadContainer = document.querySelector('#sketchpad-wrapper')
let boxInput = document.querySelector('#box-num')
let boxNum = document.querySelector('.number')
let newGridBtn = document.querySelector('#new-grid-btn')
let gridSize = sketchpadContainer.clientWidth

newGridBtn.addEventListener('click', () => {
    while(sketchpadContainer.firstChild){
        sketchpadContainer.removeChild(sketchpadContainer.lastChild)
    }
    createSketchpad(squareNum)

})

boxInput.addEventListener('input', () => {
    boxNum.textContent=boxInput.value;
    squareNum = boxInput.value;
    while(sketchpadContainer.firstChild){
        sketchpadContainer.removeChild(sketchpadContainer.lastChild)
    }
    createSketchpad(squareNum)
})

console.log(sketchpadContainer.clientWidth)
//let boxWidth = sketchpadContainer.width / squareNum  


console.log(gridSize / squareNum)


function createDiv(size){
    let div = document.createElement('div')
    div.classList.add('box')
    div.setAttribute('style',`width: ${size}; height: ${size}`)
    div.addEventListener('mouseover', () => {
        div.classList.add('hovered');
    })
    return div
}



function createSketchpad(num) {
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            sketchpadContainer.appendChild(createDiv( gridSize / squareNum))
        }
    }
}

createSketchpad(squareNum)