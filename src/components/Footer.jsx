import React from 'react'
import { MaxContainer, ImageContainer, FooterContainer, FlexContainer } from './styled-components/Styled'
import { Container, Nav, Navbar, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { BiCopyright } from 'react-icons/bi';
import Logo from '../assets/logo.png';
import Vite from '../assets/vite.svg';
import { ReactIcon, Reactboostrap } from '../assets/icons';
import resumePDF from '../assets/Cabrera, Jerome Cv.pdf'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#000' }}>
            <MaxContainer min_height='auto'>
                <Row>
                    <Col md='4' style={{marginBottom: '2rem'}}>
                        <FlexContainer height='100%' justify='end' flex_direction='column'>
                            <FlexContainer justify='start' margin='0 0 1rem 0'>
                                <p className='text-warning'>Created using:</p>
                                <ImageContainer size='20px' mbg='none' margin='0 0 0 1rem'>
                                    <img src={Vite} />
                                </ImageContainer>
                                <ImageContainer size='20px' mbg='none' margin='0 0 0 1rem'>
                                    <img src={ReactIcon} />
                                </ImageContainer>
                                <ImageContainer size='20px' mbg='none' margin='0 0 0 1rem'>
                                    <img src={Reactboostrap} />
                                </ImageContainer>
                            </FlexContainer>
                            <div style={{ maringBottom: '5rem' }}>
                                <p>For further information regarding my qualifications, kindly download my Cv.</p>
                                <Button className='text-white' variant='warning' onClick={() => window.open(resumePDF, '_blank')}>Download Resume/CV</Button>
                            </div>
                        </FlexContainer>
                    </Col>
                    <Col md='8'>
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
                                    <ImageContainer size='40px' mbg='none' justify='center' padding='0'>
                                        <img src={Logo} />
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
                            <BiCopyright className='me-1 mtext-secondary' style={{ fill: '#6E7179' }} />
                            <p className='m-0 text-center text-secondary'>2023 JSC. All rights reserved.</p>
                        </FlexContainer>
                    </Col>
                </Row>

            </MaxContainer>
        </div>
    )
}

export default Footer