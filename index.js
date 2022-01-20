const valueBefore = document.getElementById("value-before")
const valueAfter = document.getElementById("value-after")
const btnNumbers = document.querySelectorAll(".number")
const btnOperator = document.querySelectorAll(".operator")
const deleteButton = document.getElementById("deleteButton")
const btnDeleteAll = document.getElementById("btnDeleteAll")

const display = new Display(valueBefore, valueAfter)
btnNumbers.forEach(button =>{
    button.addEventListener('click', () => display.addNumber(button.innerHTML))
})
   
deleteButton.addEventListener('click', () =>{
    display.deteleValue()
})

btnDeleteAll.addEventListener("click", () =>{
    display.deteleAll()
})
btnOperator.forEach(button =>{
    button.addEventListener("click", () => display.comput(button.value))
})