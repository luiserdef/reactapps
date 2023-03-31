export const Container = ({ children }) => {
  return (
    <div className='flex flex-col gap-8 max-w-3xl m-auto px-5'>
      {children}
    </div>
  )
}
