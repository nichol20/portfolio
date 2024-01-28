import React, { useContext, useEffect, useState } from 'react'
import { Repository } from '../../types/data'
import { LatestProjects } from './LatestProjects'

import { MainProjects } from './MainProjects'

import styles from './style.module.scss'
import { ThemeContext } from '../../contexts/Theme'
import { useTranslation } from 'react-i18next'

export const ProjectsSection = () => {
  const { theme } = useContext(ThemeContext)
  const { t } = useTranslation()
  const [tab, setTab] = useState('mainTab')
  const [latestRepos, setLatestRepos] = useState<Repository[]>([])

  const handleTab = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    const tabsEl = (document.querySelector(`.${styles.tabs}`) as HTMLElement)

    tabsEl.childNodes.forEach(el => {
      (el as HTMLSpanElement).classList.remove(styles.active)
    })

    event.currentTarget.classList.add(styles.active)
    setTab(event.currentTarget.id)
  }

  const shouldShowProject = (name: string) => {
    return !['nichol20', 'portfolio', 'portfolio-server'].includes(name)
  }

  const Tabs = () => {
    if (tab === 'mainTab') return <MainProjects />
    else if (tab === 'latestTab') return <LatestProjects repos={latestRepos} />
    else return null
  }

  useEffect(() => {
    const controller = new AbortController()

    async function getRepos() {
      try {
        const res = await fetch('https://api.github.com/users/nichol20/repos', { signal: controller.signal })
        const data: Repository[] = await res.json()
        const latest = data.sort((a, b) => {
          if (!shouldShowProject(a.name)) return 1
          else if (!shouldShowProject(b.name)) return -1
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        }).slice(0, 4)
        setLatestRepos(latest)
      } catch (error: any) {
        if (error.name === 'AbortError') {

        }
      }
    }

    if (latestRepos.length === 0) {
      getRepos()
    }

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <section className={styles.projectsSection} id="projects" data-theme={theme}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>{t("projects.title")}</h2>
        <h3 className={styles.sectionSubtitle}>{t("projects.subtitle")}</h3>
      </div>
      <div className={styles.content}>
        <nav className={styles.tabs}>
          <span className={styles.active} id="mainTab" onClick={handleTab}>{t("projects.tabs.main")}</span>
          <span id="latestTab" onClick={handleTab}>{t("projects.tabs.recent")}</span>
        </nav>
        <Tabs />
      </div>
    </section>
  )
}
