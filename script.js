const myInput = document.getElementById('input')
const output = document.getElementById('word-output')
const outputValue = output.innerText
const charOutput = document.getElementById('character')
let charValue = charOutput.innerText

myInput.addEventListener('input', function() {
    let charCount = myInput.value.replace(/\s/g, '').length
    charOutput.textContent = `Characters: ${charCount}`
})

function countWords() {
    let inputValue = myInput.value.trim()
    let words = inputValue.length > 0 ? inputValue.split(/\s+/).length : 0 // Split by spaces and count words
    output.textContent = `Words: ${words}`
}