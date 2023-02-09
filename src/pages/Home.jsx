import React, { useContext, useEffect } from 'react'
import SliderBlock from '../components/SliderBlock'
import Main from "../components/Main"
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchAuthors, fetchCategories, fetchPictures } from "../http/pictureAPI";

const Home = observer(() => {
  const {picture} = useContext(Context)

  useEffect(() => {
    fetchAuthors().then(data => picture.setTypes(data))
    fetchCategories().then(data => picture.setBrands(data))
    fetchPictures(null, null, 1, 2).then(data => {
        picture.setPictures(data.rows)
        picture.setTotalCount(data.count)
    })
}, [picture])

//   useEffect(() => {
//     fetchPictures(picture.selectedAuthor.id, picture.selectedCategory.id, picture.page, 2).then(data => {
//         picture.setPictures(data.rows)
//         picture.setTotalCount(data.count)
//     })
// }, [picture.page, picture.selectedAuthor, picture.selectedCategory,])

  return (
    <div className='content'>
        <SliderBlock />
        <div className="container">
            <Main/>
        </div>
    </div>
  )
})

export default Home;
