// COMPONENTS
import IconLink from '../components/IconLink'

// STYLES & ICONS
import './style/Home.scss'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'

// CONSTANTS
const LINK_GITHUB = 'https://github.com/jquirozz'
const LINK_LINKEDIN = 'https://www.linkedin.com/in/joseph-quiroz-b37b252aa/'

function Home () {
  return (
    <div className='Home'>
      <section className='imJoseph'>
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
      </section>
    </div>
  )
}

export default Home
