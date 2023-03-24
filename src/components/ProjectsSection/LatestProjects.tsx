import { Repository } from '../../types/data'

import { cssIcon, htmlIcon, javaIcon, javascriptIcon, typescriptIcon } from '../../assets/images' 
import styles from './style.module.scss'

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
  CSS: cssIcon,
  HTML: htmlIcon
}

export const LatestProjects = ({ repos }: LatestProjectsProps) => {
  return (
    <div className={styles.latestProjects}>
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
