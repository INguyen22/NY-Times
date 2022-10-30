import React, { useEffect, useState } from 'react'
import Main from '../Main/Main';
import { Route } from 'react-router-dom';

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

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Route exact path="/" render={() => <Main news={news}/>}/>
    </div>
  )
}

export default App
