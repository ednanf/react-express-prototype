import { Link } from 'react-router-dom';

function ListRow({ game }) {
  return (
    <div className=''>
      <Link to='home' className=''>
        <p>Title: {game.title}</p>
        <p>Platform: {game.platform}</p>
      </Link>
    </div>
  );
}

export default ListRow;
