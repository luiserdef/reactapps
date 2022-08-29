import btBackImg from '../assets/icons/arrow-left.svg'
import btNextImg from '../assets/icons/arrow-right.svg'
import ProductCard from './ProductCard'


const Products=()=>{
// const[products,setProducts]=react.useState([])

// React.useEffect(()=>{
//     fetch('')
//     .then(response=>response.json())
//     .then(reponse=>console.log('test data'))
// },[])

    return(
        <main className='main'>
            <div className='products-filter-section'>
                <div className='products-filter-actions'>
                    <p className='products-section-count'>32 of 32 products</p>
                    <p>Sort by:</p>
                    <button className='bt-filter bt-lowest-price'>Lowest Price</button>
                    <button className='bt-filter bt-most-recent'>Most Recent</button>
                    <button className='bt-filter bt-highest-price'>Highest Price</button>
                </div>
                <div className='bt-products-back-next'>
                    <img src={btBackImg}></img>
                    <img src={btNextImg}></img>
                </div>
            </div>
            < hr style={{margin:'10px 0'}}></hr>
            <div className='products-container'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/><ProductCard/><ProductCard/>
            </div>
            <div className='bottom-pagination-products'>
                <p className='pagination-products-total'>32 of 32 products</p>
                <div className='bt-products-back-next'>
                    <img src={btBackImg}></img>
                    <img src={btNextImg}></img>
                </div>
            </div>
           
        </main>
    )
}

export default Products