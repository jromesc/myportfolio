import React, { Component } from 'react'
import { MaxContainer, FlexContainer } from '../components/styled-components/Styled'
import { Button } from 'react-bootstrap';

// import Lordicon from 'react-lordicon'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-scroll'

const Hero = () => {

    AOS.init();

    return (
        <div style={{ paddingTop: '49px' }} id='hero'>
            <MaxContainer display='flex' justify='center' padding='15rem 1rem 5rem 1rem'>
                <div className='text-center'>
                    <h1>Pleasure to meet you!</h1>
                    <p className='mb-0'>I am <span className='text-warning'>Jerome Cabrera</span>,</p>
                    <p>A BS Information Technology Graduate.</p>
                    <FlexContainer justify='center' height='90%' margin='5rem 0'>
                        {/* <Link to="about" spy={true} smooth={true} duration={100} className='btn p-0 rounded-pill' style={{ height: '44px' }}>
                            <Lordicon
                                colors={{
                                    primary: '#fff',
                                    secondary: '#222',
                                }}
                                icon="arrowDown"
                                size={44}
                                delay={1000}
                                trigger='loop'
                            />
                        </Link> */}
                    </FlexContainer>
                </div>
                <div className='position-fixed ms-4' style={{ top: '1rem', left: '1rem' }}>
                    <FlexContainer height='620px' className='p-0' align='center'>
                        <FlexContainer flex_direction='column'>
                            <Link className='btn btn-outline-secondary p-1 mb-2' to="hero" spy={true} smooth={true} duration={100} />
                            <Link className='btn btn-outline-secondary p-1 mb-2' to="about" spy={true} smooth={true} duration={100} />
                            <Link className='btn btn-outline-secondary p-1 mb-2' to="projects" spy={true} smooth={true} duration={100} />
                            <Link className='btn btn-outline-secondary p-1 mb-2' to="contacts" spy={true} smooth={true} duration={100} />
                        </FlexContainer>
                    </FlexContainer>
                </div>
            </MaxContainer>
        </div>
    )
}

export default Hero