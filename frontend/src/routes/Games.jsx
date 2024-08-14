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

  return (
    <div>
      <Header title='Games' />
      <ButtonLink url='/add-games'>Add game</ButtonLink>
      <div className='mt-4'>{renderItems()}</div>
    </div>
  );
}

export default Games;
