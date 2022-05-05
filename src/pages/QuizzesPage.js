import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initQuizzes } from "../store/quizzesSlice";
import axios from "axios";
import QuizzesWrapper from "../components/QuizzesWrapper";
import Container from "react-bootstrap/Container";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const { topic, difficulty } = useSelector((state) => state.settings.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchQuizzes = async () => {
      const response = await axios.get(
        `${BASE_URL}/api/random-quiz/20/?topic=${topic}&difficulty=${difficulty}`
      );
      setQuizzes(response.data);
      dispatch(initQuizzes(response.data));
    };
    fetchQuizzes();
  }, [topic, difficulty]);

  return (
    <Container>
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
