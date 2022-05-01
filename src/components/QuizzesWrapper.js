import { useState } from "react";
import QuizBox from "../components/QuizBox";

const QuizzesWrapper = ({ quizzes }) => {
  const [quiz, setQuiz] = useState(quizzes[0]);
  const [current, setCurrent] = useState(0);

  const handleChangeQuiz = (quiz, answer) => {
    console.log({ quiz, answer });
    setCurrent(current + 1);
    setQuiz(quizzes[current]);
  };
  return <QuizBox quiz={quiz} handleChangeQuiz={handleChangeQuiz} />;
};

export default QuizzesWrapper;
