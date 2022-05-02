import QuizOption from "./QuizOption";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const QuizBox = ({ quiz, handleChangeQuiz }) => {
  const handleClick = (userAnswer) => {
    handleChangeQuiz(quiz, userAnswer);
  };

  return (
    <Card>
      <Card.Header className="text-center">{quiz.question}</Card.Header>
      <Card.Body>
        <Row className="gy-2">
          {quiz.answers.map((answer) => (
            <QuizOption
              key={answer._id}
              handleClick={handleClick}
              quizOption={answer}
            />
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default QuizBox;
