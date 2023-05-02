import React from 'react'
import { MaxContainer, ImageContainer } from '../components/styled-components/Styled'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { BiCodeAlt } from "react-icons/bi";

const Projects = () => {
    return (
        <div>
            <MaxContainer>
                <h5 className='font-700 mb-5'>PROJECTS</h5>
                <Container>
                    <Row>
                        <Col md='6'>
                            <Card className='border-0 overflow-hidden mb-4 mbg-secondary'>
                                <ImageContainer radius='0' height='270px'>

                                </ImageContainer>
                                <Container className='text-center mbg-secondary p-4'>
                                    <p className='font-700 mb-0'>PROJECT TITLE</p>
                                    <p className='font-500 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <Button variant='warning' className='rounded-pill py-2 px-4 me-2 text-white font-500'>LIVE DEMO</Button>
                                    <Button variant='dark' className='mbg-secondary rounded-pill py-2 px-4 text-white border border-secondary thover-warning'><BiCodeAlt className='me-2 thover-warning' />VIEW CODE</Button>
                                </Container>
                            </Card>
                        </Col>
                        <Col md='6'>
                            <Card className='border-0 overflow-hidden mb-4 mbg-secondary'>
                                <ImageContainer radius='0' height='270px'>

                                </ImageContainer>
                                <Container className='text-center mbg-secondary p-4'>
                                    <p className='font-700 mb-0'>PROJECT TITLE</p>
                                    <p className='font-500 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <Button variant='warning' className='rounded-pill py-2 px-4 me-2 text-white font-500'>LIVE DEMO</Button>
                                    <Button variant='dark' className='mbg-secondary rounded-pill py-2 px-4 text-white border border-secondary thover-warning'><BiCodeAlt className='me-2 thover-warning' />VIEW CODE</Button>
                                </Container>
                            </Card>
                        </Col>
                        <Col md='6'>
                            <Card className='border-0 overflow-hidden mb-4 mbg-secondary'>
                                <ImageContainer radius='0' height='270px'>

                                </ImageContainer>
                                <Container className='text-center mbg-secondary p-4'>
                                    <p className='font-700 mb-0'>PROJECT TITLE</p>
                                    <p className='font-500 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <Button variant='warning' className='rounded-pill py-2 px-4 me-2 text-white font-500'>LIVE DEMO</Button>
                                    <Button variant='dark' className='mbg-secondary rounded-pill py-2 px-4 text-white border border-secondary thover-warning'><BiCodeAlt className='me-2 thover-warning' />VIEW CODE</Button>
                                </Container>
                            </Card>
                        </Col>
                        <Col md='6'>
                            <Card className='border-0 overflow-hidden mb-4 mbg-secondary'>
                                <ImageContainer radius='0' height='270px'>

                                </ImageContainer>
                                <Container className='text-center mbg-secondary p-4'>
                                    <p className='font-700 mb-0'>PROJECT TITLE</p>
                                    <p className='font-500 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <Button variant='warning' className='rounded-pill py-2 px-4 me-2 text-white font-500'>LIVE DEMO</Button>
                                    <Button variant='dark' className='mbg-secondary rounded-pill py-2 px-4 text-white border border-secondary thover-warning'><BiCodeAlt className='me-2 thover-warning' />VIEW CODE</Button>
                                </Container>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </MaxContainer>
        </div>
    )
}

export default Projects