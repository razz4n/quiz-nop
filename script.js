const questions = [
  {
    question: "Ibukota Indonesia adalah?",
    options: ["Bandung", "Surabaya", "Jakarta", "Medan"],
    answer: "Jakarta"
  },
  {
    question: "Hasil dari 5 x 5 adalah?",
    options: ["10", "20", "25", "30"],
    answer: "25"
  },
  {
    question: "Planet terbesar di tata surya?",
    options: ["Bumi", "Mars", "Jupiter", "Venus"],
    answer: "Jupiter"
  },
  {
    question: "Siapa penemu lampu pijar?",
    options: ["Newton", "Einstein", "Edison", "Tesla"],
    answer: "Edison"
  },
  {
    question: "Bahasa resmi Jepang adalah?",
    options: ["Mandarin", "Jepang", "Korea", "Thai"],
    answer: "Jepang"
  },
  {
    question: "Gunung tertinggi di dunia?",
    options: ["Everest", "Fuji", "Kilimanjaro", "Semeru"],
    answer: "Everest"
  },
  {
    question: "Simbol air dalam kimia adalah?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    answer: "H2O"
  },
  {
    question: "Binatang tercepat di darat?",
    options: ["Singa", "Kuda", "Cheetah", "Kangguru"],
    answer: "Cheetah"
  },
  {
    question: "Lagu kebangsaan Indonesia?",
    options: ["Indonesia Merdeka", "Indonesia Raya", "Tanah Airku", "Garuda Pancasila"],
    answer: "Indonesia Raya"
  },
  {
    question: "2 + 2 x 2 = ?",
    options: ["6", "8", "4", "10"],
    answer: "6"
  }
];

const startBtn = document.getElementById('start-btn');
const quizPage = document.getElementById('quiz-page');
const startPage = document.getElementById('start-page');
const resultPage = document.getElementById('result-page');
const questionsContainer = document.getElementById('questions-container');
const scoreDisplay = document.getElementById('score');

startBtn.addEventListener('click', () => {
  startPage.style.display = 'none';
  quizPage.style.display = 'block';
  showQuestions();
});

function showQuestions() {
  questions.forEach((q, index) => {
    const div = document.createElement('div');
    div.classList.add('question');

    const p = document.createElement('p');
    p.textContent = `${index + 1}. ${q.question}`;
    div.appendChild(p);

    q.options.forEach(opt => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${index}`;
      input.value = opt;
      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      div.appendChild(label);
      div.appendChild(document.createElement('br'));
    });

    questionsContainer.appendChild(div);
  });
}

document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let score = 0;

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name=q${index}]:checked`);
    if (selected && selected.value === q.answer) {
      score += 10;
    }
  });

  quizPage.style.display = 'none';
  resultPage.style.display = 'block';
  scoreDisplay.textContent = `${score}`;
});
