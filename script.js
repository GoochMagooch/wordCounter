let input = document.getElementById('input')
let output = document.getElementById('word-output')

function countWords() {
    let inputValue = input.value
    let spaces = 0
    let words = 0
    for (let i = 0; i < inputValue.length; i++) {
        if (inputValue[i] === ' ') {
            spaces += 1
        }
    }
    words = spaces + 1
    output.textContent += words
}