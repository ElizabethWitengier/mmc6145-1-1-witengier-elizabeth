import { Link } from 'react-router-dom'
import styles from '../styles/header.module.css'


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <h3 className={styles.name}>Elizabeth Witengier</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
    </header>
  )
}