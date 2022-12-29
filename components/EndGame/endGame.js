import { main } from "../../main";
import "./endGame.css";

export const endGame = (user) => {
  let title = document.querySelector("#title");
  let questionDiv = document.querySelector("#question");
  let answers = document.querySelector("#answers");

  let correctAnswers = localStorage.getItem("correctAnswers");

  title.innerHTML = `<h1>You finish! ${user}</h1>`;

  questionDiv.innerHTML = `
  <div class="question">
  <p>you guessed ${correctAnswers} of 20 questions</p>
  </div>
  `;

  if (correctAnswers >= 10) {
    answers.innerHTML = `<div class="final-msg">
  <h2 class="passed">You passed</h2>
    <button class="retry">Retry</button>
  </div>
`;
  } else {
    answers.innerHTML = `<div class="final-msg">
  <h2 class="suspended">You suspended</h2>
    <button class="retry">Retry</button>
  </div>
`;
  }

  const btnRetry = document.querySelector(".retry");
  btnRetry.addEventListener("click", () => {
    main();
  });
};
