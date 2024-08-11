import React from 'react';
import { useParams } from 'react-router-dom';

const GameDetails = () => {
  const { id } = useParams();
  return <div>GameDetails {id}</div>;
};

export default GameDetails;
