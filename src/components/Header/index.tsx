import React, { useEffect } from 'react'

import styles from './style.module.scss'

const sections = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Contact"
]

export const Header = () => {

  const changeSectionHighlightInHeader = () => {
    const sectionElements = document.querySelectorAll('section[id]')
    
    sectionElements.forEach(sectionEl => {
      const headerOffset = 130
      const sectionHeight = (sectionEl as HTMLElement).offsetHeight
      const sectionTop = (sectionEl as HTMLElement).offsetTop - headerOffset
      const sectionId = sectionEl.getAttribute('id')

      const navLink = document.querySelector(`a[href*=${sectionId}]`)

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
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
    const buttonEl = document.querySelector(`.${styles.toggle_menu}`)
    buttonEl?.classList.remove(styles.active)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeSectionHighlightInHeader)
  }, [])

  return (
    <header className={styles.header}>
      <h2>Nicholas</h2>
      
      <nav className={styles.nav_bar}>
        <button className={styles.toggle_menu} onClick={toggleMenu}></button>
        <ul className={styles.nav_list}>
          {
            sections.map((section, index) => {
              return (
                <li className={styles.nav_item} key={index}>
                  <a
                   href={`#${section}`} 
                   className={`${styles.link}`}
                   onClick={closeMenu}
                  >{section}</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}