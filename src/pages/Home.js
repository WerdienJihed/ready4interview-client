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
      <Row className="mt-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          architecto nam quasi animi aperiam culpa. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Asperiores beatae, porro natus
          voluptatem ducimus nulla! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Odio ipsa, praesentium aliquam voluptates modi
          possimus.
        </p>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="secondary" className="me-2">
            Sign up
          </Button>
          <Button
            variant="outline-success"
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
