import { Navbar, Nav, Container } from 'react-bootstrap'

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <Navbar.Brand href="#">⚽ FIFA App</Navbar.Brand>
        <Navbar.Toggle aria-controls="fifa-nav" />
        <Navbar.Collapse id="fifa-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#players">Players</Nav.Link>
            <Nav.Link href="#matches">Matches</Nav.Link>
            <Nav.Link href="#teams">Teams</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
