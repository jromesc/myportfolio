import React from 'react'
import { MaxContainer, ImageContainer, FooterContainer, FlexContainer } from './styled-components/Styled'
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
    return (
        <div style={{backgroundColor: '#000'}}>
            <MaxContainer min_height='auto'>
                <FooterContainer borderbottom='1px solid rgba(255, 255, 255, 0.08)'>
                    <Row style={{ width: '100%' }}>
                        <Col md='4' className='d-flex align-items-center'>
                            <Navbar>
                                <Nav className="nav-icons">
                                    <Nav.Link><FiMail /></Nav.Link>
                                    <Nav.Link className=''><FiLinkedin /></Nav.Link>
                                    <Nav.Link className=''><FiGithub /></Nav.Link>
                                </Nav>
                            </Navbar>
                        </Col>
                        <Col md='4'>
                            <ImageContainer size='50px' className='mb-4'>
                            </ImageContainer>
                        </Col>
                        <Col md='4'>
                        </Col>
                    </Row>
                </FooterContainer>
                <FooterContainer margintop='1rem'>
                    <Navbar>
                        <Nav className="m-auto">
                            <Link className='nav-link' to="hero" spy={false} smooth={true} duration={100}>HOME</Link>
                            <Link className='nav-link' to="about" spy={false} smooth={true} duration={100}>ABOUT</Link>
                            <Link className='nav-link' to="projects" spy={false} smooth={true} duration={100}>PROJECTS</Link>
                            <Link className='nav-link' to="contacts" spy={false} smooth={true} duration={100}>CONTACTS</Link>
                        </Nav>
                    </Navbar>
                </FooterContainer>
                <FlexContainer align='center' justify='center'>
                    <BiCopyright className='me-1 mtext-secondary' style={{fill: '#6E7179'}} />
                    <p className='m-0 text-center text-secondary'>2023 JSC. All rights reserved.</p>
                </FlexContainer>

            </MaxContainer>
        </div>
    )
}

export default Footer