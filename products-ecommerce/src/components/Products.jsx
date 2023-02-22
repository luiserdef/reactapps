
function Products ({ products }) {
  return (

    <div className='grid gap-4  grid-cols-1  sm:grid-cols-2 md:grid-cols-3'>
      {
      products.map(product => (
        <div key={product.id} className='bg-stone-900 rounded-lg overflow-hidden'>
          <div className='product-image max-h-44 overflow-hidden'>
            <img className='bg-fixed bg-cover bg-center' src={product.thumbnail} alt={product.title} />
          </div>
          <div className='card-body p-3'>
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <strong>{product.category}</strong>
            </div>
          </div>
        </div>
      ))
    }
    </div>
  )
}

export default Products
