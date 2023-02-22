import { products } from './mocks/products.json'
import Products from './components/Products'

function App () {
  const productsName = products.map(p => p.title)
  console.log(productsName.map(p => p))

  return (
    <div className='main max-w-3xl m-auto px-5'>
      <div className='hero' />
      <Products products={products} />
    </div>
  )
}

export default App
