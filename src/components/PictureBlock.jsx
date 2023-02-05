import React from 'react';

function PictureBlock ({artist, title, price, img}) {
  return (
      <div className='picture-block'>
        <img src={img} alt="art1" />
        <div className='picture-block__desc'>
            <p>{artist}</p>
            <h2>{title}</h2>
            <span>{price}&#8381;</span>
        </div>
    </div>
  )
}

export default PictureBlock