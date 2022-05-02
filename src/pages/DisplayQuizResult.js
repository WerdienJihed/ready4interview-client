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
  return (
    <Container className="mt-5">
      <Button variant="success" className="w-100 mb-5" onClick={handleTryAgain}>
        Try again
      </Button>
      {quizzes.length === 0 ? (
        <Alert variant="danger">No Result to display</Alert>
      ) : (
        quizzes.map((quiz) => <QuizResultBox key={quiz._id} quiz={quiz} />)
      )}
    </Container>
  );
};

export default DisplayQuizResult;
