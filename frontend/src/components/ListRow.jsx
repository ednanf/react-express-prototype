import { Link } from 'react-router-dom';

function ListRow({ game, index }) {
  return (
    <>
      {index === 0 ? <hr></hr> : ''}
      <div className='my-1 flex justify-between px-3 py-2'>
        <p>Title: {game.title}</p>
        <p>Platform: {game.platform}</p>
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='size-6'
          >
            <path stroke-linecap='round' stroke-linejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </button>
      </div>
      <hr></hr>
    </>
  );
}

export default ListRow;
