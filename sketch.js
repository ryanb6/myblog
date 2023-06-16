let squareNum = 8;
let sketchpadContainer = document.querySelector('#sketchpad-wrapper')
let boxInput = document.querySelector('#box-num')
let boxNum = document.querySelector('.number')
let colorTypeBtn = document.querySelector('#color-type-btn')
let colorTypeText = document.querySelector('.color-type')
let colorType = 'black'
let gridSize = sketchpadContainer.clientWidth

colorTypeBtn.addEventListener('click', () => {
    if(colorType === 'black'){
        colorType = 'random'
        colorTypeText.textContent = 'Random'
    }else if(colorType === 'random'){
        colorType = 'black'
        colorTypeText.textContent = 'Black'
    }


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

function random_rgb() {
    let r =  Math.floor(Math.random() * 256)
    let g =  Math.floor(Math.random() * 256)
    let b =  Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

function createDiv(size){
    let div = document.createElement('div')
    div.classList.add('box')
    div.setAttribute('style',`width: ${size}; height: ${size}`)
    div.addEventListener('mouseover', () => {
        if(colorType === 'black'){
            div.classList.add('hovered');
        }else if(colorType === 'random'){
            div.style.backgroundColor = random_rgb();
        }
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