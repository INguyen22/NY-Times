import React from 'react'
import scoop from "../Images/the-scoop-logo2.png"
import NewsCard from '../NewsCard/NewsCard'
import Form from '../Form/Form'
import "./Main.css"

const Main = ({news, findNews}) => {
    const filterNews = news.filter(article => {
        const {title, multimedia} = article
        if(title && multimedia) {
            return article
        }
    })
    // console.log('filtered news for magaizine', filterNews)
    const newsCards = filterNews.map(article => {
        const {title, abstract, multimedia, uri} = article
        return <NewsCard 
            key={Math.random()}
            title={title}
            multimedia={multimedia}
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