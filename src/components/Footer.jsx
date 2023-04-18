import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

function Footer(props) {
    return (
     <>
<Navbar>
      <Container fluid className="mt-5">
        <Navbar.Brand href="#home">Copyright 2023</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Ahmed ben ayed</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    </>
    );
}

export default Footer;