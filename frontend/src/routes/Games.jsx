import { useEffect, useState } from 'react';

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/games')
      .then((res) => res.json())
      .then((result) => setGames(result.data.games));
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
      <h2>Games</h2>
      {renderItems()}
    </div>
  );
}

export default Games;
