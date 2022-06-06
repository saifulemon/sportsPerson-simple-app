import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Players.css';

const Players = () => {
    const [players, setPlayers ] = useState([]);

    useEffect(() => {
        fetch('./player.JSON')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, []);

    return (
        <>
          <div className='players-container'>
              <div className='card-container'>
                {
                  players.map(person => <Card player={person}></Card>)
                }
              </div>
              <div className='cart-container'>
                <Cart></Cart>
              </div>
          </div>                            
        </>
    );
};

export default Players;