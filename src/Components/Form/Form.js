import React, {useEffect, useState} from 'react'
import "./Form.css"

const Form = ({findNews}) => {
    const [section, setSection] = useState("")

    const possibleSections = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]

    const sectionOptions = possibleSections.map(section => {
        return <option key={Math.random()} value={section}>{section}</option>
    })

    useEffect(() => {
        findNews(section)
    }, [section])

  return (
    <div>
        <form>
            <select 
                name="section"
                value={section}
                placeholder="Filter..."
                onChange={(event) => setSection(event.target.value)}
            >
                <option value="home">Filter...</option>
                {sectionOptions}
            </select>
        </form>
    </div>
  )
}

export default Form