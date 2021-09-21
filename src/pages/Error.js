import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="error-page section">
      <div className="error-container">
        <h2>Oops! It's A Dead End</h2>
        <Link to='/' className="btn btn-primary">Back home</Link>
      </div>
    </div>
  )
}

export default Error
