// MODULES
import { useState } from 'react'
import ContactForm from '../components/ContactForm'

// STYLE
import './style/Contact.scss'
import { IoCopy, IoCheckmark } from 'react-icons/io5'

const CONTACT_MAIL = 'jqui.contact@gmail.com'

function Contact () {
  const [copy, setCopy] = useState(false)
  const [sent, setSent] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_MAIL)
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 2000)
  }

  return (
    <div className='Contact'>
      <header className='top'>
        <h1>Get in Touch!</h1>
        <section onClick={handleCopy}>
          <h3>{CONTACT_MAIL}</h3>
          {copy ? <IoCheckmark /> : <IoCopy />}
        </section>
      </header>
      <ContactForm sent={sent} setSent={setSent} />
    </div>
  )
}

export default Contact
