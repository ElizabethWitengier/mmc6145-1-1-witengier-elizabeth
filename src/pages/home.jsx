import styles from '../styles/home.module.css'
import Project from '../components/project'

export default function Home() {
  return (
    <main>
      <h1>Elizabeth Witengier</h1>
      <h2 style={{ color: "orange"}}>Designer & Content Creator</h2>
      <section className={styles.portfoliocontainer}>
        <h2>Portfolio</h2>
        <div className={styles.projectcontainer}>
          <h3>New Website</h3>
          render(Project);
        </div>
      </section>
    
   

    </main>
  )
}
