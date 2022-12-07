import { requirePropFactory } from '@material-ui/core';
import React from 'react';


 export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };
  console.log(props);

  return (
    <div className='container' key={props.key}>
      <div className='card' style={cardStyle}>
      <img
          className="card-img-top"
          src={ require(props.imageUrl) }
          alt="Card cap"
        />
      <div className='card-body'>
      <h3 className='card-title'>Project: {props.name}</h3>
     
      <p className='card-text'>Description: {props.description}</p>
      <p className='card-text'>ID: {props.id}</p>
      <a href="/" className='btn btn-primary'>
        Speakeasy {props.name}
      </a>
    </div>
  </div>
</div>
  );
}
 