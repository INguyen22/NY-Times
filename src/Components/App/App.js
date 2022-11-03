import React, { useEffect, useState } from 'react'
import Main from '../Main/Main';
import DetailedArticle from '../DetailedArticle/DetailedArticle';
import Error from '../Error/Error';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [news, setNews] = useState([])
  const [errorOccured, setErrorOccured] = useState(false)
  const [noNews, setNoNews] = useState(false)
  
  const fetchData = () => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=tuGQcmG8QUpUgvlq0aIEgXlwWjoybiFL`)
    .then(res => {
      if(!res.ok) {
        throw new Error()
      } else {
        setErrorOccured(false)
        return res.json()
      }
    })
    .then(data => {
      // console.log(data.results)
      if(data.results) {
        setNoNews(false)
        setNews(data.results)
      } else {
        setNoNews(true)
      }
    })
    .catch(error => {
      setErrorOccured(true)
    })
  }

  const findNews = (section) => {
    // console.log('section', section)
    if(section) {
      fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=tuGQcmG8QUpUgvlq0aIEgXlwWjoybiFL`)
      .then(res => {
        if(!res.ok) {
          throw new Error()
        } else {
          setErrorOccured(false)
          return res.json()
        }
      })
      .then(data => {
        console.log('searched section', data)
        if(data.results) {
          setNoNews(false)
          setNews(data.results)
        } else {
          setNoNews(true)
        }
      })
      .catch(error => {
        setErrorOccured(true)
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Switch>
        {errorOccured && <h1>Error 404. We couldn't get the scoop! Please reload and try again</h1>}
        <Route exact path="/" render={() => <Main news={news} findNews={findNews} noNews={noNews}/>}/>
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
