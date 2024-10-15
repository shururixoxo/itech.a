console.log("Welcome to My Website");

document.querySelectorAll("nav a").forEach((link) => {
link.addEventListener("click", (event) => {
event.preventDefault();
console.log(`Clicked on ${link.textContent}`);
});
});

let slideIndex = 1;

function prevSlide() {
slideIndex -= 1;
showSlide(slideIndex);
}

function nextSlide() {
slideIndex += 1;
showSlide(slideIndex);
}

const questions = document.querySelectorAll('#questions .question');
const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);

document.getElementById('questions').innerHTML = '';
shuffledQuestions.forEach(question => {
  document.getElementById('questions').appendChild(question);
});

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

