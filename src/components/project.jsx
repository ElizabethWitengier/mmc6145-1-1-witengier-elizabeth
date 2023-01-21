import styles from '../styles/home.module.css'
import { useParams } from 'react-router-dom'

export default function Project() {
  const {project1, project2, project3} = useParams()
  return 
      <p>This is my project {project1}.</p>
}