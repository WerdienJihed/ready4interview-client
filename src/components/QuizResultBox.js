import QuizResultOption from "./QuizResultOption";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";

const QuizResultBox = ({ index, quiz, answer }) => {
  const optionsArray = quiz.answers.map((option) => {
    if (!answer) {
      if (option.correct) {
        return (
          <QuizResultOption
            key={option._id}
            text={option.text}
            state="correct"
          />
        );
      }
      return (
        <QuizResultOption
          key={option._id}
          text={option.text}
          state="incorrect"
        />
      );
    }

    let state = "";
    if (option.correct) {
      state = "correct";
    }
    if (option === answer.userAnswer && !answer.userAnswer.correct) {
      state = "incorrect";
    }
    return (
      <QuizResultOption key={option._id} text={option.text} state={state} />
    );
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
        <Row className="gy-2">{optionsArray}</Row>
      </Card.Body>
    </Card>
  );
};

export default QuizResultBox;
