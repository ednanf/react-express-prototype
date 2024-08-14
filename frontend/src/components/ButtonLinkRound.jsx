import { Link } from 'react-router-dom';

function ButtonLinkRound({ url, width, children }) {
  return (
    <Link
      className='flex items-center rounded-full bg-flamingo-500 px-5 py-5 text-mine-shaft-50 hover:bg-flamingo-600'
      to={url}
    >
      {children}
    </Link>
  );
}

export default ButtonLinkRound;
