import React from 'react'
import scoop from "../Images/the-scoop-logo2.png"
import NewsCard from '../NewsCard/NewsCard'
import Form from '../Form/Form'
import "./Main.css"

const Main = ({news, findNews}) => {
    const newsCards = news.map(article => {
        const {title, abstract, section, published_date, updated_date, uri} = article
        return <NewsCard 
            key={Math.random()}
            title={title}
            abstract={abstract}
            uri={uri}
        />
    })

  return (
    <div className='mainPage'>
        <img className="logo" src={scoop} alt="the scoop logo"/>
        <div className='newsContainer'>
        <Form findNews={findNews}/>
            {newsCards}
        </div>
    </div>
  )
}

export default Main