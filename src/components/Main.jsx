import React, { useContext } from 'react';
import PictureBlock from "./PictureBlock";
import { observer } from "mobx-react-lite";
import { Context } from '../index';

const Main = observer(() => {
  const {picture} = useContext(Context)
  return (
    <div className='main'>
       {picture.pictures.map(picture =>
          <PictureBlock key={picture.id} picture={picture}/>
        )}
    </div>
  )
})

export default Main