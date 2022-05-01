import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Settings = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card border="success" style={{ width: "18rem" }}>
        <Card.Header>Settings</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="topic" className="mb-2">
              <Form.Label>Topic</Form.Label>
              <Form.Select>
                <option>JavaScript</option>
                <option>Java</option>
                <option>Python</option>
                <option>C#</option>
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="difficulty" className="mb-2">
              <Form.Label>Difficulty</Form.Label>
              <Form.Select>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </Form.Select>
            </Form.Group>
            <Button variant="outline-success" className="w-100">
              Start
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Settings;
