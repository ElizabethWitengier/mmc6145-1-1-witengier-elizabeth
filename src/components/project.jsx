import styles from '../styles/portfolio.module.css'


export default function Project({project, name, date, info}) {
  
  return (
    <div className={styles.portfolio_container}>
      <h2 style={{color: "black"}}>{project}</h2>
      <div className={styles.portfolio_date}>{date}</div>
      <p style={{color: "black"}}>{info}</p>
    </div>
  )
}
 
  
  