import { Outlet } from 'react-router-dom';

import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className='min-h-screen w-screen bg-mine-shaft-50 font-sans text-mine-shaft-950'>
      <nav className='sticky top-0'>
        <Header />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
