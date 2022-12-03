import React from 'react';

 export function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  return (
    <div className='container'>
      <div className='card' style={cardStyle}>
      <img
          className="card-img-top"
          /*src={'https'}*/
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
 