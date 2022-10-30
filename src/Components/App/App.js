import React, { useEffect, useState } from 'react'
import Main from '../Main/Main';
import { Route } from 'react-router-dom';

const App = () => {
  const [news, setNews] = useState([])
  const [searchedNews, SetSearchedNews] = useState([])
  
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
        SetSearchedNews(data.results)
      })
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Route exact path="/" render={() => <Main news={news} searchedNews={searchedNews} findNews={findNews}/>}/>
    </div>
  )
}

export default App
