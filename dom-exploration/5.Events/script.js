const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

// create new div
const displayWrapper = document.createElement("div")
displayWrapper.classList.add("displayedsquare")

const colorDisplay = document.createElement("div")
colorDisplay.id = "color-display"
colorDisplay.textContent = "click a color"
displayWrapper.appendChild(colorDisplay)

const createSquareButton = document.createElement("button")
createSquareButton.id = "create-square-button"
createSquareButton.textContent = "Create Square"
displayWrapper.appendChild(createSquareButton)

document.body.appendChild(displayWrapper)

createSquareButton.addEventListener("click", function(){
    const backgroundColor = colorDisplay.style.backgroundColor
    const newSquare = document.createElement("div")
    newSquare.classList.add("displayedsquare")
    newSquare.style.backgroundColor = backgroundColor
    displayWrapper.appendChild(newSquare)
})