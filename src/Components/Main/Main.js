import React from 'react'
import scoop from "../Images/the-scoop-logo2.png"
import NewsCard from '../NewsCard/NewsCard'
import Form from '../Form/Form'
import "./Main.css"

const Main = ({news, findNews, noNews}) => {
    // console.log('no news true?', noNews)
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
            {noNews ? <h2 className='noNewsError'>Sorry there are no news articles for this topic! Sorry for the inconvienence</h2> : newsCards}
        </div>
    </div>
  )
}

export default Main