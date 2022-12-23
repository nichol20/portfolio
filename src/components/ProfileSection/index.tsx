import React from 'react'

import { profilePhoto, sendIcon, mouseIcon, arrowDownIcon } from '../../assets/images'
import styles from './style.module.scss'

export const ProfileSection = () => {
  return (
    <section className={styles.profile} id="profile">
      <div className={styles.main_content}>
        <div className={styles.description}>
          <h3 className={styles.greetings}>Olá, Eu sou o Nicholas</h3>
          <span className={styles.text}>
            Obcecado por conhecimentos, amante da tecnologia e ansioso para progredir minhas capacidades. Rejeito a possibilidade de passar um dia sem continuar evoluindo. Ser esforçado, aprendizado rápido e inteligência emocional são meus pontos fortes.
          </span>

          <a href='#contact' className={styles.contact_link}>
            <span>Me contate</span>
            <img src={sendIcon} alt='send' />
          </a>
        </div>
        <div className={styles.photo}>
          <img src={profilePhoto} alt="profile photo" />
        </div>
      </div>

      <div className={styles.scrolldown_box}>
          <img src={mouseIcon} alt="mouse" className={styles.mouse_icon}/>
          <span>Role para baixo</span>
          <img src={arrowDownIcon} alt="arrow down" className={styles.arrowdown_icon}/>
        </div>
    </section>
  )
}

