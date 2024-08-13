import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title: </label>
        <input type='text' name='title' id='title' placeholder='Title' value={formData.title} onChange={handleChange} />
        <label htmlFor='cover'>Cover URL:</label>
        <input
          type='text'
          name='cover'
          id='cover'
          placeholder='Cover URL'
          value={formData.cover}
          onChange={handleChange}
        />
        <label htmlFor='platform'>Platform:</label>
        <input
          type='text'
          name='platform'
          id='platform'
          placeholder='Platform'
          value={formData.platform}
          onChange={handleChange}
        />
        <label htmlFor='media'>Format:</label>
        <input type='radio' name='media' value='physical' onChange={handleChange} />
        Physical
        <input type='radio' name='media' value='digital' onChange={handleChange} />
        Digital
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddGame;
