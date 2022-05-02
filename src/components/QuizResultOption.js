import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

const QuizResultOption = ({ text, state }) => {
  let variant;
  switch (state) {
    case "correct":
      variant = "success";
      break;
    case "incorrect":
      variant = "danger";
      break;
    default:
      variant = "secondary";
      break;
  }

  return (
    <Col md={6}>
      <Button variant={variant} className="w-100">
        {text}
      </Button>
    </Col>
  );
};

export default QuizResultOption;
