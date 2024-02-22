import './MailNotification.scss'
import {
  MdOutlineSentimentVerySatisfied as Happy,
  MdOutlineSentimentVeryDissatisfied as Sad
} from 'react-icons/md'

function MailNotification ({ sent, error }) {
  const checkProps = (op1, op2) => {
    if (sent) return op1
    if (error) return op2
  }
  const icon = checkProps(<Happy />, <Sad />)
  const message = checkProps('Email sent successfully', 'Email delivery failed')

  return (
    <div className='MailNotification'>
      <div className='wrap'>
        <header>{icon}</header>
        <footer>
          <h2>{message}!</h2>
        </footer>
      </div>
    </div>
  )
}

export default MailNotification
