import React, { useState } from 'react'
import CreatePicture from '../components/modals/CreatePicture'

function Admin() {
  const [pictureVisible, setPictureVisible] = useState(false)
  return (
    <div className='wrapper'>
      <div className='admin'>
        <button onClick={() => setPictureVisible(true)}>
          Добавить картину
        </button>
        <CreatePicture show={pictureVisible} onHide={() => setPictureVisible(false)}/>
      </div>
    </div>
  )
}

export default Admin