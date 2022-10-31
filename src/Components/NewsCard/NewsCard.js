import React from 'react'
import { Link } from 'react-router-dom';
import "./NewsCard.css"

const NewsCard = ({title, abstract, uri}) => {
    const uriId = uri.split("/")
    // console.log('uri id', uriId[3])
  return (
    <div className='card'>
        <div className='newsTop'>
            <h2 className='newsTitle'>{title}</h2>
            <Link to={`/scoop/${uriId[3]}`}><button className='scoopButton'>Get The Scoop</button></Link>
        </div>
        <p className='newsAbstract'>{abstract}</p>
    </div>
  )
}

export default NewsCard