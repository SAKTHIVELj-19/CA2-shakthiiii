import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
    <Link style={{ color: '#fff', margin: '10px' }} to="/activities">Activities</Link>
    <Link style={{ color: '#fff', margin: '10px' }} to="/filter">Filter</Link>
    <Link style={{ color: '#fff', margin: '10px' }} to="/stats">Stats</Link>
  </nav>
);

export default Navbar;