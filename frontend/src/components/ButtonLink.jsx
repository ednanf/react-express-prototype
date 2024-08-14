import { Link } from 'react-router-dom';

function ButtonLink({ url, width, children }) {
  return (
    <Link
      className='flex items-center rounded-lg bg-flamingo-500 px-5 py-2 text-mine-shaft-50 hover:bg-flamingo-600'
      to={url}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
