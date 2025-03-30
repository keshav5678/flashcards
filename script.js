// the elements in the html file
const flashcard = document.querySelector("#flashcard");
const questionInput = document.querySelector("#question-input");
const answerOutput = document.querySelector("#answer-output");
const addButton = document.querySelector("#add");
const clearAllButton = document.querySelector("#clearall");
const removeFlashcardButton = document.querySelector("#removethis");

// i and i2 to serve as a "count" for iterating flashcards
let i = 0;
let i2 = 0;

// for people with intel 4004 processors
if (typeof(Storage) === "undefined") {
    alert("sorry, your browser is not supported.");
}

// another piece of code I decided to add
if (localStorage.key(0)) {
    flashcard.innerHTML = localStorage.key(0);
} else {
    localStorage.setItem("Write the heron's formula.", "sqrt(s(s-a)(s-b)(s-c))");
}

// add a flashcard when user clicks 'add'
addButton.addEventListener("click", (e) => {
    localStorage.setItem(questionInput.value, answerOutput.value);
    console.log(localStorage.length);
});

// iterate over flashcards when user clicks on the flashcard div
flashcard.addEventListener("click", (e) => {
    if (i2 == 1) {
        i2 = 0;
        i += 1;
        if (i === localStorage.length) {
            i = 0;
        }
        let name = localStorage.key(i);
        flashcard.setAttribute("data-typelol", "question");
        flashcard.innerHTML = name;
    } else {
        i2 = 1;
        let name = localStorage.key(i);
        let v = localStorage.getItem(name);
        flashcard.setAttribute("data-typelol", "answer");
        flashcard.innerHTML = v;
    }

});

clearAllButton.addEventListener("click", (e) => {
    localStorage.clear();
});

removeFlashcardButton.addEventListener("click", (e) => {
    localStorage.removeItem(localStorage.key(i));
})