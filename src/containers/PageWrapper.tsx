import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../img/l1.png';
function PageWrapper({ children }: { children: JSX.Element }) {
    return (
        <Container className='mt-4'>
            <Navbar className="mb-5 rounded" bg='dark' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            width="130"
                            height="130"
                            className="d-inline-block align-top img-thumbnail"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-0">
                        <Nav.Link>
                            <Link to={'/'} className="nav-link"> Home </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={'/add-post'} className="nav-link"> Add post </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={'/about'} className="nav-link"> About </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {children}
        </Container>
    );
}

export default PageWrapper;