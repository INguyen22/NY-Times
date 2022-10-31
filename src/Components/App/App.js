import React, { useEffect, useState } from 'react'
import Main from '../Main/Main';
import DetailedArticle from '../DetailedArticle/DetailedArticle';
import Error from '../Error/Error';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [news, setNews] = useState([])
  
  const fetchData = () => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=tuGQcmG8QUpUgvlq0aIEgXlwWjoybiFL`)
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      setNews(data.results)
    })
  }

  const findNews = (section) => {
    console.log('section', section)
    if(section) {
      fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=tuGQcmG8QUpUgvlq0aIEgXlwWjoybiFL`)
      .then(res => res.json())
      .then(data => {
        console.log('searched section', data)
        setNews(data.results)
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Main news={news} findNews={findNews}/>}/>
        <Route exact path="/scoop/:id" render={({match}) => {
              const foundArticle = news.find(article => article.uri.split("/")[3] === match.params.id)
              console.log('found article', foundArticle)
              return <DetailedArticle article={foundArticle} />}}/>
        <Route render={() => <Error/>}/>
      </Switch>
    </div>
  )
}

export default App
