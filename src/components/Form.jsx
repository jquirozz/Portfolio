import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

import './Form.css'

const SERVICE_ID = 'service_m1hxrab'
const TEMPLATE_ID = 'template_c4zp9tq'
const PUBLIC_KEY = '8f8ZQWGWsnvc8CVp8'

export default function Form () {
  const form = useRef()
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (sent) {
      setName('')
      setCompany('')
      setEmail('')
      setMessage('')
    }
    setSent(false)
  }, [sent])

  const handleSubmit = e => {
    e.preventDefault()
    sendMail()
  }

  const sendMail = async () => {
    try {
      const isSent = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
        PUBLIC_KEY
      )
      if (isSent.text === 'OK') return setSent(true)
    } catch (error) {
      console.error('MAIL ERROR', error)
    }
  }

  return (
    <form ref={form} onSubmit={e => handleSubmit(e)}>
      <div className='wrap'>
        <header>
          <div className='name'>
            <label htmlFor='name'>My name is</label>
            <input
              id='name'
              name='name'
              type='text'
              placeholder='John Doe'
              aria-label='Your name'
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div className='company'>
            <label htmlFor='company'>I work with</label>
            <input
              id='company'
              name='company'
              type='text'
              placeholder='Company'
              aria-label='Your company'
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
          </div>
          <div className='email'>
            <label htmlFor='email'>Contact me on</label>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='johndoe@company.com'
              aria-label='Your email address'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
        </header>
        <div className='message'>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            placeholder="I'd like to..."
            aria-label='Your message'
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type='submit'>
          <h3>SEND</h3>
        </button>
      </div>
    </form>
  )
}
