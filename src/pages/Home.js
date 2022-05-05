import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
function Home() {
  const navigate = useNavigate();
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col>
          <h1>Ready For Interview</h1>
        </Col>
      </Row>
      <Row className="mt-4 justify-content-center">
        <Col xs={10} md={8}>
          <h5>
            Ready for interview is an app that allows you to practice interview
            questions and refine your skills to reach potential employers with
            confidence.
          </h5>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button
            variant="primary"
            className="ms-2"
            onClick={() => navigate("/settings")}
          >
            Start quiz
          </Button>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default Home;
