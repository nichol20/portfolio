import { Repository } from '../../types/data'

import { cssIcon, golangIcon, htmlIcon, javaIcon, javascriptIcon, pythonIcon, typescriptIcon } from '../../assets/images'
import styles from './style.module.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/Theme'

interface LatestProjectsProps {
  repos: Repository[]
}

interface Icons {
  [language: string]: string
}

const icons: Icons = {
  TypeScript: typescriptIcon,
  JavaScript: javascriptIcon,
  Java: javaIcon,
  Python: pythonIcon,
  Go: golangIcon,
  CSS: cssIcon,
  HTML: htmlIcon
}

export const LatestProjects = ({ repos }: LatestProjectsProps) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={styles.latestProjects} data-theme={theme}>
      <ul className={styles.latestProjectList}>
        {repos.map((repo, index) => (
          <li className={styles.item} key={index}>
            <a href={repo.html_url} className={styles.link} target='_blank'>{repo.name}</a>
            {(repo.language || icons[repo.language]) && (
              <div className={styles.languageBox}>
                <img src={icons[repo.language]} alt={repo.name} />
                <span className={styles.languageName} >{repo.language}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
