import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import "./mynavbar.scss";

export default function MyNavBar() {
  return (
    <Navbar expand="sm" bg="light">
      <Container fluid>
        <NavLink className="fs-3 me-2 nav-link" to="/subreddit-info">
          Get Subreddit Info
        </NavLink>
        <Navbar.Text className="">(Learn about a subreddit!)</Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavLink className=" nav-link" to="/about">
            About this App
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
