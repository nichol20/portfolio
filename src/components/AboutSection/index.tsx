import { githubIcon, linkedinIcon } from '../../assets/images'
import curriculumPdf from '../../assets/pdf/Nicholas-curriculo.pdf'
import styles from './style.module.scss'

export const AboutSection = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Sobre</h2>
        <h3 className={styles.sectionSubtitle}>um pouco sobre mim</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.textBox}>
          <p>
            Eu sempre fui muito fã de jogos, então meu primeiro contato com a área de tecnologia foi através da criação de games, quando tentei criar os meus próprios utilizando Java e mais futuramente Unity &#40;plataforma de desenvolvimento&#41;.
          </p>
          <p>
            Porém, estava curioso sobre outros assuntos e resolvi experimentar Web Development. A partir daí me apaxonei por estruturas e tecnologias complexas e decidi me aprofundar mais no assunto. 
          </p>
          <p>
            Acredito no autodidatismo, e faz cerca de 1 ano desde que iniciei meus estudos em Desenvolvimento Web &#40;tanto Frontend quanto Backend&#41;. Hoje em dia busco minha primeira experiência profissional.
          </p>
        </div>
        <div className={styles.socialMedias}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a
               href="https://github.com/nichol20" 
               target="_blank" 
               className={styles.link}
              >
                <img src={githubIcon} alt="github" />
              </a>
            </li>
            <li className={styles.item}>
              <a
               href="https://www.linkedin.com/in/nicholas-nogueira-80a99322a/" 
               target="_blank" 
               className={styles.link}
              >
                <img src={linkedinIcon} alt="linkedin" />
              </a>
            </li>
          </ul>
        </div>
        <a href={curriculumPdf} download className={styles.downloadCvLink}>Download CV</a>
      </div>
    </section>
  )
}
