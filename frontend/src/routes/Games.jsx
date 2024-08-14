import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ListRow from '../components/ListRow';
import Header from '../components/Header';
import ButtonLink from '../components/ButtonLink';

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/games').then((r) => setGames(r.data.data.games));
  }, []);

  function renderItems() {
    return games.map((game, index) => {
      return (
        <div key={index}>
          <ListRow game={game} index={index} />
        </div>
      );
    });
  }

  //TODO: FIX HORIZONTAL SCROLLING!

  return (
    <div>
      <Header title='Games' />
      <div className='flex items-center justify-around'>
        <div className='flex'>
          <ButtonLink url='/add-games' width='100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
            </svg>
            Add Game
          </ButtonLink>
        </div>
        <input type='text' placeholder='search...' />
      </div>
      <div className='mt-4'>{renderItems()}</div>
    </div>
  );
}

export default Games;
