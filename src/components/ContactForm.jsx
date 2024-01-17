// MODULES
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// COMPONENTS
import ContactInput from './ContactInput'

// STYLE
import './style/ContactForm.scss'

const SERVICE_ID = 'service_m1hxrab'
const TEMPLATE_ID = 'template_c4zp9tq'
const PUBLIC_KEY = '8f8ZQWGWsnvc8CVp8'

// eslint-disable-next-line react/prop-types
function ContactForm ({ sent, setSent }) {
  const form = useRef()
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')
  const [inputError, setInputError] = useState([])

  // DELETE THIS LATER
  useEffect(() => {
    console.error('ERROR', inputError)
  }, [inputError])

  useEffect(() => {
    if (sent) {
      setName('')
      setMail('')
      setMessage('')
    }
  }, [sent])

  const handleSubmit = e => {
    e.preventDefault()
    setInputError([])
    const isValidated = validateInputs()
    if (isValidated) {
      sendMail({ form, setSent })
    }
  }

  const validateInputs = () => {
    let isValid = true
    if (name.length < 4) {
      setInputError(prev => [...prev, 'name'])
      isValid = false
    }
    if (mail.length < 4) {
      setInputError(prev => [...prev, 'mail'])
      isValid = false
    }
    if (message.length < 10) {
      setInputError(prev => [...prev, 'message'])
      isValid = false
    }
    return isValid
  }

  const sendMail = async () => {
    try {
      const isSent = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      if (isSent.text === 'OK') return setSent(true)
    } catch (error) {
      console.error('MAIL ERROR', error)
      return false
    }
  }

  return (
    <form ref={form} className='ContactForm' onSubmit={e => handleSubmit(e)}>
      <header>
        <ContactInput
          name='name'
          id='name'
          type='text'
          value={name}
          setValue={setName}
          errors={inputError}
        />
        <ContactInput
          name='mail'
          id='mail'
          type='email'
          value={mail}
          setValue={setMail}
          errors={inputError}
        />
      </header>
      <footer>
        <ContactInput
          name='message'
          id='msg'
          type='area'
          value={message}
          setValue={setMessage}
          errors={inputError}
        />
        <button type='submit'>SEND</button>
      </footer>
    </form>
  )
}

export default ContactForm
