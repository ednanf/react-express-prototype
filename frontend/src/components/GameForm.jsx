import React from 'react';

const GameForm = ({ formData, handleChange, handleSubmit }) => {
  return (
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
  );
};

export default GameForm;
