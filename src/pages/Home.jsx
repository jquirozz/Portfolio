import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// COMPONENTS
import IconLink from '../components/navBar/components/IconLink'
import Work from './work/Work'

// STYLES & ICONS
import './Home.scss'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { FaChevronDown } from 'react-icons/fa'

// CONSTANTS
const LINK_GITHUB = 'https://github.com/jquirozz'
const LINK_LINKEDIN = 'https://www.linkedin.com/in/joseph-quiroz-b37b252aa/'

function Home () {
  const location = useLocation()
  const workRef = useRef(null)

  useEffect(() => {
    if (location.state && location.state.scrollToWork) {
      workRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.state])

  return (
    <div className='Home'>
      <main className='imJoseph'>
        <header>
          <h2>I'm</h2>
          <aside>
            <IconLink url={LINK_GITHUB} svg={<FaGithub />} />
            <IconLink url={LINK_LINKEDIN} svg={<FaLinkedin />} />
          </aside>
        </header>
        <h1>JOSEPH</h1>
        <footer>
          <p>Perfection one pixel at a time</p>
        </footer>
        <FaChevronDown className='arrowDown' />
      </main>
      <div id='work' ref={workRef} />
      <Work />
    </div>
  )
}

export default Home
