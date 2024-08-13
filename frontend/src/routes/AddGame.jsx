import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import GameForm from '../components/GameForm/GameForm';

const AddGame = () => {
  const [mediaType, setMediaType] = useState();
  const [formData, setFormData] = useState({
    title: '',
    platform: '',
    media: mediaType,
    cover: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const headers = {
    'Content-Type': 'application/json',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const gameData = {
      title: formData.title,
      platform: formData.platform,
      media: formData.media,
      cover: formData.cover,
    };
    console.log(JSON.stringify(gameData));
    axios
      .post('http://localhost:3000/api/v1/games', gameData, { headers })
      .then((response) => console.log(response.status, response.data.token));

    navigate('/games');
  };

  return (
    <div>
      <GameForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddGame;
