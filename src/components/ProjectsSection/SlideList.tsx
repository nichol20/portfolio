import { mainProjects } from '../../data/projects'

import styles from './style.module.scss'

export const SlideList = () => {
  return (
    <ul className={styles.slide_list}>
      {
        mainProjects.map((project, index) => {
          return (
            <li className={styles.slide_item} key={index}>
              <div className={styles.photo_box}>
                <img src={project.image} alt={project.title} className={styles.photo} />
              </div>
      
              <div className={styles.info}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <a href={project.github_link} className={styles.link}>Github</a>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}