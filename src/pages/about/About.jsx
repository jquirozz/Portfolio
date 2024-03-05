// MODULES
import { Link, useNavigate } from 'react-router-dom'

// STYLES
import './About.scss'
import { FaReact, FaJs, FaSass } from 'react-icons/fa6'

function About () {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/', { state: { scrollToWork: true } })
  }

  return (
    <div className='About'>
      <div className='wrap'>
        <header className='top'>
          <section>
            <header>
              <h2>Hi, my name is</h2>
              <h1>Joseph Quiroz</h1>
            </header>
            <div className='divider' />
            <footer>
              <p>
                A passionate front-end developer dedicated to transform ideas
                into captivating digital realities. I bring two years of
                hands-on experience to the table. Explore my projects showcasing
                UI/UX design, component-based architecture, and problem-solving
                skills.
              </p>
              <h3>Let's collaborate and bring your digital vision to life!</h3>
              <div className='links'>
                <Link to='/contact' className='contactMe'>
                  <h2>CONTACT ME</h2>
                </Link>
                <button onClick={handleClick}>
                  <h2>View Projects</h2>
                </button>
              </div>
            </footer>
          </section>
          <aside>
            <header>
              <img src='/images/pfp1-min.jpg' alt='My profile picture' />
            </header>
            <footer>
              <FaSass color='#CD6799' />
              <FaReact color='#61DBFB' />
              <FaJs color='#F0DB4F' />
            </footer>
          </aside>
        </header>
      </div>
    </div>
  )
}

export default About
