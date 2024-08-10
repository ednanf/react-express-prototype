import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/games")
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

  console.log(games);

  return (
    <>
      <main>
        <h1>Game Collection</h1>
        {renderItems()}
      </main>
    </>
  );
}

export default App;
