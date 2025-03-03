let input = document.getElementById('input')
let output = document.getElementById('word-output')
let outputValue = output.innerText

function countWords() {
    let inputValue = input.value
    let spaces = 0
    let words = 0
    for (let i = 0; i < inputValue.length; i++) {
        if (inputValue[i] === ' ') {
            spaces += 1
        }
    }
    if (inputValue) {
        words = spaces + 1
        output.textContent = outputValue
        output.textContent += words
    } else {
        output.textContent = outputValue
        output.textContent += " 0"
    }
}