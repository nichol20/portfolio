import React, { useEffect, useState } from 'react'
import { Repository } from '../../types/data'
import { LatestProjects } from './LatestProjects'

import { MainProjects } from './MainProjects'

import styles from './style.module.scss'

export const ProjectsSection = () => {
  const [ tab, setTab ] = useState('mainTab')
  const [ latestRepos, setLatestRepos ] = useState<Repository[]>([])

  const handleTab = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const tabsEl = (document.querySelector(`.${styles.tabs}`) as HTMLElement)

    tabsEl.childNodes.forEach(el => {
      (el as HTMLSpanElement).classList.remove(styles.active)
    })

    event.currentTarget.classList.add(styles.active)
    setTab(event.currentTarget.id)
  }

  const Tabs = () => {
    if(tab === 'mainTab') return <MainProjects />
    else if(tab === 'latestTab') return <LatestProjects repos={latestRepos} />
    else return null
  }

  useEffect(() => {
    async function getRepos() {
      const res = await fetch('https://api.github.com/users/nichol20/repos')
      const data: Repository[] = await res.json()
      const latest = data.sort((a, b) => {
        if(a.name === 'nichol20') return 1
        else if(b.name === 'nichol20') return -1
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      }).slice(0, 4)
      setLatestRepos(latest)
    }

    getRepos()
  }, [])

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Projetos</h2>
        <h3 className={styles.sectionSubtitle}>alguns projetos</h3>
      </div>
      <div className={styles.content}>  
        <nav className={styles.tabs}>
          <span className={styles.active} id="mainTab" onClick={handleTab}>Principais</span>
          <span id="latestTab" onClick={handleTab}>Recentes</span>
        </nav>
        <Tabs />   
      </div>
    </section>
  )
}
