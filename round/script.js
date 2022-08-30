const input = document.querySelector('input')

function calculate() {
    const perimeter = 2 * Math.PI * Number(input.value)
    const square = Math.PI * Number(input.value) * Number(input.value)
    document.querySelectorAll('p')[0].textContent = perimeter
    document.querySelectorAll('p')[1].textContent = square
}