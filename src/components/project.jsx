import styles from '../styles/portfolio.module.css'


export default function Project() {
  const projects = [
    {
      id: 1,
      project: "Block by Block Website", 
      date: 2022,
      info: "This was an individual project created to design a website landing page"
    },
    {
      id: 2,
      project: "100 Days of Democracy",
      date: 2022,
      info: "The was an individual social media campaign created to promote 100 Days of Democracy"
    },
    {
      id: 3,
      project: "Florida Kids Eat Well Logo",
      date: 2021,
      info: "The was an individual project created to design a logo for a statewide initiative"
    },
    {
      id: 4, 
      project: "Toxic Exhibition Website",
      date: 2021,
      info: "The was an individual project created to teach about sustainable farming"
    }
  ]


  
  return (
    <div className={styles.protfolio_card}>
      <h1>Testing</h1>

      {projects.map(project => (
        <Project key={project.id} project={project.project} date={project.date} info={project.info} />
      ))}
    </div>
  )
}
  
  