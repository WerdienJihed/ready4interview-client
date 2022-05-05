import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import QuizBox from "../components/QuizBox";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
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

  const handleCountdownCompleted = () => {
    navigate("/result");
  };

  return (
    <div>
      <div className="d-md-flex my-4">
        <Col>
          <Alert variant="light">
            <h5>Difficulty</h5> <p>{difficulty} </p>
            <hr />
            <h5>Topic</h5> <p>{topic}</p>
          </Alert>
        </Col>
        <Col>
          <div className="w-100 d-flex justify-content-center mb-4">
            <CountdownCircleTimer
              isPlaying
              duration={600}
              colors="#ffc107"
              onComplete={handleCountdownCompleted}
              size={240}
            >
              {({ remainingTime }) => {
                const minutes = Math.floor(remainingTime / 60);
                const seconds = remainingTime % 60;
                return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
              }}
            </CountdownCircleTimer>
          </div>
        </Col>
        <Col>
          <Alert variant="light" className="text-center">
            <h1>
              {currentIndex + 1} /{quizzes.length}
            </h1>
          </Alert>
        </Col>
      </div>
      {quiz && <QuizBox quiz={quiz} handleChangeQuiz={handleChangeQuiz} />}
    </div>
  );
};

export default QuizzesWrapper;
