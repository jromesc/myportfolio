import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { StyledNavbar, MaxContainer } from './styled-components/Styled'
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { Link } from 'react-scroll'

const MyNavbar = () => {
    return (
        <StyledNavbar expand="lg">
            <Container className='py-0 d-flex' style={{ width: '100%', maxWidth: '1200px', padding: '0 1rem' }}>
                <Navbar.Brand className='font-700'>JSC</Navbar.Brand>
                <Navbar.Toggle className='text-warning'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link' to="hero" spy={true} smooth={true} duration={100}>HOME</Link>
                        <Link className='nav-link' to="about" spy={true} smooth={true} duration={100}>ABOUT</Link>
                        <Link className='nav-link' to="projects" spy={true} smooth={true} duration={100}>PROJECTS</Link>
                        <Link className='nav-link' to="contacts" spy={true} smooth={true} duration={100}>CONTACTS</Link>
                    </Nav>
                    <Nav className="ms-5 nav-icons">
                        <Nav.Link><FiMail /></Nav.Link>
                        <Nav.Link className='ms-2'><FiLinkedin /></Nav.Link>
                        <Nav.Link className='ms-2'><FiGithub /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    )
}

export default MyNavbar