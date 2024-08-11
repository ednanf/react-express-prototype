import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar_bg'>
      <div className='left-side'>
        <h2 className='brand'>GameDex</h2>
      </div>
      <div className='right-side'>
        <a href='/' className='navbar-link'>
          Home
        </a>
        <a href='/register' className='navbar-link'>
          Register
        </a>
        <a href='/login' className='navbar-link'>
          Login
        </a>
      </div>
    </div>
  );
}

export default Navbar;
