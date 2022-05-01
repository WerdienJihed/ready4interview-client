import { useState } from "react";
import QuizzesWrapper from "../components/QuizzesWrapper";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

const QuizPage = () => {
  // get state from redux store
  const difficulty = "easy";
  const topic = "javascript";

  const quizzes = [
    {
      id: 1,
      question: "Question 1 ?",
      answers: [
        {
          id: 1,
          text: "A",
          correct: true,
        },
        {
          id: 2,
          text: "B",
          correct: false,
        },
        {
          id: 3,
          text: "C",
          correct: false,
        },
        {
          id: 4,
          text: "D",
          correct: false,
        },
      ],
    },
    {
      id: 1,
      question: "Question 2 ?",
      answers: [
        {
          id: 1,
          text: "AA",
          correct: false,
        },
        {
          id: 2,
          text: "BB",
          correct: true,
        },
        {
          id: 3,
          text: "CC",
          correct: false,
        },
        {
          id: 4,
          text: "DD",
          correct: false,
        },
      ],
    },
  ];

  return (
    <Container className="mt-4">
      <Alert variant="success">
        <Alert.Heading className="text-center">Quiz Page</Alert.Heading>
        <hr />
        <h6>Difficulty: {difficulty}</h6>
        <hr />
        <h6>Topic: {topic}</h6>
        <hr />
        <h6>Question number: 6/12</h6>
        <hr />
      </Alert>
      <QuizzesWrapper quizzes={quizzes} />
    </Container>
  );
};

export default QuizPage;
