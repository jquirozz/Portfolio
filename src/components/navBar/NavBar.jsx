// MODULES
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// STYLES
import './NavBar.scss'

const LINKS = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Contact', url: '/contact' }
]

function NavBar () {
  const [show, setShow] = useState()
  const { pathname } = useLocation()

  useEffect(() => {
    const isActive = LINKS.some(i => i.url === pathname)
    setShow(isActive)
  }, [pathname])

  return (
    <div className={show ? 'NavBar' : 'hide'}>
      <div className='links'>
        {LINKS.map(({ url, name }) => (
          <NavLink to={url} key={name}>
            {name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default NavBar
