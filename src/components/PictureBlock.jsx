import React from 'react';
import { useNavigate } from "react-router-dom"
import { PRODUCT_ROUTE } from "../utilities/consts";

const PictureBlock = ({picture}) => {
  const history = useNavigate()
  return (
      <div className='picture-block' onClick={()=> history(PRODUCT_ROUTE + '/' + picture.id)}>
        <img src={process.env.REACT_APP_API_URL + picture.img} alt="art" />
        <div className='picture-block__desc'>
            <p>{picture.authorId}</p>
            <h2>{picture.name}</h2>
            <span>{picture.price}&#8381;</span>
        </div>
    </div>
  )
}

export default PictureBlock