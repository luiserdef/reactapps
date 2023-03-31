import { useContext } from 'react'

import { FiltersConsumer } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersConsumer)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price <= filters.maxPrice &&
         (
           product.category === filters.category ||
           filters.category === 'all'
         )
      )
    })
  }
  return { filters, filterProducts, setFilters }
}
