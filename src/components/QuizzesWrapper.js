import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../store/quizzesResultSlice";
import QuizBox from "../components/QuizBox";
import Alert from "react-bootstrap/Alert";

const QuizzesWrapper = ({ quizzes, difficulty, topic }) => {
  const [quiz, setQuiz] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (quizzes.length > 0) {
      setQuiz(quizzes[0]);
      setCurrentIndex(currentIndex + 1);
    }
  }, [quizzes]);

  const handleChangeQuiz = (quiz, userAnswer) => {
    setCurrentIndex(currentIndex + 1);

    if (currentIndex < quizzes.length) {
      let prevQuiz = { ...quiz, userAnswer };
      dispatch(add(prevQuiz));
      setQuiz(quizzes[currentIndex]);
    } else {
      navigate("/result");
    }
  };
  return (
    <div>
      <Alert variant="success">
        <Alert.Heading className="text-center">Information</Alert.Heading>
        <hr />
        <h6>Difficulty: {difficulty}</h6>
        <hr />
        <h6>Topic: {topic}</h6>
        <hr />
        <h6>
          Question number: {currentIndex} /{quizzes.length}
        </h6>
      </Alert>
      {quiz && <QuizBox quiz={quiz} handleChangeQuiz={handleChangeQuiz} />}
    </div>
  );
};

export default QuizzesWrapper;
