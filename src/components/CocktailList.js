import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { loading, cockTailList } = useGlobalContext()

  if (loading) {
    return <Loading />
  }

  return (
    <section className="section">
      <h1 className="section-title">Cocktails</h1>
      <div className="cocktails-center">
        {cockTailList.map((drink, index) => {
          return <Cocktail {...drink} key={index} />
        })}

      </div>
    </section>
  )
}

export default CocktailList
