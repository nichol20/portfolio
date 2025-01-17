import React, { useContext } from 'react'
import { SkillListItem } from '../SkillListItem'

import { codeSlashIcon, serverIcon, chevronDownIcon, chipIcon } from '../../assets/images'

import styles from './style.module.scss'
import { backend, frontend, general } from '../../data/skills'
import { ThemeContext } from '../../contexts/Theme'
import { useTranslation } from 'react-i18next'

export const SkillsSection = () => {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  const toggleList = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const listElement = (event.currentTarget.parentElement?.children[1] as HTMLDivElement)

    listElement.classList.toggle(styles.active)
  }

  const FrontendList = () => {
    const elementArray = Object.keys(frontend).map((key, index) => {
      return <SkillListItem
        logoIcon={frontend[key].icon}
        name={frontend[key].name}
        key={index}
      />
    })

    return (<>{elementArray}</>)
  }

  const BackendList = () => {
    const elementArray = Object.keys(backend).map((key, index) => {
      return <SkillListItem
        logoIcon={backend[key].icon}
        name={backend[key].name}
        key={index}
      />
    })

    return (<>{elementArray}</>)
  }

  const GeneralList = () => {
    const elementArray = Object.keys(general).map((key, index) => {
      return <SkillListItem
        logoIcon={general[key].icon}
        name={general[key].name}
        key={index}
      />
    })

    return (<>{elementArray}</>)
  }

  return (
    <section className={styles.skillsSection} id="skills" data-theme={theme}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>{t("skills.title")}</h2>
        <h3 className={styles.sectionSubtitle}>{t("skills.subtitle")}</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.categoryContainer}>
          <div className={styles.box} onClick={toggleList}>
            <img src={codeSlashIcon} alt="code slash" />
            <span className={styles.title}>{t("skills.category.frontend")}</span>
            <img src={chevronDownIcon} alt="chevron down" className={styles.chevron_icon} />
          </div>
          <div className={styles.list}>
            <FrontendList />
          </div>
        </div>
        <div className={styles.categoryContainer}>
          <div className={styles.box} onClick={toggleList}>
            <img src={serverIcon} alt="server" />
            <span className={styles.title}>{t("skills.category.backend")}</span>
            <img src={chevronDownIcon} alt="chevron down" className={styles.chevron_icon} />
          </div>
          <div className={styles.list}>
            <BackendList />
          </div>
        </div>
        <div className={styles.categoryContainer}>
          <div className={styles.box} onClick={toggleList}>
            <img src={chipIcon} alt="chip" />
            <span className={styles.title}>{t("skills.category.general")}</span>
            <img src={chevronDownIcon} alt="chevron down" className={styles.chevron_icon} />
          </div>
          <div className={styles.list}>
            <GeneralList />
          </div>
        </div>
      </div>
    </section>
  )
}
