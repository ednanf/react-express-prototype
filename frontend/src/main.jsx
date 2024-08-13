import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Routes
import Home from './routes/Home.jsx';
import Games from './routes/Games.jsx';
import Register from './routes/Register.jsx';
import Login from './routes/Login.jsx';
import GameDetails from './routes/GameDetails.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import AddGame from './routes/AddGame.jsx';

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/games',
        element: <Games />,
      },
      {
        path: '/games/:id',
        element: <GameDetails />,
      },
      {
        path: '/add-games',
        element: <AddGame />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
