import { useEffect, useState } from 'react'
import './ContactInput.scss'
import { GoAlertFill } from 'react-icons/go'

function ContactInput ({ name, type, id, value, setValue, errors }) {
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    const isError = errors.some(error => error === name)
    setAlert(isError)
  }, [errors, name])

  return (
    <section className='ContactInput'>
      <header>
        <label htmlFor={name}>{name}</label>
        {alert ? <GoAlertFill /> : ''}
      </header>
      {type !== 'area' && (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      )}
      {type === 'area' && (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      )}
    </section>
  )
}

export default ContactInput
