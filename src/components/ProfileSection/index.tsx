import { useContext } from 'react'
import { profilePhoto, sendIcon, mouseIcon, arrowDownIcon } from '../../assets/images'

import styles from './style.module.scss'
import { ThemeContext } from '../../contexts/Theme'
import { useTranslation } from 'react-i18next'

export const ProfileSection = () => {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  return (
    <section className={styles.profile} id="profile" data-theme={theme}>
      <div className={styles.mainContent}>
        <div className={styles.description}>
          <h3 className={styles.greetings}>{t("profile.greetings")}</h3>
          <span className={styles.text}>{t("profile.introduction")}</span>

          <a href='#contact' className={styles.contactLink}>
            <span>{t("profile.contact_me")}</span>
            <img src={sendIcon} alt='send' />
          </a>
        </div>
        <div className={styles.photo}>
          <img src={profilePhoto} alt="profile photo" />
        </div>
      </div>

      <div className={styles.scrolldownBox}>
        <img src={mouseIcon} alt="mouse" className={styles.mouseIcon} />
        <span>{t("profile.scroll_down")}</span>
        <img src={arrowDownIcon} alt="arrow down" className={styles.arrowdownIcon} />
      </div>
    </section>
  )
}

