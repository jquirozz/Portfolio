import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import './NotFound.scss'
import { FaCode } from 'react-icons/fa'

function NotFound () {
  const [countDown, setCountDown] = useState(3)
  const navigate = useNavigate()

  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  const subCount = useCallback(() => {
    setCountDown(prevCount => prevCount - 1)
  }, [])

  useEffect(() => {
    if (!countDown > 0) return goBack()
    const intervalId = setInterval(subCount, 1000)
    return () => clearInterval(intervalId)
  }, [countDown, goBack, subCount])

  return (
    <div className='Error'>
      <header>
        <FaCode />
      </header>
      <footer>
        <h1>NOT FOUND</h1>
        <h2>Going back in {countDown}</h2>
      </footer>
    </div>
  )
}

export default NotFound
