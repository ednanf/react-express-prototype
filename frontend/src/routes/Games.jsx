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

  // TODO: learn how to make the form send to the server
  // maybe use axios, the code should not be in the html I think
  // TODO: install axios
  // TODO: research how to get values from the input fields to send via axios

  return (
    <div>
      <h2>Add Game</h2>
      <form action='http://localhost:3000/api/v1/games' method='POST'>
        <div>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' name='title' placeholder='Enter a title...' />
        </div>
        <div>
          <label htmlFor='platform'>Platform</label>
          <input type='text' id='platform' name='platform' placeholder='Enter a platform...' />
        </div>
        <button>Submit</button>
      </form>
      <h2>Games</h2>
      {renderItems()}
    </div>
  );
}

export default Games;
