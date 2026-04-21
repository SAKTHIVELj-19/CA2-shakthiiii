import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/activities', label: 'Activities' },
  { to: '/filter', label: 'Filter' },
  { to: '/stats', label: 'Stats' },
]

function Navbar() {
  return (
    <header className="topbar">
      <div>
        <p className="brand-kicker">Continuous Assessment 2</p>
        <h1 className="brand-title">Fitness Tracker Activities</h1>
      </div>

      <nav className="nav-links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link--active' : 'nav-link'
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
