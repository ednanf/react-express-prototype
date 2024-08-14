import { Link } from 'react-router-dom';

function ButtonLink({ url, children }) {
  return (
    <Link className='rounded-lg bg-flamingo-500 px-5 py-2 text-mine-shaft-50 hover:bg-flamingo-600' to={url}>
      {children}
    </Link>
  );
}

export default ButtonLink;
