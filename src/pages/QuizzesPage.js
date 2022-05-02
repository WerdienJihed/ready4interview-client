import { useState } from "react";
import { useSelector } from "react-redux";
import QuizzesWrapper from "../components/QuizzesWrapper";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const { topic, difficulty } = useSelector((state) => state.settings.value);

  return (
    <Container className="mt-4">
      <Alert variant="success">
        <Alert.Heading className="text-center">Information</Alert.Heading>
        <hr />
        <h6>Difficulty: {difficulty}</h6>
        <hr />
        <h6>Topic: {topic}</h6>
        <hr />
        <h6>Question number: 6/12</h6>
      </Alert>
      {quizzes.length === 0 && <h1 className="text-center">No Items</h1>}
      {quizzes.length > 0 && <QuizzesWrapper quizzes={quizzes} />}
    </Container>
  );
};

export default QuizPage;
