import React from 'react'

import { githubIcon, linkedinIcon } from '../../assets/images'
import curriculumPdf from '../../assets/pdf/Nicholas-curriculo.pdf'
import styles from './style.module.scss'

export const AboutSection = () => {
  return (
    <section className={styles.about_section} id="About">
      <div className={styles.header}>
        <h2 className={styles.section_title}>About</h2>
        <h3 className={styles.section_subtitle}>um pouco sobre mim</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.text_box}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ex reiciendis natus similique? Molestias, ipsa voluptatem repellendus quia expedita quasi soluta culpa tempore incidunt, dignissimos sed ea saepe optio quas!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique odio vitae facilis officiis minus. Accusantium corporis incidunt autem. Sapiente eos illum totam beatae sequi mollitia voluptate aliquid neque? Fugit, odio.
          </p>
        </div>
        <div className={styles.social_medias}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a
               href="https://github.com/nichol20" 
               target="_blank" 
               className={styles.link}
              >
                <img src={githubIcon} alt="github" />
              </a>
            </li>
            <li className={styles.item}>
              <a
               href="https://www.linkedin.com/in/nicholas-nogueira-80a99322a/" 
               target="_blank" 
               className={styles.link}
              >
                <img src={linkedinIcon} alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <a href={curriculumPdf} download className={styles.download_cv_link}>Download CV</a>
      </div>
    </section>
  )
}
