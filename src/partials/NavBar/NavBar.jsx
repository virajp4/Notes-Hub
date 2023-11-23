import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";


import './navbar.css';

export default function NavBar() {
  return (
     <Navbar collapseOnSelect expand="lg" className="bg-body-black" data-bs-theme="dark">
        <Container className="w-75">
           <Navbar.Brand href="/" className="fs-3">
              Notes Hub
           </Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                 <Nav.Link href="/home">Home</Nav.Link>
                 <NavDropdown title="Notes" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" className="my-1">
                       1st Year
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="my-1">
                       2nd Year
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="my-1">
                       3rd Year
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="my-1">
                       4th Year
                    </NavDropdown.Item>
                 </NavDropdown>
                 <NavDropdown title="E-Lab Answers" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" className="my-1">
                       1st Year
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="my-1">
                       2nd Year
                    </NavDropdown.Item>
                 </NavDropdown>
                 <Nav.Link href="https://virajp4.me/GPA-Wiz/" target='_blank'>GPA Calulator</Nav.Link>
              </Nav>
           </Navbar.Collapse>
        </Container>
     </Navbar>
  );
}
