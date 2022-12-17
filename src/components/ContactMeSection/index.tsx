import React from 'react'

import { mailIcon, phoneIcon, locationIcon } from '../../assets'
import styles from './style.module.scss'

export const ContactMeSection = () => {

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const formData =  new FormData(event.currentTarget)
    const inputFields: NodeListOf<HTMLInputElement | HTMLTextAreaElement> = document.querySelectorAll(`.${styles.field_input}`)
    
    console.log({
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    })

    inputFields.forEach(inputEl => inputEl.value = '')
  }

  return (
    <section className={styles.contactme_section} id="Contact">
      <div className={styles.header}>
        <h2 className={styles.section_title}>Contact Me</h2>
        <h3 className={styles.section_subtitle}>get in touch</h3>
      </div>

      <div className={styles.content}>
        <div className={styles.information_box}>
          <div className={styles.contact_info}>
            <img src={phoneIcon} alt="phone" className={styles.icon} />
            <div className={styles.title_box}>
              <h3>Phone</h3>
              <span>+ 55 &#40;88&#41; 99933-1832</span>
            </div>
          </div>
          <div className={styles.contact_info}>
            <img src={mailIcon} alt="phone" className={styles.icon} />
            <div className={styles.title_box}>
              <h3>Email</h3>
              <span>nick.nogue28@outlook.com</span>
            </div>
          </div>
          <div className={styles.contact_info}>
            <img src={locationIcon} alt="phone" className={styles.icon} />
            <div className={styles.title_box}>
              <h3>Location</h3>
              <span>são paulo, sp</span>
            </div>
          </div>
        </div>

        <form className={styles.email_form} onSubmit={sendEmail}>
          <div className={styles.field}>
            <h4 className={styles.field_name}>Email</h4>
            <input type="text" name='email' className={styles.field_input} />
          </div>
          <div className={styles.field}>
            <h4 className={styles.field_name}>Subject</h4>
            <input type="text" name='subject' className={styles.field_input} />
          </div>
          <div className={`${styles.field} ${styles.message_field}`}>
            <h4 className={styles.field_name}>Message</h4>
            <textarea name='message' className={styles.field_input} spellCheck={false} />
          </div>
          <button type='submit' className={styles.submit_button}>Submit</button>
        </form>
      </div>
    </section>
  )
}
