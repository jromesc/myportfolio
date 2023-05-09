import React from 'react'
import { MaxContainer, ImageContainer, FlexContainer } from '../components/styled-components/Styled'
import { Row, Col } from 'react-bootstrap'
import { Html, Css, Js, Php, Java, CSharp, CPlus2, Mysql, BootstrapIcon, ReactIcon, TailwindCss, Word, Excel, PowerPoint, Access, Basic, VsCode, NetBeans, Photoshop, Illustrator, Xd } from '../assets/icons'

const About = () => {
    return (
        <div className='mbg-secondary'>
            <MaxContainer>
                <h5 data-aos="fade-left" className='font-700 mb-5 text-center'>ABOUT ME</h5>
                <div style={{ maxWidth: '800px', margin: 'auto' }}>
                    <p data-aos="fade-left" data-aos-delay="100" className='mtext-secondary text-center'>A <span className='text-warning'> BS Information Technology</span> graduate proficient in using MS Office
                        applications such as MS Word, PowerPoint, Excel, etc. and also an experienced
                        programmer, utilizing various programming languages and handling databases.</p>
                    <p data-aos="fade-left" data-aos-delay="200" className='mtext-secondary mb-0 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas corporis vitae ab alias impedit quasi error delectus laboriosam laudantium? Necessitatibus tempore alias ipsa nesciunt modi possimus fuga sunt deserunt!</p>
                </div>
                <br />
                <div data-aos="fade-left" data-aos-delay="300" className="border border-2 m-auto p-2 border-warning border-top-0 border-end-0 border-start-0 mb-5" style={{ width: '20%' }}></div>
                <Row>
                    <Col md='6' className='mtext-secondary'>
                        <h5 data-aos="fade-left" data-aos-delay="400" className='font-500 mb-5'>Work Experience</h5>

                        <p data-aos="fade-left" data-aos-delay="500" className='font-500 text-white'>IT Department Assistant (Internship)</p>
                        <p data-aos="fade-left" data-aos-delay="500" className=''>Ilocos Sur Provincial Capitol | Ilocos Region, Philippines <br />2018</p>
                        <p data-aos="fade-left" data-aos-delay="500" className=''>Responsible for providing administrative support to the IT department,
                            as well as working in the Admin Office. My duties included:</p>
                        <ul className='mb-5'>
                            <li data-aos="fade-left" data-aos-delay="500">Assisting regular staff in the IT department and Admin Office with
                                administrative tasks, such as paperwork and document distribution.</li>
                            <li data-aos="fade-left" data-aos-delay="500">Preparing and serving food and beverages to guests in a timely and efficient manner.</li>
                            <li data-aos="fade-left" data-aos-delay="500">Responding to guests' requests and concerns in a professional and courteous manner.</li>
                            <li data-aos="fade-left" data-aos-delay="500">Maintaining a clean and organized work area throughout the event.</li>
                            <li data-aos="fade-left" data-aos-delay="500">Collaborating with other staff members to ensure that all event logistics were properly coordinated.</li>
                            <li data-aos="fade-left" data-aos-delay="500">Following health and safety protocols at all times to ensure a safe and sanitary environment for guests.</li>
                        </ul>

                        <p data-aos="fade-left" data-aos-delay="500" className='font-bold text-white'>On Call Catering Service Server/Waiter</p>
                        <p data-aos="fade-left" data-aos-delay="500" className=''>8.88 Restaurant & KTV Bar | Ilocos Region, Philippines<br />2016 - 2018</p>
                        <p data-aos="fade-left" data-aos-delay="500" className=''>Responsible for ensuring that guests at catered events received exceptional service. My duties included:</p>
                        <ul className=''>
                            <li data-aos="fade-left" data-aos-delay="500">Setting up tables, chairs, and linens in accordance with event specifications</li>
                            <li data-aos="fade-left" data-aos-delay="500">Preparing and serving food and beverages to guests in a timely and efficient manner</li>
                            <li data-aos="fade-left" data-aos-delay="500">Responding to guests' requests and concerns in a professional and courteous manner</li>
                            <li data-aos="fade-left" data-aos-delay="500">Maintaining a clean and organized work area throughout the event.</li>
                            <li data-aos="fade-left" data-aos-delay="500">Collaborating with other staff members to ensure that all event logistics were properly coordinated</li>
                            <li data-aos="fade-left" data-aos-delay="500">Following health and safety protocols at all times to ensure a safe and sanitary environment for guests</li>
                        </ul>
                    </Col>
                    <Col md='6'>
                        <h5 className='font-500 mb-5' data-aos="fade-left" data-aos-delay="400">Programming Experience</h5>
                        <Row>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="500" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={Html} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="600" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={Css} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="700" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={Js} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="800" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={Php} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="900" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={Java} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="1000" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={CSharp} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="1100" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={CPlus2} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="1200" size='50px' margin='0 0 2rem 0' radius='10%'>
                                <img src={Mysql} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="1300" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={ReactIcon} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="1400" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={BootstrapIcon} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="1500" size='50px' margin='0 3rem 0 0' mbg='none'>
                                <img src={TailwindCss} />
                            </ImageContainer></Col>
                        </Row>
                        <br />
                        <h5 className='font-500 mb-5' data-aos="fade-left" data-aos-delay="400">Applications</h5>
                        <Row>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="500" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={Word} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="600" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={Excel} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="700" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={PowerPoint} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="800" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={Access} />
                            </ImageContainer></Col>
                            <Col xs='4'><ImageContainer data-aos="fade-left" data-aos-delay="900" radius='6px' height='50px' width='100%' margin='0 0 2rem 0'>
                                <img src={NetBeans} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="1000" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={Basic} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="1100" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={VsCode} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="1100" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={Photoshop} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="1100" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={Illustrator} />
                            </ImageContainer></Col>
                            <Col xs='2'><ImageContainer data-aos="fade-left" data-aos-delay="1100" size='50px' margin='0 0 2rem 0' mbg='none'>
                                <img src={Xd} />
                            </ImageContainer></Col>
                        </Row>
                    </Col>
                </Row>
            </MaxContainer>
        </div>
    )
}

export default About