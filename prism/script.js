const inputs = document.querySelectorAll('input')

function calculate() {
    const p1 = (Number(inputs[0].value) + Number(inputs[1].value)) * 2
    const perimeter = p1 * 2 + Number(inputs[2].value) * 4
    const square = 2 * (Number(inputs[0].value) * Number(inputs[1].value) + Number(inputs[1].value) * Number(inputs[2].value) + Number(inputs[2].value) * Number(inputs[0].value))
    document.querySelectorAll('p')[0].textContent = perimeter
    document.querySelectorAll('p')[1].textContent = square
}