import React from 'react'

import { profilePhoto, sendIcon, mouseIcon, arrowDownIcon } from '../../assets/images'
import styles from './style.module.scss'

export const ProfileSection = () => {
  return (
    <section className={styles.profile} id="Home">
      <div className={styles.main_content}>
        <div className={styles.description}>
          <h3 className={styles.greetings}>Hi, I am Nicholas</h3>
          <span className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quis, perferendis explicabo expedita corporis recusandae reprehenderit modi quisquam vero minima, fuga dignissimos. Facilis earum ex voluptates, sequi quae nihil culpa!
          </span>

          <a href='#Contact' className={styles.contact_link}>
            <span>Contact me</span>
            <img src={sendIcon} alt='send' />
          </a>
        </div>
        <div className={styles.photo}>
          <img src={profilePhoto} alt="profile photo" />
        </div>
      </div>

      <div className={styles.scrolldown_box}>
          <img src={mouseIcon} alt="mouse" className={styles.mouse_icon}/>
          <span>Scroll down</span>
          <img src={arrowDownIcon} alt="arrow down" className={styles.arrowdown_icon}/>
        </div>
    </section>
  )
}

