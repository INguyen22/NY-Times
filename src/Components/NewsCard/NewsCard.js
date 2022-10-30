import React from 'react'
import "./NewsCard.css"

const NewsCard = ({title, abstract, section, published_date, updated_date}) => {
  return (
    <div className='card'>
        <div className='newsTop'>
            <h2 className='newsTitle'>{title}</h2>
            <button className='scoopButton'>Get The Scoop</button>
        </div>
        <p className='newsAbstract'>{abstract}</p>
    </div>
  )
}

export default NewsCard