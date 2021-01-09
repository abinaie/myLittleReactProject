import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
    //const cardArray = 
    return (
        <React.StrictMode>
            {robots.map((user, i) => {
                return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
             })}
      </React.StrictMode>        
    );
}

export default CardList;

//we have a cardlist component that lists cards and what we need to do is to pass to this component a property which in this case is robots