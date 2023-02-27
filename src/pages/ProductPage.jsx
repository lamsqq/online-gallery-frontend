import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOnePicture } from '../http/pictureAPI'
import { Link } from 'react-router-dom'
import { ORDER_ROUTE } from '../utilities/consts'

const ProductPage = () => {
  const [ picture, setPicture ] = useState()
  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    fetchOnePicture(id).then((data) => setPicture(data))
  }, [])

  return (
    <div className='product-page'>
        <img src={process.env.REACT_APP_API_URL + picture?.img} alt={picture?.name}/>
        <div className='product-page__desc'>
            <div>
                <p>{picture?.author}</p>
                <p>{picture?.title}</p>
                <p>{picture?.price} &#8381;</p>
                <br />
                <p>техника: {picture?.technique}</p> 
                <p>размер: {picture?.size}</p>
                <p>категория: {picture?.category}</p>
                <p>страна: {picture?.country}</p>
                <p>год: {picture?.year}</p>
            </div>
            <Link to={ORDER_ROUTE}><button>Приобрести</button></Link>
        </div>
    </div>
  )
}

export default ProductPage