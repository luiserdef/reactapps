import btBackImg from '../assets/icons/arrow-left.svg'
import btNextImg from '../assets/icons/arrow-right.svg'
import ProductCard from './ProductCard'
import {getProducts} from '../services/products.js'
import {useState, useEffect} from 'react'
import ReactLoading from 'react-loading'

const Products=(props)=>{

    const [products,setProducts]= useState([])
    const [productsFilter,setProductsFilter]=useState([])
    const [filterOptionStatus,setFilterOptionStatus]=useState({option:'recent'})

    useEffect(()=>{
        getProducts.then(data=>{
            setProducts(data) 
            setProductsFilter(data) 
        })
    },[])

    const productsList= productsFilter.map((product,id)=>{
        return <ProductCard key={id}
                name={product.name}
                category={product.category}
                cost={product.cost}
                userCoins={props.coins}
                img={product.img.url}
                />
        })

        const filterProductsLowestPrice =()=>{
            const newFilteredProducts= products.slice().sort((a,b)=>{
                return a.cost - b.cost
            })
            setProductsFilter(newFilteredProducts)
            setFilterOptionStatus({option:'lowest'})
            console.log('lowest')
        }

        const filterProductsMostRecent =()=>{
            setProductsFilter(products)
            setFilterOptionStatus({option:'recent'})
            console.log('recent')
        }
        
        const filterProductsHighestPrice =()=>{
            const  newFilteredProducts= products.slice().sort((a,b)=>{
                return b.cost - a.cost
            })
            setProductsFilter(newFilteredProducts)
            setFilterOptionStatus({option:'highest'})
            console.log('highest')
        }


        const isOptionSelected = (option)=>{
            if(filterOptionStatus.option == option){
                return true
            }else{
                return false
            }
        }

    return(
        <main className='main'>
            <div className='products-filter-section'>
                <div className='products-filter-actions'>
                    <p className='products-section-count'>32 of 32 products</p>
                    <p>Sort by:</p>
                    <div className='filter-buttons'>
                        <button 
                            className={`bt-filter ${isOptionSelected('lowest') ? 'bt-filter-active' : ''}`} 
                            onClick={filterProductsLowestPrice}>
                            Lowest Price
                        </button>
                        <button 
                            className={`bt-filter ${isOptionSelected('recent') ? 'bt-filter-active' : ''}`}  
                            onClick={filterProductsMostRecent}>
                            Most Recent
                        </button>
                        <button 
                            className={`bt-filter ${isOptionSelected('highest') ? 'bt-filter-active' : ''}`} 
                            onClick={filterProductsHighestPrice}>
                            Highest Price
                        </button>
                    </div>
                </div>
                <div className='bt-products-back-next'>
                    <img src={btBackImg}></img>
                    <img src={btNextImg}></img>
                </div>
            </div>
            <div className='products-container'>
                {
                    products.length>0 
                    ?
                    productsList
                    :
                    <ReactLoading type='bars' color='blue'/>
                }
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