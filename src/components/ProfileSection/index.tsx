import { profilePhoto, sendIcon, mouseIcon, arrowDownIcon } from '../../assets/images'

import styles from './style.module.scss'

export const ProfileSection = () => {
  return (
    <section className={styles.profile} id="profile">
      <div className={styles.mainContent}>
        <div className={styles.description}>
          <h3 className={styles.greetings}>Olá, Eu sou o Nicholas</h3>
          <span className={styles.text}>
            Olá, sou o Nicholas, um apaixonado por tecnologia e estudo programação desde 2021. Minha jornada começou com a programação de jogos, que logo se expandiu para o desenvolvimento web e até me levou a explorar o fascinante mundo da inteligência artificial. Hoje, meu foco está em ser um Desenvolvedor de Software, por isso sigo estudando tecnologias como Typescript, React, Next.js, Node.js, SQL, MongoD, Docker, Golang, Python e outras.
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
        <img src={mouseIcon} alt="mouse" className={styles.mouseIcon} />
        <span>Role para baixo</span>
        <img src={arrowDownIcon} alt="arrow down" className={styles.arrowdownIcon} />
      </div>
    </section>
  )
}

