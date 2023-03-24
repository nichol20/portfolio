import React, { useState } from 'react'
import axios from 'axios'

import { mailIcon, phoneIcon, locationIcon } from '../../assets/images'
import styles from './style.module.scss'

export const ContactMeSection = () => {
  const [ missingInformationError, setMissingInformationError ] = useState(false)
  const [ isSendingEmail, setIsSendingEmail ] = useState(false)

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSendingEmail(true)

    const formData = new FormData(event.currentTarget)
    const inputFields: NodeListOf<HTMLInputElement | HTMLTextAreaElement> = document.querySelectorAll(`.${styles.fieldInput}`)

    for(const pair of formData.entries()) {
      if(pair[1].length === 0) {
        setMissingInformationError(true)
        setIsSendingEmail(false)
        return
      }
    }

    try {
      await axios.post('https://nicholas-portfolio-server.onrender.com/email', {
        email: formData.get('email'),
        name: formData.get('name'),
        subject: formData.get('subject'),
        message: formData.get('message')
      })
  
      popUpSuccessMessage()
      setMissingInformationError(false)
      inputFields.forEach(inputEl => inputEl.value = '')
    } catch (error) {
      popUpErrorMessage()
    }
    
    setIsSendingEmail(false)
  }

  const MissingInformationSpan = () => {
    if(missingInformationError)
     return <span className={styles.missingInformationMessage}>Por favor preencha todos os campos</span>
    else return null
  }

  const popUpSuccessMessage = () => {
    const successPopUpEl = (document.querySelector(`.${styles.successPopup}`) as HTMLDivElement)

    successPopUpEl.classList.add(styles.active)

    setTimeout(() => {
      successPopUpEl.classList.remove(styles.active)
    }, 3000)
  }

  const popUpErrorMessage = () => {
    const errorPopUpEl = (document.querySelector(`.${styles.errorPopup}`) as HTMLDivElement)

    errorPopUpEl.classList.add(styles.active)

    setTimeout(() => {
      errorPopUpEl.classList.remove(styles.active)
    }, 3000)
  }

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Me Contate</h2>
        <h3 className={styles.sectionSubtitle}>entre em contato</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.informationBox}>
          <div className={styles.contactInfo}>
            <img src={phoneIcon} alt="phone" className={styles.icon} />
            <div className={styles.titleBox}>
              <h3>Telefone</h3>
              <span>+ 55 &#40;88&#41; 99933-1832</span>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <img src={mailIcon} alt="phone" className={styles.icon} />
            <div className={styles.titleBox}>
              <h3>Email</h3>
              <span>nick.nogue28@outlook.com</span>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <img src={locationIcon} alt="phone" className={styles.icon} />
            <div className={styles.titleBox}>
              <h3>Localização</h3>
              <span>são paulo, sp</span>
            </div>
          </div>
        </div>

        <form className={styles.emailForm} onSubmit={sendEmail}>
          <div className={styles.field}>
            <h4 className={styles.fieldName}>Email</h4>
            <input type="text" name='email' className={styles.fieldInput} />
          </div>
          <div className={styles.field}>
            <h4 className={styles.fieldName}>Nome</h4>
            <input type="text" name='name' className={styles.fieldInput} />
          </div>
          <div className={styles.field}>
            <h4 className={styles.fieldName}>Assunto</h4>
            <input type="text" name='subject' className={styles.fieldInput} />
          </div>
          <div className={`${styles.field} ${styles.messageField}`}>
            <h4 className={styles.fieldName}>Mensagem</h4>
            <textarea name='message' className={styles.fieldInput} spellCheck={false} />
          </div>
          <MissingInformationSpan />
          <button
           type='submit' 
           className={styles.submitButton}
           disabled={isSendingEmail}
          >
            { isSendingEmail ? 'Carregando...' : 'Enviar' }
          </button>
        </form>
      </div>
      <div className={styles.successPopup}>
        Email enviado com sucesso
      </div>
      <div className={styles.errorPopup}>
        Algo deu errado
      </div>
    </section>
  )
}
