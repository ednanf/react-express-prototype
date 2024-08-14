import { Outlet } from 'react-router-dom';

import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <div className='min-h-screen w-screen bg-mine-shaft-50 font-sans text-mine-shaft-950'>
      <nav className='sticky top-0'>
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
