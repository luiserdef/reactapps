import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products'
import Filters from './components/Filters'
import { useState } from 'react'
import { Header } from './components/Header'
import { Container } from './components/Container'
import { useFilters } from './hooks/useFilters'

function App () {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters(useFilters)

  function handleFilterProducts (category, price) {
    setFilters(prevState => ({
      ...prevState,
      category,
      maxPrice: price
    }))
  }

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header />
      <Container>
        <Filters
          handleFilterProducts={handleFilterProducts}
          filters={filters}
        />
        <Products products={filteredProducts} />
      </Container>
    </>
  )
}

export default App
