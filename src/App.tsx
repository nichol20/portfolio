import { useContext } from 'react'

import { Header } from './components/Header'
import { ProfileSection } from './components/ProfileSection'
import { SkillsSection } from './components/SkillsSection'
import { AboutSection } from './components/AboutSection'
import { ContactMeSection } from './components/ContactMeSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ThemeContext } from './contexts/Theme'

import styles from './styles/App.module.scss'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.app} data-theme={theme}>
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
