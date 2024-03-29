import React, { useContext, useEffect } from 'react'

import styles from './style.module.scss'
import { ThemeToggle } from '../ThemeToggle'
import { ThemeContext } from '../../contexts/Theme'
import { useTranslation } from 'react-i18next'
import { LanguageSelector } from '../LanguageSelector'

interface Sections {
  [id: string]: string
}

export const Header = () => {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()

  const sections: Sections = {
    profile: t("header.sections.profile"),
    about: t("header.sections.about"),
    skills: t("header.sections.skills"),
    projects: t("header.sections.projects"),
    contact: t("header.sections.contact")
  }

  const changeSectionHighlightInHeader = () => {
    const sectionElements = document.querySelectorAll('section[id]')

    sectionElements.forEach(sectionEl => {
      const headerOffset = 130
      const sectionHeight = (sectionEl as HTMLElement).offsetHeight
      const sectionTop = (sectionEl as HTMLElement).offsetTop - headerOffset
      const sectionId = sectionEl.getAttribute('id')

      const navLink = document.querySelector(`a[href*=${sectionId}]`)

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add(styles.active)
      } else {
        navLink?.classList.remove(styles.active)
      }
    })
  }

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const buttonEl = event.currentTarget

    buttonEl.classList.toggle(styles.active)
  }

  const closeMenu = () => {
    const buttonEl = document.querySelector(`.${styles.toggleMenu}`)
    buttonEl?.classList.remove(styles.active)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeSectionHighlightInHeader)
  }, [])

  return (
    <header className={styles.header} data-theme={theme}>
      <h2 className={styles.title}>{t("header.title")}</h2>

      <nav className={styles.navBar}>
        <button className={styles.toggleMenu} onClick={toggleMenu}></button>
        <ul className={styles.navList}>
          {Object.keys(sections).map((sectionId, index) => (
            <li className={styles.navItem} key={index}>
              <a
                href={`#${sectionId}`}
                className={`${styles.link}`}
                onClick={closeMenu}
              >{sections[sectionId]}</a>
            </li>
          ))}
          <ThemeToggle />
          <LanguageSelector />
        </ul>
      </nav>
    </header>
  )
}