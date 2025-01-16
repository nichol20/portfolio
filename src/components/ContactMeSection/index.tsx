import React, { useContext, useRef, useState } from 'react'
import axios from 'axios'

import { mailIcon, phoneIcon, locationIcon } from '../../assets/images'
import styles from './style.module.scss'
import { ThemeContext } from '../../contexts/Theme'
import { useTranslation } from 'react-i18next'
import { ToastContext } from '../../contexts/Toast'

export const ContactMeSection = () => {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const [missingInformationError, setMissingInformationError] = useState(false)
  const [isSendingEmail, setIsSendingEmail] = useState(false)
  const { toast } = useContext(ToastContext)

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    if (isSendingEmail) return
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
      await axios.post('https://portfolio-server-nichol20s-projects.vercel.app/email', {
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      })

      toast({
        message: t("contact.send_email.success.message"),
        title: t("contact.send_email.success.title"),
        status: 'success'
      })
      setMissingInformationError(false)
      inputFields.forEach(inputEl => inputEl.value = '')
    } catch (error) {
      console.log(error)
      toast({
        message: t("contact.send_email.error.message"),
        title: t("contact.send_email.error.title"),
        status: 'error'
      })
    }

    setIsSendingEmail(false)
  }

  const MissingInformationSpan = () => {
    if (missingInformationError)
      return <span className={styles.missingInformationMessage}>{t("contact.errors.missing_information")}</span>
    else return null
  }

  return (
    <section className={styles.contactSection} id="contact" data-theme={theme}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>{t("contact.title")}</h2>
        <h3 className={styles.sectionSubtitle}>{t("contact.subtitle")}</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.informationBox}>
          <div className={styles.contactInfo}>
            <img src={phoneIcon} alt="phone" className={styles.icon} />
            <div className={styles.titleBox}>
              <h3>{t("contact.information.phone")}</h3>
              <span>+ 55 &#40;88&#41; 99933-1832</span>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <img src={mailIcon} alt="phone" className={styles.icon} />
            <div className={styles.titleBox}>
              <h3>{t("contact.information.email")}</h3>
              <span>nick.nogue28@outlook.com</span>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <img src={locationIcon} alt="phone" className={styles.icon} />
            <div className={styles.titleBox}>
              <h3>{t("contact.information.location")}</h3>
              <span>Barro, CE</span>
            </div>
          </div>
        </div>

        <form className={styles.emailForm} onSubmit={sendEmail}>
          <div className={styles.field}>
            <h4 className={styles.fieldName}>{t("contact.form.email")}</h4>
            <input type="text" name='email' className={styles.fieldInput} />
          </div>
          <div className={styles.field}>
            <h4 className={styles.fieldName}>{t("contact.form.subject")}</h4>
            <input type="text" name='subject' className={styles.fieldInput} />
          </div>
          <div className={`${styles.field} ${styles.messageField}`}>
            <h4 className={styles.fieldName}>{t("contact.form.message")}</h4>
            <textarea name='message' className={styles.fieldInput} spellCheck={false} />
          </div>
          <MissingInformationSpan />
          <button
            type='submit'
            className={styles.submitButton}
            disabled={isSendingEmail}
          >
            {isSendingEmail ? t("contact.form.submit_button.loading") : t("contact.form.submit_button.send")}
          </button>
        </form>
      </div>
    </section>
  )
}
