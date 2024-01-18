// MODULES
import { useEffect, useState } from 'react'
import ContactForm from '../components/ContactForm'

// COMPONENTS
import MailNotification from '../components/MailNotification'

// STYLE
import './style/Contact.scss'
import { IoCopy, IoCheckmark } from 'react-icons/io5'

const CONTACT_MAIL = 'jqui.contact@gmail.com'

function Contact () {
  const [copy, setCopy] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_MAIL)
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 2000)
  }

  // Reset sent or error after 3 second
  useEffect(() => {
    if (sent || error) {
      setTimeout(() => {
        setSent(false)
        setError(false)
      }, 3000)
    }
  }, [sent, error])

  if (sent || error) {
    return <MailNotification sent={sent} error={error} />
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
      <ContactForm sent={sent} setSent={setSent} setError={setError} />
    </div>
  )
}

export default Contact
