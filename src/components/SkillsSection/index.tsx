import React, { useEffect, useState } from 'react'
import { SkillListItem } from '../SkillListItem'

import { codeSlashIcon, serverIcon, chevronDownIcon, chipIcon } from '../../assets'

import styles from './style.module.scss'
import { backend, frontend, general } from '../../data/skills'

export const SkillsSection = () => {

  const toggleList = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const listElement = (event.currentTarget.parentElement?.children[1] as HTMLDivElement)

    listElement.classList.toggle(styles.active)
  }

  const FrontendList = () => {
    const elementArray = Object.keys(frontend).map((key, index) => {
      return <SkillListItem
       percentage={frontend[key].percentage}
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
       percentage={backend[key].percentage}
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
       percentage={general[key].percentage}
       logoIcon={general[key].icon}
       name={general[key].name} 
       key={index}
      />
    })

    return (<>{elementArray}</>)
  }

  return (
    <section className={styles.skills_section} id="Skills">
      <div className={styles.header}>
        <h2 className={styles.section_title}>Skills</h2>
        <h3 className={styles.section_subtitle}>Meus níveis de habilidades</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.category_container}>
          <div className={styles.box} onClick={toggleList}>
            <img src={codeSlashIcon} alt="code slash" />
            <span className={styles.title}>Frontend</span>
            <img src={chevronDownIcon} alt="chevron down" className={styles.chevron_icon}/>
          </div>
          <div className={styles.list}>
            <FrontendList />
          </div>
        </div>
        <div className={styles.category_container}>
          <div className={styles.box} onClick={toggleList}>
            <img src={serverIcon} alt="server" />
            <span className={styles.title}>Backend</span>
            <img src={chevronDownIcon} alt="chevron down" className={styles.chevron_icon}/>
          </div>
          <div className={styles.list}>
            <BackendList />
          </div>
        </div>
        <div className={styles.category_container}>
          <div className={styles.box} onClick={toggleList}>
            <img src={chipIcon} alt="chip" />
            <span className={styles.title}>General</span>
            <img src={chevronDownIcon} alt="chevron down" className={styles.chevron_icon}/>
          </div>
          <div className={styles.list}>
            <GeneralList />
          </div>
        </div>
      </div>
    </section>
  )
}
