import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="container">
        <h3 className="name">Elizabeth Witengier</h3>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
    </header>
  )
}