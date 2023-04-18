import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import Navbar from "react-bootstrap/Navbar";

function Header(props) {
  const inputRef = useRef(null);

  const handleClose = () => props.setShow(false);

  const handleClick = () => {
    props.setSearchValue(inputRef.current.value);

    if (props.warning === true) {
      props.setShow(true);
    } else {
      props.setShow(false);
    }
    inputRef.current.value = "";
  };
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                ref={inputRef}
              />
              <Button variant="outline-light" onClick={handleClick}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please enter a correct city name!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;
