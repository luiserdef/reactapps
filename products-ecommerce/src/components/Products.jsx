import shoppingCartIcon from '../assets/shopping-cart.svg'

function Products ({ products }) {
  return (

    <div className='grid gap-4  grid-cols-2 md:grid-cols-3'>
      {
      products.map(product => (
        <div key={product.id} className='bg-stone-900 rounded-lg overflow-hidden'>
          <div className='relative product-image max-h-44 overflow-hidden'>
            <img className='bg-fixed bg-cover bg-center' src={product.thumbnail} alt={product.title} />
            <div className='absolute cursor-pointer rounded-full bg-cyan-500 flex place-items-center justify-center bg-no-repeat bg-center h-10 w-10 bottom-1 right-1'>
              <img
                className=' h-5'
                src={shoppingCartIcon} alt=''
              />
            </div>
          </div>
          <div className='card-body p-3'>
            <div>
              <strong className='text-sm text-cyan-600'>{product.title} | </strong>${product.price}
            </div>
            <div>
              <strong className='text-sm'>{product.category}</strong>
            </div>
            <div>
              <strong className='text-sm text-cyan-600'>Stock: </strong>{product.stock}
            </div>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default Products
