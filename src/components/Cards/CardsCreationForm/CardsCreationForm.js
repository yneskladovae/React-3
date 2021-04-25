import React from 'react';
import './CardsCreationForm.css';

export function CardsCreationForm({handleSubmit, handleChange}) {
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add card</h1>
      <input placeholder="Type" name="type" required onChange={handleChange}/>
      <input placeholder="Title" name="title" required onChange={handleChange} />
      <input placeholder="Image url" name="imageUrl" required onChange={handleChange}/>
      <input placeholder="Price" name="price" required onChange={handleChange}/>
      <button>Submit</button>
    </form>
  );
}
