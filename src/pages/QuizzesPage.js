import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import QuizzesWrapper from "../components/QuizzesWrapper";
import Container from "react-bootstrap/Container";

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const { topic, difficulty } = useSelector((state) => state.settings.value);
  useEffect(() => {
    const fetchQuizzes = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/random-quiz/20/?topic=${topic}&difficulty=${difficulty}`
      );
      setQuizzes(response.data);
    };
    fetchQuizzes();
  }, [topic, difficulty]);

  return (
    <Container className="mt-4">
      {quizzes.length === 0 && <h1 className="text-center">No Items</h1>}
      {quizzes.length > 0 && (
        <QuizzesWrapper
          quizzes={quizzes}
          difficulty={difficulty}
          topic={topic}
        />
      )}
    </Container>
  );
};

export default QuizPage;
