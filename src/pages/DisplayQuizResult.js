import { useState } from "react";
import QuizResultBox from "../components/QuizResultBox";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

const DisplayQuizResult = () => {
  // get quizzes from redux state
  const [quizzes, setQuizzes] = useState([]);
  return (
    <Container className="mt-5">
      {quizzes.length === 0 ? (
        <Alert variant="danger">No Result to display</Alert>
      ) : (
        quizzes.map((quiz) => <QuizResultBox key={quiz.id} quiz={quiz} />)
      )}
    </Container>
  );
};

export default DisplayQuizResult;
