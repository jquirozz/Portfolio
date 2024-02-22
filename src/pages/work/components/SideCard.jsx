import { Link } from 'react-router-dom'

import './SideCard.scss'
import { FaLink, FaGithub } from 'react-icons/fa6'

function SideCard ({ name, url, ghUrl, stack }) {
  return (
    <div className='SideCard'>
      <h2>{name}</h2>
      <aside>
        <Link to={url}>
          <FaLink />
        </Link>
        <Link to={ghUrl}>
          <FaGithub />
        </Link>
      </aside>
    </div>
  )
}

export default SideCard
