import React from 'react';
import Card from './Card';

export default function Cards(props) {
    return(
      <div id="Cards">
        {
          props.characters.map((card)=>{
              return <Card 
                key={card.name} 
                name={card.name} 
                species={card.species} 
                gender={card.gender} 
                image={card.image} 
                onClose={() => window.alert('Emulamos que se cierra la card')}
              />
            }
          )
        }

      </div>
      
    );
};

