import { products } from './mocks/products.json'
import Product from './components/Product'

function App () {
  const productsName = products.map(p => p.title)
  console.log(productsName.map(p => p))
  return (
    <div className='grid-rows-3'>
      {
        products.map(product => (
          <Product
            key={product.id}
            thumbnail={product.thumbnail}
            title={product.title}
            category={product.category}
            description={product.description}
            stock={product.stock}
            price={product.price}
          />
        ))
      }
    </div>

  )
}

export default App
