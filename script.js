let question = document.getElementById("question");
let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let label3 = document.getElementById("label3");
let label4 = document.getElementById("label4");
let scoreBox = document.getElementById("score");
let next = document.getElementById("next");
let submit = document.getElementById("submit")

let currentQuestion = 0;
let userScore = 0;

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Transfer Markup Language",
      "High Text Machine Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style System",
      "Creative Style Sheet",
      "Colorful Style Syntax"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which language is used for web logic?",
    options: ["HTML", "CSS", "JavaScript", "Photoshop"],
    answer: "JavaScript"
  },
  {
    question: "Which tag is for heading?",
    options: ["<p>", "<h1>", "<div>", "<span>"],
    answer: "<h1>"
  },
  {
    question: "Which is backend runtime?",
    options: ["React", "Node.js", "CSS", "HTML"],
    answer: "Node.js"
  },
  {
    question: "Which is database?",
    options: ["MongoDB", "HTML", "CSS", "JS"],
    answer: "MongoDB"
  },
  {
    question: "Which is NOT programming language?",
    options: ["Python", "JavaScript", "HTML", "C++"],
    answer: "HTML"
  },
  {
    question: "Which keyword declares variable?",
    options: ["var", "div", "style", "class"],
    answer: "var"
  },
  {
    question: "DOM stands for?",
    options: [
      "Document Object Model",
      "Data Object Map",
      "Digital Output Mode",
      "None"
    ],
    answer: "Document Object Model"
  },
  {
    question: "Which is frontend framework?",
    options: ["React", "MongoDB", "Node.js", "Express only"],
    answer: "React"
  }
];

function loadQuestion() {
  const q = questions[currentQuestion];

  question.innerText = q.question;

  label1.innerText = q.options[0];
  label2.innerText = q.options[1];
  label3.innerText = q.options[2];
  label4.innerText = q.options[3];

  // reset selection
  document.querySelectorAll('input[name="option"]').forEach(r => {
    r.checked = false;
  });
}

next.addEventListener("click", () => {

  let selected = document.querySelector('input[name="option"]:checked');

  if (!selected) {
    alert("Select an option");
    return;
  }

  let answerText = selected.nextElementSibling.innerText;

  if (answerText === questions[currentQuestion].answer) {
    userScore++;
  }

  currentQuestion++;

if (currentQuestion < questions.length) {
    loadQuestion();

    // Last question par button text change
    if (currentQuestion === questions.length - 1) {
        next.innerText = "Submit Quiz";
    }

} else {

    document.querySelector(".quiz").innerHTML = `
        <h1 style="font-size:60px; text-align:center;">
            🎉 Quiz Finished
        </h1>

        <h2 style="
            text-align:center;
            font-size:45px;
            color:#22c55e;
            margin-top:20px;
        ">
            Score: ${userScore}/${questions.length}
        </h2>
    `;
}

});

loadQuestion();

