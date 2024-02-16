import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Card.scss'
import { FaLink, FaGithub } from 'react-icons/fa6'

function Card ({ name, url, ghUrl, imgPath, stack }) {
  const [num, setNum] = useState(0)

  useEffect(() => {
    const getNewNumber = setInterval(() => {
      if (num < 3) {
        setNum(num + 1)
      } else {
        setNum(0)
      }
    }, 3000)
    return () => clearInterval(getNewNumber)
  }, [num])

  return (
    <div className='Card'>
      <section className='info'>
        <div className='background'>
          <img src={`${imgPath}/${num}.png`} alt={`${name}_pic_${num}`} />
        </div>
        <footer>
          <h1>{name}</h1>
          <div className='links'>
            <Link to={url}>
              <FaLink />
            </Link>
            <Link to={ghUrl}>
              <FaGithub />
            </Link>
          </div>
        </footer>
      </section>
      <section className='techs'>{stack.map(icon => icon)}</section>
    </div>
  )
}

export default Card
