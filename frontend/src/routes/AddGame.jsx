import React, { useState } from 'react';
import axios from 'axios';

const AddGame = () => {
  const [formData, setFormData] = useState({
    title: '',
    platform: '',
  });

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
    };
    console.log(JSON.stringify(gameData));
    axios
      .post('http://localhost:3000/api/v1/games', gameData, { headers })
      .then((response) => console.log(response.status, response.data.token));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title: </label>
        <input type='text' name='title' id='title' placeholder='Title' value={formData.title} onChange={handleChange} />
        <label htmlFor='platform'>Platform:</label>
        <input
          type='text'
          name='platform'
          id='platform'
          placeholder='Platform'
          value={formData.platform}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddGame;
