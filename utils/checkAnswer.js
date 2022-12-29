import * as Quiz from "./getQuiz";
import { Game } from "./Game";

export const checkAnswer = async (questionNum) => {
  let options = document.querySelectorAll(".option");
  let correct = await Quiz.getCorrect(questionNum);
  let correctAnswers = parseInt(localStorage.getItem("correctAnswers"));

  options.forEach((option) => {
    option.addEventListener("click", () => {
      disableButtons();

      let nextQuestion = questionNum + 1;

      if (option.textContent == correct) {
        option.classList.add("correct");
        localStorage.setItem("correctAnswers", correctAnswers + 1);

        setTimeout(() => {
          Game(nextQuestion);
          checkAnswer(nextQuestion);
        }, 2000);
      } else {
        option.classList.add("incorrect");

        setTimeout(() => {
          Game(nextQuestion);
          checkAnswer(nextQuestion);
        }, 2000);
      }
    });
  });
};

const disableButtons = () => {
  let options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.classList.add("no-hover");
    option.setAttribute("disabled", true);
  });
};
