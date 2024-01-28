import { useContext } from 'react'
import { githubIcon, linkedinIcon } from '../../assets/images'
import curriculumPdf from '../../assets/pdf/Nicholas-curriculo.pdf'
import styles from './style.module.scss'
import { ThemeContext } from '../../contexts/Theme'
import { useTranslation } from 'react-i18next'

export const AboutSection = () => {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <section className={styles.aboutSection} id="about" data-theme={theme}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>{t("about.title")}</h2>
        <h3 className={styles.sectionSubtitle}>{t("about.subtitle")}</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.textBox}>
          <p>{t("about.description.part1")}</p>
          <p>{t("about.description.part2")}</p>
          <p>{t("about.description.part3")}</p>
        </div>
        <div className={styles.socialMedias}>
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
        <a href={curriculumPdf} download className={styles.downloadCvLink}>Download CV</a>
      </div>
    </section>
  )
}
