import React from 'react'
import { Link } from 'react-router-dom';
import "./DetailedArticle.css"

const DetailedArticle = ({article}) => {
    const {title, abstract, byline, published_date, updated_date, short_url, section, subsection, geo_facet } = article
    const publishedDate = published_date.split("T")[0]
    const updatedDate = updated_date.split("T")[0]

  return (
    <div className='articleDetailsPage'>
        <Link to={`/`}><button className='backButton'>Go Back</button></Link>
        <h1 className='articleTitle'>{title}</h1>
         <p className='articleInfo'>Published: {publishedDate} and updated on {updatedDate} by {byline}</p>
        {section && subsection && <p className='articleInfo'>Topics: {section}, {subsection}</p>}
        {geo_facet[0] && <p className='articleInfo'>Location: {geo_facet[0]}</p>}
        <img src={article.multimedia[1].url} alt={title}/>
        {abstract && <p className='articleAbstract'>{abstract}</p>}
        <a className="fullStoryLink" href={short_url}>Get the Full Story</a>
    </div>
  )
}

export default DetailedArticle