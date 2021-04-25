import React from 'react';
import { CardsContainer } from '../Cards/CardsContainer/index.js';

export default function Main(props) {
  const { avatar: {image, alt} } = props;
  return (
    <main>
      <img src={image} alt={alt} />
      <CardsContainer />
    </main>
  );
}