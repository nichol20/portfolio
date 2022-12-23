import React, { useState } from 'react'

import { mainProjects } from '../../data/projects'
import { SlideList } from './SlideList'

import styles from './style.module.scss'

export const MainProjects = () => {
  const [ timeoutId, setTimeoutId ] = useState<NodeJS.Timeout>()

  const startTimeout = () => {
    if(typeof timeoutId === 'number') clearTimeout(timeoutId)

    const tId = setTimeout(() => {
      changeCurrentBanner(0)
      setTimeoutId(undefined)
    }, 20000)

    setTimeoutId(tId)
  }

  const slideRight = () => {
    const slideListEl = (document.querySelector(`.${styles.slide_list}`) as HTMLUListElement)
    const bannersEl = (document.querySelector(`.${styles.banners}`) as HTMLDivElement)
    const slideListMaxOffsetLeft = (bannersEl.clientWidth * (slideListEl.childElementCount - 1) * -1)
    const nextOffsetLeft = slideListEl.offsetLeft - bannersEl.clientWidth
    const carouselIndex = Math.abs(nextOffsetLeft / bannersEl.clientWidth)

    // returns if the previous animation is not completely finished
    if(carouselIndex % 1 !== 0) return

    startTimeout()

    if(nextOffsetLeft < slideListMaxOffsetLeft) {
      changeCarouselFocus(0)
      return slideListEl.style.left = `0px`
    }

    changeCarouselFocus(carouselIndex)
    slideListEl.style.left = `${nextOffsetLeft}px`
  }
  
  const slideLeft = () => {
    const slideListEl = (document.querySelector(`.${styles.slide_list}`) as HTMLUListElement)
    const bannersEl = (document.querySelector(`.${styles.banners}`) as HTMLDivElement)
    const slideListMaxOffsetLeft = (bannersEl.clientWidth * (slideListEl.childElementCount - 1) * -1)
    const nextOffsetLeft = slideListEl.offsetLeft + bannersEl.clientWidth
    const carouselIndex = Math.abs(nextOffsetLeft / bannersEl.clientWidth)
    const lastCarouselIndex = slideListEl.childElementCount - 1

    // returns if the previous animation is not completely finished
    if(carouselIndex % 1 !== 0) return

    startTimeout()

    if(nextOffsetLeft > 0) {
      changeCarouselFocus(lastCarouselIndex)
      return slideListEl.style.left = `${slideListMaxOffsetLeft}px`
    }

    changeCarouselFocus(carouselIndex)
    slideListEl.style.left = `${nextOffsetLeft}px`
  }

  const changeCarouselFocus = (index: number) => {
    const carouselEl = (document.querySelector(`.${styles.carousel}`) as HTMLDivElement)
    carouselEl.childNodes.forEach(el => {
      (el as HTMLDivElement).classList.remove(styles.focus)
    })

    ;(carouselEl.childNodes[index] as HTMLDivElement).classList.add(styles.focus)
  }
  
  const changeCurrentBanner = (index: number) => {
    const slideListEl = (document.querySelector(`.${styles.slide_list}`) as HTMLUListElement)
    const bannersEl = (document.querySelector(`.${styles.banners}`) as HTMLDivElement)
    const newOffsetLeft = bannersEl.clientWidth * index * -1

    slideListEl.style.left = `${newOffsetLeft}px`
    changeCarouselFocus(index)
  }
  
  return (
    <div className={styles.main_projects}>
      <div className={styles.banners}>
        <div className={`${styles.chevron_box} ${styles.forward}`} onClick={slideRight}>
          <div></div>
        </div>
        <div className={`${styles.chevron_box} ${styles.backward}`} onClick={slideLeft}>
          <div></div>
        </div>
        <SlideList />
      </div>
      <div className={styles.carousel}>
        {
          mainProjects.map((_, index) => {
            if(index === 0) return <div className={styles.focus} key={index} onClick={() => changeCurrentBanner(index)}/>

            return <div key={index} onClick={() => changeCurrentBanner(index)}/>
          })
        }
      </div>
    </div>
  )
}
