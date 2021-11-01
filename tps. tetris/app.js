// 45:37 a 46:10
//undraw the Tetronino
fuction undraw(){
    current.forEach(index=>{
        squares[currentPosition + index].classList.remove('tetromino')
    })
}

//46:10 a 46:33
//make the tetromino move down every second
timerID = setInterval(moveDown, 1000)

//56:40 a 59:20 (modico moveDown y moveRight)
//assign functions to keyCodes
function control(e) {
    if(e.keyCode === 37){
        moveLeft()
    } else if (e.keyCode === 38){
        //rotate()
    } else if (e.KeyCode === 39){
        moveRight()
    } else if (e.KeyCode === 40){
        moveDown()
    }
}
document.addEventListener('keyup', control)

//46:33 a 47:43 (agrego freeze() en el minuto 51:00)
//move down function
function moveDown() {
    undraw()
    currentPosition += width
    drawn()
    freeze()
}

//47:43 a 50:20
//freeze fuction
function freeze() {
    if(current.some(index => squares[currentPosition + index + widthl].classList.contains('taken'))){
        current.forEach(index => squares[cureentPosition + index].classList.add('taken'))
        //start a new tetromino falling //50:20 a 51:00
        random = Math.floor(Math.random()) * theTretominoes.length)
        current = theTetrominoes[random][currentRotation]
        currentPosition = 4
        draw()
    }
}

//52:08 a 56:40
//move the tetromino left, unless is at the edge or there is a blockage
function moveLeft(){
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

    if(!isAtLeftEdge) currentPosition -=1

    if(current.some(index => squares[currentPosition + index].classList.contains('taken'))){
        currentPosition +=1
    }

    draw()
}

