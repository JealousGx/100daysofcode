const questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

const showScores = document.querySelector("#leaderboard");
const highScoresContainer = document.querySelector(".scores");
const scoresContainer = document.querySelector(".info");
const questionElement = document.querySelector(".question");
const timerElement = document.querySelector(".seconds");
const optionsElement = document.querySelectorAll(".option");
const startQuizBtn = document.querySelector(".start-btn");
const startQuizContainer = document.querySelector(".quiz-start");
const quizFinishContainer = document.querySelector(".quiz-finish");
const questionaireContainer = document.querySelector(".questionaire");
const showAnswer = document.querySelector(".answer");
const userScore = document.querySelector(".score");
const username = document.querySelector("#user");
const goBackBtn = document.querySelector(".back");
const clearBtn = document.querySelector(".clear");

questionaireContainer.style.display = "none";
quizFinishContainer.style.display = "none";
startQuizContainer.style.display = "block";
highScoresContainer.style.display = "none";

let secs = 50;
let timer;

startQuizBtn.onclick = () => {
  startQuizContainer.style.display = "none";
  questionaireContainer.style.display = "block";
  timerElement.textContent = secs;
  timer = setInterval(() => {
    if (secs !== 0) {
      secs--;
      timerElement.textContent = secs;
    } else {
      timerElement.textContent = "00";
    }
  }, 1000);
  setTimeout(() => {
    if (questionaireContainer.style.display !== 'block' || startQuizContainer.style.display !== 'block' || highScoresContainer.style.display !== 'block') {

    }
    questionaireContainer.style.display = "none";
  quizFinishContainer.style.display = "block";
  startQuizContainer.style.display = "none";
  highScoresContainer.style.display = "none";
  }, 50000);
};

let currentAnswer,
  currentQuestion,
  j = 0;
function nextQuestion(j) {
  if (j < 5) {
    currentQuestion = questions[j];
    currentAnswer = currentQuestion.answer;
    questionElement.textContent = currentQuestion.questionText;
  } else if (j === 5) {
    questionaireContainer.style.display = "none";
    quizFinishContainer.style.display = "block";
    userScore.textContent = secs;
    clearInterval(timer);
  }

  for (let i = 0; i < 4; i++) {
    optionsElement[i].textContent = currentQuestion.options[i];
  }
}

nextQuestion(j);
for (let i = 0; i < 4; i++) {
  optionsElement[i].onclick = () => {
    if (optionsElement[i].textContent === currentAnswer) {
      showAnswer.textContent = "Correct!";
      showAnswer.style.padding = "0.35rem 0 0 0.75rem";
      showAnswer.style.borderTop = "1px solid rgba(0, 0, 0, 0.2)";
      setTimeout(() => {
        nextQuestion(++j);
        showAnswer.textContent = "";
        showAnswer.style.padding = "";
        showAnswer.style.borderTop = "";
      }, 500);
    } else {
      showAnswer.textContent = "Incorrect!";
      showAnswer.style.padding = "0.35rem 0 0 0.75rem";
      showAnswer.style.borderTop = "1px solid rgba(0, 0, 0, 0.2)";
      setTimeout(() => {
        nextQuestion(++j);
        showAnswer.textContent = "";
        showAnswer.style.padding = "";
        showAnswer.style.borderTop = "";
      }, 500);
    }
  };
}

let user;
function saveUser(value) {
  if (value) {
    user = value;
    if (secs === 50) {
      secs = 0;
    }
    localStorage.setItem(value, secs);
    username.textContent = "";
  }

  let userNames = Object.keys(localStorage);
  let userScores = [],
    j = 1;
  for (let i = 0; i < userNames.length; i++) {
    userScores.push(localStorage.getItem(userNames[i]));
    p = document.createElement("p");
    p.innerHTML = j + ". " + userNames[i] + " - " + userScores[i];
    scoresContainer.appendChild(p);
    ++j;
  }
  quizFinishContainer.style.display = "none";
  highScoresContainer.style.display = "block";
  secs = 50;
}

function submitUser() {
  if (secs === 50) {
    secs = 0;
  }
  localStorage.setItem(user, secs);

  let userNames = Object.keys(localStorage);
  let userScores = [],
    j = 1;
  for (let i = 0; i < userNames.length; i++) {
    userScores.push(localStorage.getItem(userNames[i]));
    p = document.createElement("p");
    p.innerHTML = j + ". " + userNames[i] + " - " + userScores[i];
    scoresContainer.appendChild(p);
    ++j;
  }

  quizFinishContainer.style.display = "none";
  highScoresContainer.style.display = "block";
  secs = 50;
}

// Program to fetch and display the scores from the local storage
let p;
showScores.onclick = () => {
  questionaireContainer.style.display = "none";
  quizFinishContainer.style.display = "none";
  startQuizContainer.style.display = "none";
  highScoresContainer.style.display = "block";
};

goBackBtn.onclick = () => {
  questionaireContainer.style.display = "none";
  quizFinishContainer.style.display = "none";
  startQuizContainer.style.display = "block";
  highScoresContainer.style.display = "none";
};

clearBtn.onclick = () => {
  if (localStorage.length) {
    localStorage.clear();
  }
  questionaireContainer.style.display = "none";
  quizFinishContainer.style.display = "none";
  startQuizContainer.style.display = "block";
  highScoresContainer.style.display = "none";
};
