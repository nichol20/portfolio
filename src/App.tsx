import { useState } from 'react'
import { Header } from './components/Header'
import { ProfileSection } from './components/ProfileSection'
import { SkillsSection } from './components/SkillsSection'

import styles from './styles/App.module.scss'
import { AboutSection } from './components/AboutSection'
import { ContactMeSection } from './components/ContactMeSection'
import { ProjectsSection } from './components/ProjectsSection'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ProfileSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactMeSection />
    </div>
  )
}

export default App
