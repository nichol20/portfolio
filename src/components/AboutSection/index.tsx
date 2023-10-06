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
            Desde muito cedo, sempre gostei muito de jogos, o que me levou a minha primeira incursão no mundo da tecnologia, explorando a criação de games usando Java e, mais tarde, a plataforma Unity de desenvolvimento.
          </p>
          <p>
            Entretanto, minha curiosidade me levou a explorar outros horizontes, e foi assim que me aventurei no Desenvolvimento Web. Essa jornada me cativou com suas estruturas complexas e tecnologias inovadoras, o que me inspirou a mergulhar ainda mais fundo nesse campo.
          </p>
          <p>
            Desde do começo de 2022, tenho estado imerso em meus estudos de Desenvolvimento Web, tanto na frente do desenvolvimento (Frontend) quanto nos bastidores (Backend).
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
