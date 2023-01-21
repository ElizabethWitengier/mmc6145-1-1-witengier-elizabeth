import styles from '../styles/home.module.css'
import { useSearchParams } from 'react-router-dom'


  const projects = [
    'News Website', 
    'Learning Journey Infographic',
    'Learning Journey Branding',
    'The Crafty Hopper Website'
  ];

  export default function Project() {
    const projectList = projects.map(titles => 
      <li> {titles} </li>
    );
    return
      <ul>{titles}</ul>
}