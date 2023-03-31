import { useState } from 'react'

export default function filters ({ handleFilterProducts, filters }) {
  const [categoryValue, setCategoryValue] = useState(filters.category)
  const [priceValue, setPriceValue] = useState(filters.maxPrice)

  function handleInputValue (e) {
    handleFilterProducts(categoryValue, e.target.value)
    setPriceValue(e.target.value)
  }

  function handleInputCategory (e) {
    handleFilterProducts(e.target.value, priceValue)
    setCategoryValue(e.target.value)
  }

  return (
    <div className='flex gap-5 justify-center items-center flex-col'>
      <div className='w-full flex justify-between gap-16'>
        <div className='flex gap-2 '>
          <label htmlFor='price'>Price</label>
          <input
            id='price'
            value={priceValue}
            onChange={(e) => handleInputValue(e)}
            min='0'
            max='5000'
            type='range'
          />
          ${priceValue}
        </div>
        <select value={categoryValue} onChange={(e) => handleInputCategory(e)} className='rounded px-2' name='categories'>
          <option value='' disabled>Categories</option>
          <option value='all'>All</option>
          <option value='home-decoration'>home-decoration</option>
          <option value='laptops'>laptops</option>
          <option value='smartphones'>smartphones</option>
          <option value='fragrances'>fragrances</option>
          <option value='skincare'>skincare</option>
          <option value='groceries'>groceries</option>
        </select>
      </div>
      <div className='flex buttons gap-2'>
        {/* <button onClick={() => handleFilterProducts(categoryValue, priceValue)}>Search</button> */}
        {/* <button onClick={resetFilter}>Reset</button> */}
      </div>
    </div>
  )
}
