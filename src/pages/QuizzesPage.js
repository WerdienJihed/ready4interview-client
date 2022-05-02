import { useEffect, useState } from "react";
import QuizzesWrapper from "../components/QuizzesWrapper";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const difficulty = "easy";
  const topic = "javascript";

  return (
    <Container className="mt-4">
      <Alert variant="success">
        <Alert.Heading className="text-center">Quiz Page</Alert.Heading>
        <hr />
        <h6>Difficulty: {difficulty}</h6>
        <hr />
        <h6>Topic: {topic}</h6>
        <hr />
        <h6>Question number: 6/12</h6>
        <hr />
      </Alert>
      <QuizzesWrapper quizzes={quizzes} />
    </Container>
  );
};

export default QuizPage;
