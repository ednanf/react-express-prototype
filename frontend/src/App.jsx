import { Outlet } from 'react-router-dom';

import Navbar from './components/Header';

import './App.css';

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className='main-body'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
