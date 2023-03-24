import { profilePhoto, sendIcon, mouseIcon, arrowDownIcon } from '../../assets/images'

import styles from './style.module.scss'

export const ProfileSection = () => {
  return (
    <section className={styles.profile} id="profile">
      <div className={styles.mainContent}>
        <div className={styles.description}>
          <h3 className={styles.greetings}>Olá, Eu sou o Nicholas</h3>
          <span className={styles.text}>
            Obcecado por conhecimentos, amante da tecnologia e ansioso para progredir minhas capacidades. Rejeito a possibilidade de passar um dia sem continuar evoluindo. Ser esforçado, aprendizado rápido e inteligência emocional são meus pontos fortes.
          </span>

          <a href='#contact' className={styles.contactLink}>
            <span>Me contate</span>
            <img src={sendIcon} alt='send' />
          </a>
        </div>
        <div className={styles.photo}>
          <img src={profilePhoto} alt="profile photo" />
        </div>
      </div>

      <div className={styles.scrolldownBox}>
          <img src={mouseIcon} alt="mouse" className={styles.mouseIcon}/>
          <span>Role para baixo</span>
          <img src={arrowDownIcon} alt="arrow down" className={styles.arrowdownIcon}/>
        </div>
    </section>
  )
}

