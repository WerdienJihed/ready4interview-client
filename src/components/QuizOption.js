import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const QuizOption = ({ quizOption, handleClick }) => {
  return (
    <Col md={6}>
      <Button
        variant="light"
        className="w-100"
        onClick={() => handleClick(quizOption)}
      >
        {quizOption.text}
      </Button>
    </Col>
  );
};

export default QuizOption;
