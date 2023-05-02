import { useState } from 'react'
import { MyNavbar, TsParticles, Footer } from './components'
import { Projects, About, Contacts, Hero } from './pages'
import { Element } from 'react-scroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <TsParticles /> */}
        <MyNavbar />

        <Element name='hero'>
          <Hero />
        </Element>

        <Element name='about'>
          <About />
        </Element>

        <Element name='projects'>
          <Projects />
        </Element>

        <Element name='contacts'>
          <Contacts />
        </Element>

        <Footer />

      </div>
    </>
  )
}

export default App
