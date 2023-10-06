import React, { useRef, useState } from 'react'
import axios from 'axios'

import { mailIcon, phoneIcon, locationIcon } from '../../assets/images'
import styles from './style.module.scss'
import { ToastContainer, ToastRef } from '../ToastContainer'

export const ContactMeSection = () => {
  const [missingInformationError, setMissingInformationError] = useState(false)
  const [isSendingEmail, setIsSendingEmail] = useState(false)
  const toastRef = useRef<ToastRef>(null)

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSendingEmail(true)

    const formData = new FormData(event.currentTarget)
    const inputFields: NodeListOf<HTMLInputElement | HTMLTextAreaElement> = document.querySelectorAll(`.${styles.fieldInput}`)

    for (const pair of formData.entries()) {
      if (pair[1].toString().length === 0) {
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

      toastRef.current?.toast('Mensagem enviada com sucesso', 'Sucesso', 'success')
      setMissingInformationError(false)
      inputFields.forEach(inputEl => inputEl.value = '')
    } catch (error) {
      toastRef.current?.toast('Não foi possível enviar a mensagem', 'Erro no envio', 'error')
    }

    setIsSendingEmail(false)
  }

  const MissingInformationSpan = () => {
    if (missingInformationError)
      return <span className={styles.missingInformationMessage}>Por favor preencha todos os campos</span>
    else return null
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
            {isSendingEmail ? 'Carregando...' : 'Enviar'}
          </button>
        </form>
      </div>
      <ToastContainer ref={toastRef} />
    </section>
  )
}
