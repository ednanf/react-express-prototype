import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '../components/Button';

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/games').then((r) => setGames(r.data.data.games));
  }, []);

  function renderItems() {
    return games.map((game, index) => {
      return (
        <div key={index}>
          <p>Title: {game.title}</p>
          <p>Platform: {game.platform}</p>
        </div>
      );
    });
  }

  return (
    <div>
      <div className=''>
        <div className='flex items-center justify-between px-3 pt-2'>
          <h2 className='text-3xl'>Games</h2>
          <Button url='/add-games'>Add game</Button>
        </div>
        <hr className='my-2'></hr>
      </div>
      {renderItems()}
    </div>
  );
}

export default Games;
