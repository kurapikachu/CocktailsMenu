import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef()

  const searchCockTail = () => {
    setSearchTerm(searchValue.current.value)
  }

  useEffect(
    () => {
      searchValue.current.focus()
    }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="cocktail">Search Your Favorite Cocktail</label>
          <input type="text" name="cocktail" id="cocktail" ref={searchValue} onChange={searchCockTail} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
