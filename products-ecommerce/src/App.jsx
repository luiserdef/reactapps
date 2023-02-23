import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products'
import Filters from './components/Filters'
import { useState } from 'react'

function App () {
  const [products] = useState(initialProducts)
  const [filterSelection, setFilterSelection] = useState({
    category: 'all',
    maxPrice: 100
  })

  const filterProducts = () => {
    const allProducts = products
    return allProducts.filter(product => {
      return product.price <= filterSelection.maxPrice &&
       (
         product.category === filterSelection.category ||
         filterSelection.category === 'all'
       )
    })
  }

  function handleFilterProducts (category, price) {
    setFilterSelection(last => ({
      category,
      maxPrice: price
    }))
  }

  const filteredProducts = filterProducts()

  function resetFilter () {
    setFilteredProducts(products)
  }

  return (
    <>
      <div className='hero h-[100px] w-full' />
      <div className='flex flex-col gap-8 max-w-3xl m-auto px-5'>
        <Filters
          handleFilterProducts={handleFilterProducts}
          resetFilter={resetFilter}
        />
        <Products products={filteredProducts} />
      </div>
    </>
  )
}

export default App
