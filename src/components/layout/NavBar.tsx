import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Inicio", end: true },
  { to: "/menu", label: "Carta", end: false },
  { to: "/galeria", label: "Galería", end: false },
  { to: "/ubicacion", label: "Ubicación", end: false },
];

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <div className="brand-mark">
          <i className="fas fa-leaf" />
        </div>
        <div className="brand-text">
          <span className="name">El Palmar</span>
          <span className="sub">Puerto Vallarta</span>
        </div>
      </Link>

      <ul className="nav-menu">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`.trim()
              }
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
