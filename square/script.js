const inputs = document.querySelectorAll('input')

function calculate() {
    const halfPerimeter = (Number(inputs[0].value) + Number(inputs[1].value) + Number(inputs[2].value) + Number(inputs[3].value)) / 2
    const square =  Math.sqrt((halfPerimeter - Number(inputs[0].value)) * (halfPerimeter - Number(inputs[1].value)) * (halfPerimeter - Number(inputs[2].value)) * (halfPerimeter - Number(inputs[3].value)))
    document.querySelectorAll('p')[0].textContent = halfPerimeter * 2
    document.querySelectorAll('p')[1].textContent = square
}