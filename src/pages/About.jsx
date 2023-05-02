import React from 'react'
import { MaxContainer, ImageContainer } from '../components/styled-components/Styled'
import { Container, Row, Col } from 'react-bootstrap'
import Undraw from '../assets/undraw_programming.svg'

const About = () => {
    return (
        <div className='mbg-secondary'>
            <MaxContainer>
                <h5 className='font-700 mb-5'>ABOUT ME</h5>
                <Container>
                    <Row>
                        <Col md='6'>
                            <p className='mtext-secondary'>A <span className='text-warning'> BS Information Technology</span> graduate proficient in using MS Office
                                applications such as MS Word, PowerPoint, Excel, etc. and also an experienced
                                programmer, utilizing various programming languages and handling databases.</p>
                            <p className='mtext-secondary mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas corporis vitae ab alias impedit quasi error delectus laboriosam laudantium? Necessitatibus tempore alias ipsa nesciunt modi possimus fuga sunt deserunt!</p>
                        </Col>
                        <Col md='6'>
                            {/* <ImageContainer height='300px' width='300px'>
                                <img src={Undraw} />
                            </ImageContainer> */}
                        </Col>
                    </Row>
                </Container>
                <br />
                <Container>
                    <div class="border border-2 p-2 border-warning border-top-0 border-end-0 border-start-0" style={{ width: '20%' }}></div>
                </Container>
                <Container className='mt-5'>
                    <Row>
                        <Col md='6' className='mtext-secondary'>
                            <h5 className='font-500 mb-5'>Work Experience</h5>

                            <p className='font-500 text-white'>IT Department Assistant (Internship)</p>
                            <p className=''>Ilocos Sur Provincial Capitol | Ilocos Region, Philippines <br />2018</p>
                            <p className=''>Responsible for providing administrative support to the IT department,
                                as well as working in the Admin Office. My duties included:</p>
                            <ul className='mb-5'>
                                <li>Assisting regular staff in the IT department and Admin Office with
                                    administrative tasks, such as paperwork and document distribution.</li>
                                <li>Preparing and serving food and beverages to guests in a timely and efficient manner.</li>
                                <li>Responding to guests' requests and concerns in a professional and courteous manner.</li>
                                <li>Maintaining a clean and organized work area throughout the event.</li>
                                <li>Collaborating with other staff members to ensure that all event logistics were properly coordinated.</li>
                                <li>Following health and safety protocols at all times to ensure a safe and sanitary environment for guests.</li>
                            </ul>

                            <p className='font-bold text-white'>On Call Catering Service Server/Waiter</p>
                            <p className=''>8.88 Restaurant & KTV Bar | Ilocos Region, Philippines<br />2016 - 2018</p>
                            <p className=''>Responsible for ensuring that guests at catered events received exceptional service. My duties included:</p>
                            <ul className=''>
                                <li>Setting up tables, chairs, and linens in accordance with event specifications</li>
                                <li>Preparing and serving food and beverages to guests in a timely and efficient manner</li>
                                <li>Responding to guests' requests and concerns in a professional and courteous manner</li>
                                <li>Maintaining a clean and organized work area throughout the event.</li>
                                <li>Collaborating with other staff members to ensure that all event logistics were properly coordinated</li>
                                <li>Following health and safety protocols at all times to ensure a safe and sanitary environment for guests</li>
                            </ul>
                        </Col>
                        <Col md='6'>
                            <h5 className='font-500 mb-5'>Programming Experience</h5>
                        </Col>
                    </Row>
                </Container>
            </MaxContainer>
        </div>
    )
}

export default About