import { Container, Row, Col, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logoII.png'

export function Menu() {
    return (
        <Row>
            <Navbar expand='md' className='fs-4'>
                <Container fluid>
                    <Row className='w-100 m-0 d-flex align-items-center'>
                        <Col>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-lg`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                                placement="start"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                        Camila Vieira
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body closeButton>
                                    <Nav className='fw-semibold'>
                                        <Nav.Item>
                                            <NavLink to={'/'} className="nav-link">
                                                Home
                                            </NavLink>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <NavLink to={'/projects'} className="nav-link">
                                            Projects
                                        </NavLink>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <NavLink to={'/contact'} className="nav-link">
                                            Contact
                                        </NavLink>
                                        </Nav.Item>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Col>
                        <Col className='col-7'>
                            <Navbar.Brand>
                                <NavLink to={'/'}>
                                    <img
                                        src={logo}
                                        className='d-inline-block'
                                        style={{ width: 70 }}
                                        alt="Camila Vieira Logo" />
                                </NavLink>
                            </Navbar.Brand>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </Row>
    )
}