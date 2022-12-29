import { Answers } from "../components/Answers/Answers";
import { Question } from "../components/Question/Question";
import * as Title from "../components/Title/Title";
import { endGame } from "../components/EndGame/endGame";

import * as Quiz from "./getQuiz";
import { checkAnswer } from "./checkAnswer";

export const Game = async (questionNum) => {
  let title = document.querySelector("#title");
  let questionDiv = document.querySelector("#question");
  let answers = document.querySelector("#answers");

  if (questionNum > 20) {
    endGame("Alex");
  } else {
    title.innerHTML = Title.TitleQuestion(questionNum);
    questionDiv.innerHTML = Question(
      await Quiz.getCategory(questionNum),
      await Quiz.getQuestion(questionNum)
    );

    answers.innerHTML = "";
    answers.appendChild(Answers(await Quiz.getAnswers(questionNum)));
  }
  checkAnswer(questionNum);
};
