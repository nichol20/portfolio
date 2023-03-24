import React, { useState } from 'react'

import { mainProjects } from '../../data/projects'

import styles from './style.module.scss'

export const MainProjects = () => {
  const [ currentBanner, setCurrentBanner ] = useState(0)

  const nextBanner = () => {
    const slides = (document.querySelectorAll(`.${styles.banner}`) as NodeListOf<HTMLLIElement>)
    const newCurrentBanner = (currentBanner + 1) % slides.length

    changeCurrentBanner(newCurrentBanner)
  }

  const previousBanner = () => {
    const slides = (document.querySelectorAll(`.${styles.banner}`) as NodeListOf<HTMLLIElement>)
    const newCurrentBanner = (currentBanner - 1) < 0 ? (slides.length - 1) : (currentBanner - 1)

    changeCurrentBanner(newCurrentBanner)
  }

  const changeCarouselFocus = (index: number) => {
    const carouselEl = (document.querySelector(`.${styles.carousel}`) as HTMLDivElement)
    carouselEl.childNodes.forEach(el => {
      (el as HTMLDivElement).classList.remove(styles.focus)
    })

    ;(carouselEl.childNodes[index] as HTMLDivElement).classList.add(styles.focus)
  }

  const changeCurrentBanner = (newIndex: number) => {
    const slides = (document.querySelectorAll(`.${styles.banner}`) as NodeListOf<HTMLLIElement>)
    slides[currentBanner].style.opacity = '0'
    slides[currentBanner].style.pointerEvents = 'none'

    setCurrentBanner(() => {
      slides[newIndex].style.opacity = '1'
      slides[newIndex].style.pointerEvents = 'all'
      changeCarouselFocus(newIndex)
      return newIndex
    })
  }
  
  return (
    <div className={styles.mainProjects}>
      <div className={styles.bannersContainer}>
        {mainProjects.map((project, index) => (
          <div className={styles.banner} key={index}>
            <div className={styles.photoBox}>
              <img src={project.image} alt={project.title} className={styles.photo} />
            </div>
    
            <div className={styles.info}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.linksBox}>
                <a href={project.github_link} className={styles.githubLink} target="_blank">Github</a>
                {project.website_link && 
                <a href={project.website_link} className={styles.websiteLink} target="_blank">Link</a>}
              </div>
            </div>
          </div>
        ))}
        <div className={`${styles.chevronBox} ${styles.backward}`} onClick={previousBanner}>
          <div></div>
        </div>
        <div className={`${styles.chevronBox} ${styles.forward}`} onClick={nextBanner}>
          <div></div>
        </div>
      </div>
      <div className={styles.carousel}>
        {mainProjects.map((_, index) => ( 
          <div
            className={index === 0 ? styles.focus : ''} 
            key={index} 
            onClick={() => changeCurrentBanner(index)}
          />
        ))}
      </div>
    </div>
  )
}
