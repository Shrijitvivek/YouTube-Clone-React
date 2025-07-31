import React from 'react'
import { Link } from 'react-router-dom'
import './VideoCard.css'

export default function VideoCard({image,title,channel,views,timestamp,channelImage,path}) {
  return (
    <Link to={path} className='videoCard' style={{textDecoration:'none'}}>
        <img src={image} alt="" className='videoCardImage' />
        <div className='videoCardInfo'></div>
        <img src={channelImage} alt="" className='videoCardAvatar' />
        <div className='videoCardText'></div>
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>
            {views} | {timestamp}
        </p>
    </Link>
  )
}
