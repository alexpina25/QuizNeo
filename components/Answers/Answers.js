import "./Answers.css";

export const Answers = (array) => {

  
  const ul = document.createElement("ul");
  ul.id = "answers-list";
  for (const answer of array) {
    let li = document.createElement("li");
    li.innerHTML = `<button class="option" id="${array.indexOf(
      answer
    )}">${answer}</button>`;
    ul.appendChild(li);
  }
  return ul;
};
