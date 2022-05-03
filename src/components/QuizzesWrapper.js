import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import QuizBox from "../components/QuizBox";
import Alert from "react-bootstrap/Alert";

const QuizzesWrapper = ({ quizzes, difficulty, topic }) => {
  const [quiz, setQuiz] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setQuiz(quizzes[currentIndex]);
  }, [quizzes, currentIndex]);

  const handleChangeQuiz = () => {
    if (currentIndex === quizzes.length - 1) {
      navigate("/result");
    } else {
      setCurrentIndex(currentIndex + 1);
      setQuiz(quizzes[currentIndex]);
    }
  };

  return (
    <div>
      <div className="d-flex my-5">
        <Alert className="w-25">
          <h6>Difficulty</h6> <p>{difficulty} </p>
          <hr />
          <h6>Topic</h6> <p>{topic}</p>
        </Alert>
        <div className="w-100 d-flex justify-content-center mb-4">
          <CountdownCircleTimer isPlaying duration={1200} colors="#F7B801">
            {({ remainingTime }) => {
              const minutes = Math.floor(remainingTime / 60);
              const seconds = remainingTime % 60;
              return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
            }}
          </CountdownCircleTimer>
        </div>
        <Alert
          variant="success"
          className="w-25 d-flex align-items-center justify-content-center"
        >
          <h1>
            {currentIndex + 1} /{quizzes.length}
          </h1>
        </Alert>
      </div>
      {quiz && <QuizBox quiz={quiz} handleChangeQuiz={handleChangeQuiz} />}
    </div>
  );
};

export default QuizzesWrapper;
