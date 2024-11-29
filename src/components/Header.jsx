import React from 'react';
import { Navbar, Nav, Container, Dropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container fluid>
                {/* Logo Section */}
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <Image
                        src="https://via.placeholder.com/50" // Replace with your logo URL
                        alt="LMS Logo"
                        roundedCircle
                        className="me-2"
                        style={{ width: '40px', height: '40px' }}
                    />
                    <span className="fw-bold">LMS App</span>
                </Navbar.Brand>

                {/* Toggle for Mobile */}
                <Navbar.Toggle aria-controls="lms-navbar" />

                {/* Navigation Links */}
                <Navbar.Collapse id="lms-navbar">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                        <Nav.Link as={Link} to="/assignments">Assignments</Nav.Link>
                        <Nav.Link as={Link} to="/grades">Grades</Nav.Link>
                    </Nav>

                    {/* User Profile Dropdown */}
                    <Dropdown align="end">
                        <Dropdown.Toggle variant="outline-secondary" id="user-dropdown">
                            <span className="d-flex align-items-center">
                                <div
                                    className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
                                    style={{
                                        width: '35px',
                                        height: '35px',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    JD {/* Replace with user initials */}
                                </div>
                                <span className="ms-2 d-none d-lg-inline">John Doe</span>
                            </span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                            <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item as={Link} to="/logout" className="text-danger">
                                Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
