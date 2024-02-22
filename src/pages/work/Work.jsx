import Card from './components/Card'
import SideCard from './components/SideCard'

import './Work.scss'
import { FaReact, FaSass, FaJs } from 'react-icons/fa6'

const MAIN_STACK = [<FaReact key={0} />, <FaSass key={1} />, <FaJs key={2} />]
const SIDE_GHURL = 'https://github.com/jquirozz/React-side-projects'

const WORKS = [
  {
    name: 'Apexify',
    url: 'https://apexif1y.netlify.app/',
    ghUrl: 'https://github.com/jquirozz/Apexify',
    imgPath: '/work/apexify',
    stack: MAIN_STACK
  }
]
const SIDE_WORKS = [
  {
    name: 'To-Do App',
    url: 'https://jqui-todo.netlify.app/',
    ghUrl: SIDE_GHURL,
    stack: MAIN_STACK
  },
  {
    name: 'Quotes App',
    url: 'https://jqui-quote-generator.netlify.app/',
    ghUrl: SIDE_GHURL,
    stack: MAIN_STACK
  },
  {
    name: 'Time App',
    url: 'https://jqui-time.netlify.app/',
    ghUrl: SIDE_GHURL,
    stack: MAIN_STACK
  }
]

function Work () {
  return (
    <div className='Work'>
      <section className='main'>
        {WORKS.map((w, key) => (
          <Card
            name={w.name}
            url={w.url}
            ghUrl={w.ghUrl}
            imgPath={w.imgPath}
            stack={w.stack}
            key={key}
          />
        ))}
      </section>
      <section className='side'>
        {SIDE_WORKS.map((w, key) => (
          <SideCard
            name={w.name}
            url={w.url}
            ghUrl={w.ghUrl}
            stack={w.stack}
            key={key}
          />
        ))}
      </section>
    </div>
  )
}

export default Work
