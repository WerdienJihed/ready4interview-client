import { useDispatch } from "react-redux";
import { add } from "../store/quizzesResultSlice";
import QuizOption from "./QuizOption";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const QuizBox = ({ quiz, handleChangeQuiz }) => {
  const dispatch = useDispatch();

  const saveUserAnswer = (answer) => {
    dispatch(add({ quizId: quiz._id, userAnswer: answer }));
    handleChangeQuiz();
  };

  return (
    <Card>
      <Card.Header className="text-center">{quiz.question}</Card.Header>
      <Card.Body>
        <Row className="gy-2">
          {quiz.answers.map((option) => (
            <QuizOption
              key={option._id}
              handleClick={saveUserAnswer}
              quizOption={option}
            />
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default QuizBox;
