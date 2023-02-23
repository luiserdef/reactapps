import { products } from './mocks/products.json'
import Products from './components/Products'
import Filters from './components/Filters'
import { useState } from 'react'

function App () {
  const [filteredProducts, setFilteredProducts] = useState(products)

  function filterProducts (category, price) {
    const allProducts = products
    const newProductsFilter = allProducts.filter(product => {
      return product.category === category && product.price <= price
    })
    setFilteredProducts(newProductsFilter)
  }

  function resetFilter () {
    setFilteredProducts(products)
  }

  return (
    <>
      <div className='hero h-[100px] w-full' />
      <div className='flex flex-col gap-8 max-w-3xl m-auto px-5'>
        <Filters
          products={products}
          filterProducts={filterProducts}
          resetFilter={resetFilter}
        />
        <Products products={filteredProducts} />
      </div>
    </>
  )
}

export default App
