import { NavLink } from 'react-router-dom';

import Logo from './Logo';

function Header() {
  return (
    <div className='w-ful sticky top-0 z-[20] mx-auto flex items-center justify-between bg-mine-shaft-950 p-6'>
      <Logo />
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/games'>Games</NavLink>
    </div>
  );
}

export default Header;
