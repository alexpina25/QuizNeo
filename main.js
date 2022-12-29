import "./style.css";

import { Title } from "./components/Title/Title";
import { WelcomeText } from "./components/WelcomeText/WelcomeText";
import { Start } from "./components/StartBtn/StartBtn";

import { Game } from "./utils/Game";

const title = document.querySelector("#title");
const questionDiv = document.querySelector("#question");
const answers = document.querySelector("#answers");

export const main = () => {
  title.innerHTML = Title("Alex");
  questionDiv.innerHTML = Start();
  answers.innerHTML = WelcomeText();
  localStorage.setItem("correctAnswers", 0);

  const startBtn = document.querySelector(".start-btn");

  startBtn.addEventListener("click", () => {
    Game(1);
  });
};

main();
