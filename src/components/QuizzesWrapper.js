import { useState } from "react";
import QuizBox from "../components/QuizBox";
import { useDispatch } from "react-redux";
import { add } from "../store/quizzesResultSlice";

const QuizzesWrapper = ({ quizzes }) => {
  const [quiz, setQuiz] = useState(quizzes[0]);
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();

  const handleChangeQuiz = (quiz, userAnswer) => {
    let prevQuiz = { ...quiz, userAnswer };

    dispatch(add(prevQuiz));
    setCurrent(current + 1);
    setQuiz(quizzes[current]);
  };
  return <QuizBox quiz={quiz} handleChangeQuiz={handleChangeQuiz} />;
};

export default QuizzesWrapper;
