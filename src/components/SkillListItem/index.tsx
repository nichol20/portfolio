import React, { useContext } from 'react'

import styles from './style.module.scss'
import { ThemeContext } from '../../contexts/Theme'

interface SkillProps {
  name: string
  logoIcon: string
}

export const SkillListItem = ({ logoIcon, name }: SkillProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.skill} data-theme={theme}>
      <div className={styles.title}>
        <img src={logoIcon} alt={name} className={styles.logoIcon} />
        <span className={styles.name}>{name}</span>
      </div>
    </div>
  )
}
