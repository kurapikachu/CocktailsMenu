import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ idDrink, strDrink, strGlass, strCategory, strDrinkThumb }) => {
  return (
    <div className="cocktail">
      <img src={strDrinkThumb} alt="drink-img" />
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strCategory}</p>
        <Link className="btn btn-primary btn-details" to={`/cocktail/${idDrink}`}>Details</Link>
      </div>

    </div>
  )
}

export default Cocktail
