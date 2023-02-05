import React, { useContext, useEffect } from 'react'
import SliderBlock from '../components/SliderBlock'
import Main from '../components/Main'
import { observer } from 'mobx-react-lite'

const Home = observer(() => {

  return (
    <div className='content'>
        <SliderBlock />
        <div className="container">
            <Main />
        </div>
    </div>
  )
})

export default Home;
