import React from 'react';
import Card from './Card';

// props.robots (still accepts even though is state in app.js)
const CardList = ({robots}) => {
    return (
    <div>
      {     
          robots.map((user, i) => { // list cards
            return (<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>);
          })
      }
    </div>
    );
};

export default CardList;