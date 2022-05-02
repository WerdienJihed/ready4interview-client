import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Ready For Interview</Navbar.Brand>
        </LinkContainer>
        <Nav></Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
