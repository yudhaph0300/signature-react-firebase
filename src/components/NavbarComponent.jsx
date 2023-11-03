import { useNavigate, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  const patMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => navigate("/")} active={patMatchRoute("/")}>
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/about")}
              active={patMatchRoute("/about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/furniture")}
              active={patMatchRoute("/furniture")}
            >
              Furnitures
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/readme")}
              active={patMatchRoute("/readme")}
            >
              Readme
            </Nav.Link>

            {/* if user not login */}
            <Nav.Link
              onClick={() => navigate("/login")}
              active={patMatchRoute("/login")}
            >
              Login
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/register")}
              active={patMatchRoute("/register")}
            >
              Register
            </Nav.Link>

            {/* if user already login */}
            <Nav.Link
              onClick={() => navigate("/profile")}
              active={patMatchRoute("/profile")}
            >
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
