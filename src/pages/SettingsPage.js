import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { initSettings } from "../store/settingsSlice";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SettingsPage = () => {
  const userSettings = useSelector((state) => state.settings.value);
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTopic(userSettings.topic);
    setDifficulty(userSettings.difficulty);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      initSettings({
        topic,
        difficulty,
      })
    );
    navigate("/quiz");
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>Settings</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="topic" className="mb-2">
              <Form.Label>Topic</Form.Label>
              <Form.Select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="c#">C#</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="difficulty" className="mb-2">
              <Form.Label>Difficulty</Form.Label>
              <Form.Select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Start
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SettingsPage;
