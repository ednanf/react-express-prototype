import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/logo.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <header className='bg-mine-shaft-950'>
      <div className='flex items-center justify-between px-4 py-3'>
        <div>
          <img src={Logo} alt='Logo' className='h-16' />
        </div>
        <div>
          <button
            className='mt-2 text-mine-shaft-500 transition-colors duration-300 ease-in-out hover:text-mine-shaft-200 focus:outline-none'
            onClick={handleClick}
          >
            <svg
              className='size-8 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
            >
              {isOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} px-2 pb-4 pt-2`}>
        <NavLink
          to='/'
          className='block rounded px-2 py-1 font-semibold text-mine-shaft-500 transition-colors duration-75 ease-in-out hover:bg-mine-shaft-400 hover:text-mine-shaft-950'
        >
          Home
        </NavLink>
        <NavLink
          to='/'
          className='mt-1 block rounded px-2 py-1 font-semibold text-mine-shaft-500 transition-colors duration-75 ease-in-out hover:bg-mine-shaft-400 hover:text-mine-shaft-950'
        >
          Games
        </NavLink>
        <NavLink
          to='/'
          className='mt-1 block rounded px-2 py-1 font-semibold text-mine-shaft-500 transition-colors duration-75 ease-in-out hover:bg-mine-shaft-400 hover:text-mine-shaft-950'
        >
          Register
        </NavLink>
        <NavLink
          to='/'
          className='mt-1 block rounded px-2 py-1 font-semibold text-mine-shaft-500 transition-colors duration-75 ease-in-out hover:bg-mine-shaft-400 hover:text-mine-shaft-950'
        >
          Login
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
