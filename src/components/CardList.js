import React from 'react';
import Card from './Card';

// props.robots (still accepts even though is state in app.js)
const CardList = ({robots}) => {
    return (
    <div>
      {
          robots.map((user) => { // list cards
            return (<Card key={user.id} id={user.id} name={user.name} email={user.email}/>);
          })
      }
    </div>
    );
};

export default CardList;