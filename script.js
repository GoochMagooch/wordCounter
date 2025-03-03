const myInput = document.getElementById('input')
const output = document.getElementById('word-output')
const charOutput = document.getElementById('character')

myInput.addEventListener('input', function() {
    let charCount = myInput.value.replace(/\s/g, '').length
    charOutput.textContent = `Characters: ${charCount}`
})

myInput.addEventListener('input', function() {
    let inputValue = myInput.value.trim()
    let words = inputValue.length > 0 ? inputValue.split(/\s+/).length : 0 // Split by spaces and count words
    output.textContent = `Words: ${words}`
})

// "this sentence has ten words in it and 43 characters!" will output:
// Words: 10
// Characters: 43