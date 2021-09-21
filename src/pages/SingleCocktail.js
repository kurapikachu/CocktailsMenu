import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cockTail, setCockTail] = useState(null)

  const getData = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${url}${id}`)
      const data = await res.json()
      setCockTail(data.drinks)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!cockTail) {
    return <h3 className="section-title">No cocktail to display</h3>
  }
  const { strDrink, strDrinkThumb, strCategory, strInstructions, strIngredient1, strIngredient2, strIngredient3, strAlcoholic, strGlass } = cockTail[0]

  return (
    <div className="cocktail-section section">
      <Link className="btn btn-primary" to="/">back home</Link>
      <h3 className="section-title">{strDrink}</h3>
      <div className="drink">
        <img src={strDrinkThumb} alt="" />
        <div className="drink-info">
          <p><span className="drink-data">name: </span>{strDrink}</p>
          <p><span className="drink-data">category: </span>{strCategory}</p>
          <p><span className="drink-data">info: </span>{strAlcoholic}</p>
          <p><span className="drink-data">glass: </span>{strGlass}</p>
          <p><span className="drink-data">instruction: </span>{strInstructions}</p>
          <p><span className="drink-data">ingredients: </span>{strIngredient1}, {strIngredient2}, {strIngredient3}</p>
        </div>
      </div>
    </div>
  )



}

export default SingleCocktail
