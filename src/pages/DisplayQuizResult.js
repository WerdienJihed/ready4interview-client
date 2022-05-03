import { useSelector, useDispatch } from "react-redux";
import { reset } from "../store/quizzesResultSlice";
import { useNavigate } from "react-router-dom";
import QuizResultBox from "../components/QuizResultBox";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const DisplayQuizResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quizzes = useSelector((state) => state.quizzes.value);
  const userAnswers = useSelector((state) => state.quizzesResult.value);

  const handleTryAgain = () => {
    navigate("/quiz");
    dispatch(reset());
  };

  const getRelatedUserAnswer = (quizId) => {
    return userAnswers.find((answer) => answer.quizId === quizId);
  };

  const correctAnswersCount = userAnswers.reduce(
    (acc, curr) => (curr.userAnswer.correct ? acc + 1 : acc),
    0
  );

  const score = Math.round((correctAnswersCount / quizzes.length) * 100);

  return (
    <Container className="mt-5">
      <div className="text-center">
        <h2>
          Correct Answers : {correctAnswersCount}/{quizzes.length}
        </h2>
        <h2>Your score : {score}%</h2>
        <Button
          variant="outline-success"
          size="lg"
          className="my-3"
          onClick={handleTryAgain}
        >
          Try again
        </Button>
      </div>
      <hr />
      <h1 className="text-center mb-5">Your Answers </h1>
      {quizzes.map((quiz, index) => (
        <QuizResultBox
          key={quiz._id}
          index={index}
          quiz={quiz}
          answer={getRelatedUserAnswer(quiz._id)}
        />
      ))}
    </Container>
  );
};

export default DisplayQuizResult;
