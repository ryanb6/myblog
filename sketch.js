let squareNum = 8;
let sketchpadContainer = document.querySelector('#sketchpad-wrapper')
let boxInput = document.querySelector('#box-num')
let boxNum = document.querySelector('.number')
boxInput.addEventListener('input', () => {

})
console.log(sketchpadContainer.clientWidth)
//let boxWidth = sketchpadContainer.width / squareNum  
let gridSize = sketchpadContainer.clientWidth

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