export const getData = async (questionNum) => {
  const data = await fetch(`http://localhost:3000/quiz/${questionNum}`);
  const dataJSON = data.json();
  return dataJSON;
};

export const getQuestion = async (questionNum) => {
  const data = await getData(questionNum);
  const question = await data.question;

  return question;
};

export const getCorrect = async (questionNum) => {
  const data = await getData(questionNum);
  const correctAnswer = data.correctAnswer;

  return correctAnswer;
};

export const getAnswers = async (questionNum) => {
  const data = await getData(questionNum);
  const answers = data.incorrectAnswers;

  answers.push(await getCorrect(questionNum));

  answers.sort(() => Math.random() - 0.5);

  return answers;
};

export const getCategory = async (questionNum) => {
  const data = await getData(questionNum);
  const category = data.category;

  return category;
};
