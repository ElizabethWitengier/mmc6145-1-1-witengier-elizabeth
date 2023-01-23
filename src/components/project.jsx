import styles from '../styles/portfolio.module.css'


export default function Project({project, name, date, info, photo}) {
  
  return (
    <div className={styles.portfolio_container}>
      <h2 style={{color: "black"}}>{project}</h2>
      <div className={styles.portfolio_date}>{date}</div>
      <p style={{color: "black"}}>{info}</p>
      <img src={photo}></img>
      <br></br>
    </div>
  )
}
 
  
  