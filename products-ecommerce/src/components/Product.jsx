
function Product ({ title, description, price, category, stock, thumbnail }) {
  return (
    <div className=''>
      <div className='product-image'>
        <img src={thumbnail} alt={title} />
      </div>
      <h2 className='font-serif'>{title}</h2>
      <p>Categoría: {category}</p>
      <p>Descripción: {description}</p>
      <p>Stock: {stock}</p>
      <p>Precio: {price}</p>
    </div>
  )
}

export default Product
