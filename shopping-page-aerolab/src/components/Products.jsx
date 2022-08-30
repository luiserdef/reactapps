import btBackImg from '../assets/icons/arrow-left.svg'
import btNextImg from '../assets/icons/arrow-right.svg'
import ProductCard from './ProductCard'
import {getProducts} from '../services/products.js'


const Products=(props)=>{

    const Productsfet=(input)=> new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            const values=[]
            for(let i=0; i<input-1;i++){
                values.push(i)
                if(i==5){
                    reject({
                        error:true,
                        message:'es error'
                    })
                }
                
                        resolve({
                            error:false,
                            value:values
                        })
            }
        },2000)
    })
    
    // Productsfet(10)
    // .then(response=>console.log(response))
    // .catch(err=>console.log(err.message))
    // getProducts.then(data=>console.log(data))

    getProducts.then(data=>{
        
        console.log('wait')
    
    })
   

    // const first =()=>console.log('1')
    // const second =()=>{
    //     setTimeout(()=>{
    //         console.log('2')
    //     },0)
    // }    
    // const third=()=>console.log('3')

    // console.log(first())
    // console.log(second())
    // console.log(third())


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