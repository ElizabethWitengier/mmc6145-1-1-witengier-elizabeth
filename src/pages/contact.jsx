import styles from '../styles/home.module.css'

export default function Contact() {
  return (
    <main>
      <h1 className={styles.placeholder}>Let's Get In Touch</h1>
      <h3 className={styles.placeholder}>Available for summer design projects!</h3>
      <p className={styles.placeholder}>Reach me on my main social links:</p>
        <ul>
          <li>
            <a href="https://www.canva.com/design/DAFMUZp6zng/IX1iqir9_G7ZduK8GPjYFg/view?utm_content=DAFMUZp6zng&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu">Website</a>
          </li>
          <li>  
            <a href="https://www.linkedin.com/in/elizabethwitengier/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/ElizabethWitengier">Github</a>
          </li>
        </ul>
    </main>
  )
}