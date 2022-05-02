import { useSelector, useDispatch } from "react-redux";
import { reset } from "../store/quizzesResultSlice";
import { useNavigate } from "react-router-dom";
import QuizResultBox from "../components/QuizResultBox";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const DisplayQuizResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate("/quiz");
    dispatch(reset());
  };

  const quizzes = useSelector((state) => state.quizzesResult.value);

  const numberOfCorrectAnswers = quizzes.reduce(
    (acc, curr) => (curr.userAnswer.correct ? acc + 1 : acc),
    0
  );

  const score = Math.round((numberOfCorrectAnswers / quizzes.length) * 100);

  return (
    <Container className="mt-5">
      <div className="text-center">
        <h2>
          Correct Answers : {numberOfCorrectAnswers}/{quizzes.length}
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
      {quizzes.length === 0 ? (
        <Alert variant="danger">No Result to display</Alert>
      ) : (
        quizzes.map((quiz, index) => (
          <QuizResultBox key={quiz._id} quiz={quiz} index={index} />
        ))
      )}
    </Container>
  );
};

export default DisplayQuizResult;
