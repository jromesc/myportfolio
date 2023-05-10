import React, {useContext} from 'react'
import { FlexContainer, MaxContainer } from '../components/styled-components/Styled'
import { Form, Button } from 'react-bootstrap'
import { ButtonContext } from '../ButtonContext'

const Contacts = () => {

    const { handleButtonClick } = useContext(ButtonContext);

    return (
        <div className='mbg-secondary'>
            <MaxContainer>
                <FlexContainer flex_direction='column' style={{ width: '100%', maxWidth: '600px' }}>
                    <div>
                        <h5 data-aos="fade-right" className='font-700 text-center'>SEND A MESSAGE</h5>
                        <p data-aos="fade-left" data-aos-delay="100" className='text-center mtext-secondary mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Corporis fugit blanditiis labore recusandae aut quam porro? Sequi</p>
                    </div>
                    <Form data-aos="zoom-in" data-aos-delay="200" className='mborder-primary rounded p-4' style={{ width: '100%', margin: 'auto' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter name" required className='mb-3' />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter your message here." />
                        </Form.Group>
                        <Button onClick={() => handleButtonClick('contactbutton')} variant="warning" className='text-white font-500' type="submit">
                            SUBMIT
                        </Button>
                    </Form>
                </FlexContainer>
            </MaxContainer>
        </div>
    )
}

export default Contacts