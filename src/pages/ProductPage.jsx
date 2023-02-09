import React, { useEffect, useState } from 'react'
import { fetchOnePicture } from '../http/pictureAPI'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const [picture, setPicture] = useState()
  const {id} = useParams()

  useEffect(() => {
    fetchOnePicture(id).then(data =>setPicture(data))
  }, [id])

  return (
    <div className='product-info'>
        <img src={process.env.REACT_APP_API_URL + picture.img} alt='img'/>
        <div className='product-info__desc'>
            <div>
                <p>{picture.authorId}</p>
                <p>{picture.title}</p>
                <p>{picture.price} &#8381;</p>
                <br />
                <p>техника: {picture.techniqueId}</p> 
                <p>размер: {picture.size}</p>
                <p>категория: {picture.categoryid}</p>
                <p>страна: {picture.country}</p>
                <p>год: {picture.year}</p>
            </div>
            <button>Приобрести</button>
        </div>
    </div>
  )
}

export default ProductPage