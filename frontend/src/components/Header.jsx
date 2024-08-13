import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar_bg'>
      <div className='left-side'>
        <h2 className='brand'>GameDex</h2>
      </div>
      <div className='right-side'>
        <Link to='/' className='navbar-link'>
          Home
        </Link>
        <Link to='/games' className='navbar-link'>
          Games
        </Link>
        <Link to='/register' className='navbar-link'>
          Register
        </Link>
        <Link to='/login' className='navbar-link'>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
