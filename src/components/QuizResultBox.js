import QuizResultOption from "./QuizResultOption";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

const QuizResultBox = ({ quiz, index }) => {
  const answersArray = quiz.answers.map((item) => {
    let state = "";
    if (item.correct) {
      state = "correct";
    }
    if (quiz.userAnswer._id === item._id && !item.correct) {
      state = "incorrect";
    }
    return <QuizResultOption key={item._id} text={item.text} state={state} />;
  });

  return (
    <Card className="mb-5">
      <Card.Header>
        <Badge bg="warning" text="dark">
          {index + 1}
        </Badge>
        <h5 className="text-center">{quiz.question}</h5>
      </Card.Header>
      <Card.Body>
        <Row className="gy-2">{answersArray}</Row>
      </Card.Body>
    </Card>
  );
};

export default QuizResultBox;
