import React from 'react'
import error from "../Images/oh-no-logo2.png"
import { Link } from 'react-router-dom';
import "./Error.css"

const Error = () => {
  return (
    <div className='errorPage'>
        <img className="errorImage" src={error} alt="Error image"/>
        <p className='errorMessage'>Seems like this isnt the right place to get the scoop. Lets head back by clicking <Link className="hereLink" to={`/`}>here</Link></p>
    </div>
  )
}

export default Error