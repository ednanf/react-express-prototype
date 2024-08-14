import Button from './ButtonLink';

function Header({ title }) {
  return (
    <div>
      <h2 className='mx-2 mt-2 text-3xl'>{title}</h2>
      <hr className='mb-4'></hr>
    </div>
  );
}

export default Header;
