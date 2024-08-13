import { Outlet } from 'react-router-dom';

import Header from './components/Header';

import './App.css';

function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main className='main-body'>
        <Outlet />
      </main>
    </>
  );
}

export default App;
