import React from 'react'
import './ImageList.css'

const ImageList = ({ images }) => {
  const imageList = images.map(({ id, description, urls }) => {
    return (
      <div key={id}>
        <img
          alt={description}
          src={urls.regular}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
      </div>
    )
  })

  return <div className='container'>{imageList}</div>
}

export default ImageList
