import Card from './components/Card'

import './Work.scss'
import { FaReact, FaSass, FaJs } from 'react-icons/fa6'

const MAIN_STACK = [<FaReact key={0} />, <FaSass key={1} />, <FaJs key={2} />]

const WORKS = [
  {
    name: 'Apexify',
    url: 'https://apexif1y.netlify.app/',
    ghUrl: 'https://github.com/jquirozz/Apexify',
    imgPath: '/work/apexify',
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
    </div>
  )
}

export default Work
