import React from 'react'
import image from '../assets/image.png'

const NewsDetails = ({author,title,description,src,url}) => {
  return (
    <div className='container'>
        <img src={src?src:image} className='card-img' alt="" />
        <div className="card-body">
            <h3>{author?author:"Unknown Author"}</h3>
            <h5>{title}</h5>
            <p>{description}</p>
            <a href={url} target='_blank' rel='noopener noreferrer' className='btn'>Read More</a>
        </div>
        
    </div>
  )
}

export default NewsDetails