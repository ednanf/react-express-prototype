import React from 'react';

function Body({ pageTitle, children }) {
  return (
    <div className='justify-centerp-2 mx-2 mt-3 h-screen'>
      <h2 className='mt-2 flex text-4xl font-bold'>{pageTitle}</h2>
      <div className='mt-2'>{children}</div>
    </div>
  );
}

export default Body;
