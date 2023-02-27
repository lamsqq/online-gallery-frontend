import React, { useContext, useEffect } from 'react'
import SliderBlock from '../components/SliderBlock'
import Main from "../components/Main"
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { fetchPictures } from "../http/pictureAPI";

function Home() {
  const { picture } = useContext(Context)

  useEffect(() => {
    fetchPictures().then((data) => picture.setPictures(data.rows))
  }, [])

  return (
    <div className='content'>
        <SliderBlock />
        <div className="container">
            <Main />
        </div>
    </div>
  )
}

export default observer(Home);
