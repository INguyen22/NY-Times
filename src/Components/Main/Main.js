import React from 'react'
import scoop from "../Images/the-scoop-logo2.png"
import NewsCard from '../NewsCard/NewsCard'
import Form from '../Form/Form'
import "./Main.css"

const Main = ({news}) => {
    const newsCards = news.map(article => {
        const {title, abstract, section, published_date, updated_date} = article
        return <NewsCard 
            key={Math.random()}
            title={title}
            abstract={abstract}
            section={section}
            published_date={published_date}
            updated_date={updated_date}
        />
    })
  return (
    <div className='mainPage'>
        <img className="logo" src={scoop} alt="the scoop logo"/>
        <div className='newsContainer'>
        <Form />
            {newsCards}
        </div>
    </div>
  )
}

export default Main