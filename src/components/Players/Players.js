import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Players.css';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('./player.JSON')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, []);

  const handleAddPlayer = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
  }
  const handleRemovePlayer = (player) => {
    const currentCart = [...cart, player];
    setCart(!currentCart)
    
  }

  return (
    <>
      <div className='players-container'>
        <div className='card-container'>
          {
            players.map(person => <Card
              player={person}
              key={person.key}
              handleAddPlayer={handleAddPlayer}
              handleRemovePlayer={handleRemovePlayer}
            >
            </Card>)
          }
        </div>
        <div className='cart-container'>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </>
  );
};

export default Players;