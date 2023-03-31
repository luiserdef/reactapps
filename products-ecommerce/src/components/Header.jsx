import cartIcon from '../assets/shopping-cart.svg'
export const Header = () => {
  return (
    <div className='flex justify-end items-center  h-20 w-full bg-zinc-700 mb-5'>
      <img src={cartIcon} alt='' className='cursor-pointer h-10 mr-6' />
    </div>
  )
}
