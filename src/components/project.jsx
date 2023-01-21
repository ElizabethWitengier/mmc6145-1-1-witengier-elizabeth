import styles from '../styles/home.module.css'
import { useSearchParams } from 'react-router-dom';


  export default function Project(newsproject) {
    return newsproject.projectName + '' + newsproject.date;
  }
  
    const newsproject = {
      projectName: 'Block by Block Website',
      date: '2022'
    }
    

    const element = (
      
      <h3>
        Project: {Project(newsproject)}
      </h3>
    )


/* const branding = {
  projectName: 'Florida Kids Eat Well Branding',
  date: '2021'
}
const toxicproject = {
  projectName: 'Toxic: Our Food is Killing Us Exhibit',
  date: '2022'
}
const democracy = {
  projectName: '100 Days of Democracy Instrgram Campaign',
  date: '2022'
} */