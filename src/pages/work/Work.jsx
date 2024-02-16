import Card from './components/Card'

import './Work.scss'
import { FaReact, FaSass, FaJs } from 'react-icons/fa6'

const WORKS = [
  {
    name: 'Apexify',
    url: 'https://apexif1y.netlify.app/',
    ghUrl: 'https://github.com/jquirozz/Apexify',
    imgPath: '/work/apexify',
    stack: [<FaReact key={0} />, <FaSass key={1} />, <FaJs key={2} />]
  }
]

function Work () {
  return (
    <div className='Work'>
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
    </div>
  )
}

export default Work
