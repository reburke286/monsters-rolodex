import React from 'react';
import './card-grid.styles.css'
import Card from '../Card/card.component'

const CardGrid = (props) => {
    
   return (
   <div className="card-list">

       {props.monsters.map((monster) => (
          <Card key={monster.id} monster={monster}></Card>
      
  ))}

   </div>
   );
}

export default CardGrid;