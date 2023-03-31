import { createContext, useState } from 'react'

export const FiltersConsumer = createContext()

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    maxPrice: 400
  })
  return (
    <FiltersConsumer.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersConsumer.Provider>
  )
}
