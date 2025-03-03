const userInput = document.getElementById('user-input')
const wordOutput = document.getElementById('word-output')
const charOutput = document.getElementById('char-output')

userInput.addEventListener('input', function() {
    let charCount = userInput.value.replace(/\s/g, '').length
    charOutput.textContent = `Characters: ${charCount}`
})

userInput.addEventListener('input', function() {
    let inputValue = userInput.value.trim()
    let words = inputValue.length > 0 ? inputValue.split(/\s+/).length : 0 // Split by spaces and count words
    wordOutput.textContent = `Words: ${words}`
})

// "this sentence has ten words in it and 43 characters!" will output:
// Words: 10
// Characters: 43