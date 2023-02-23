import { useState } from 'react'

export default function filters ({ products, filterProducts, resetFilter }) {
  const [categoryValue, setCategoryValue] = useState('')
  const [priceValue, setPriceValue] = useState(100)
  console.log(priceValue)
  return (
    <div className='flex gap-5 justify-center items-center'>
      <select value={categoryValue} onChange={(e) => setCategoryValue(e.target.value)} className='rounded px-2' name='categories'>
        <option value='' disabled>Categories</option>
        <option value='all'>All</option>
        <option value='home-decoration'>home-decoration</option>
        <option value='laptops'>laptops</option>
        <option value='smartphones'>smartphones</option>
        <option value='fragrances'>fragrances</option>
        <option value='skincare'>skincare</option>
        <option value='groceries'>groceries</option>
      </select>

      <div className='flex gap-2 '>
        <span>Precio: </span>
        $<input value={priceValue} onChange={(e) => setPriceValue(e.target.value)} min='0' className='w-[4em]' type='number' />
      </div>
      <button onClick={() => filterProducts(categoryValue, priceValue)}>Search</button>
      <button onClick={resetFilter}>Reset</button>
    </div>
  )
}
