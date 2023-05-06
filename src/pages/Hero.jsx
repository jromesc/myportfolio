import React, { Component } from 'react'
import { MaxContainer, FlexContainer, ImageContainer } from '../components/styled-components/Styled'
import { SquareDots } from '../components';

import AOS from 'aos';

import { Link } from 'react-scroll'

const Hero = () => {

    AOS.init();

    return (
        <div style={{ paddingTop: '49px' }} id='hero'>
            <MaxContainer display='flex' justify='center' padding='15rem 1rem 5rem 1rem'>
                <div className='text-center'>
                    <ImageContainer size='100' className='mb-4' data-aos="zoom-in" data-aos-delay="100" >

                    </ImageContainer>
                    <h1 data-aos="fade-right" data-aos-delay="200">Pleasure to meet you!</h1>
                    <p className='mb-0' data-aos="fade-left" data-aos-delay="300">I am <span className='text-warning'>Jerome Cabrera</span>,</p>
                    <p data-aos="fade-right" data-aos-delay="400">A BS Information Technology Graduate.</p>

                </div>
                <div className='position-fixed ms-4' id='side-dot-nav' style={{ top: '1rem', left: '1rem' }}>
                    <FlexContainer height='620px' className='p-0' align='center'>
                        <FlexContainer flex_direction='column'>
                            <Link data-aos="fade-up" data-aos-duration="500" className='btn btn-outline-secondary p-1 mb-2' to="hero" spy={true} smooth={true} duration={100} />
                            <Link data-aos="fade-up" data-aos-duration="600" className='btn btn-outline-secondary p-1 mb-2' to="about" spy={true} smooth={true} duration={100} />
                            <Link data-aos="fade-up" data-aos-duration="700" className='btn btn-outline-secondary p-1 mb-2' to="projects" spy={true} smooth={true} duration={100} />
                            <Link data-aos="fade-up" data-aos-duration="800" className='btn btn-outline-secondary p-1 mb-2' to="contacts" spy={true} smooth={true} duration={100} />
                        </FlexContainer>
                    </FlexContainer>
                </div>
                <SquareDots top='0' right='0' margin='0 1.5rem 0 0' animation='fade-down' delay='500' />
                <SquareDots bottom='0' left='0' margin='0 0 1rem 0' animation='fade-up' delay='500' />
            </MaxContainer>
        </div>
    )
}

export default Hero