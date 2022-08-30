const inputs = document.querySelectorAll('input')

function calculate() {
    const result = Math.sqrt(Math.pow((inputs[1].value - inputs[0].value), 2) + Math.pow((inputs[3].value - inputs[2].value), 2))
    document.querySelector('p').textContent = result
}