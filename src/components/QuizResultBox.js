import QuizResultOption from "./QuizResultOption";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const QuizResultBox = ({ quiz }) => {
  const answersArray = quiz.answers.map((item) => {
    let state = "";
    if (item.correct) {
      state = "correct";
    }
    if (quiz.userAnswer.id === item.id && !item.correct) {
      state = "incorrect";
    }
    return <QuizResultOption key={item.id} text={item.text} state={state} />;
  });

  return (
    <Card>
      <Card.Header className="text-center">{quiz.question}</Card.Header>
      <Card.Body>
        <Row className="gy-2">{answersArray}</Row>
      </Card.Body>
    </Card>
  );
};

export default QuizResultBox;
