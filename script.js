let textInput = document.getElementById('text-input');
let btn = document.getElementById('count-button');
let displayCount = document.getElementById('word-count');

function wordCounter() {
    // Capture input text
    let words = textInput.value;

    // Replacing all extra space with single space & trim from both side
    let trimWords = words.replace(/\s+/g, ' ').trim();

    // Split words (array)
    let splitWords = trimWords.split(' ');

    // Total words length
    let totalWords = splitWords.length;

    // Displaying output
    displayCount.innerHTML = ` ${totalWords}`;
}

btn.addEventListener('click', wordCounter);