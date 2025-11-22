import { Link, NavLink } from "react-router-dom";


export default function NavBar() {
  return (
    <nav className="nav">
      <Link className="brand" to="/">MovieApp</Link>
      <div className="links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/favorites" className={({ isActive }) => isActive ? "active" : ""}>Favorites</NavLink>
      </div>
    </nav>
  );
}
