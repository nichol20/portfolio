import React from 'react'

import styles from './style.module.scss'

interface SkillProps {
  percentage: number
  name: string
  logoIcon: string
}

export const SkillListItem = ({ logoIcon, name, percentage }: SkillProps) => {
  return (
    <div className={styles.skill}>
      <div className={styles.title}>
        <img src={logoIcon} alt={name} className={styles.logoIcon} />
        <span className={styles.name}>{name}</span>
      </div>
    </div>
  )
}
