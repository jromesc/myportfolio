import { useState } from 'react'
import { MyNavbar, Footer, AlertError } from './components'
import { Projects, About, Contacts, Hero } from './pages'
import { ButtonProvider } from './ButtonContext';
import { Element } from 'react-scroll'
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  AOS.init()
  const [count, setCount] = useState(0)

  const handleClick = () => {

    console.log('sent');
  };

  return (
    <>
      <ButtonProvider>
        {/* <TsParticles /> */}
        <MyNavbar />

        <Element name='hero'>
          <Hero />
        </Element>

        <Element name='about'>
          <About />
        </Element>

        <Element name='projects'>
          <Projects handleClick={handleClick} />
        </Element>

        <Element name='contacts'>
          <Contacts />
        </Element>

        <Footer />
        <AlertError handleClick={handleClick} />
      </ButtonProvider>
    </>
  )
}

export default App
