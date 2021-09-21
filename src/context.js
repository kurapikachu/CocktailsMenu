import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [cockTailList, setCockTailList] = useState([])
  const [searchTerm, setSearchTerm] = useState("a")

  const fetchData = async () => {
    setLoading(true)
    const res = await fetch(`${url}${searchTerm}`)
    const data = await res.json()
    setCockTailList(data.drinks)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [searchTerm])

  return <AppContext.Provider value={{ loading, cockTailList,setSearchTerm }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
