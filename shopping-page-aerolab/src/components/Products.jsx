import btBackImg from '../assets/icons/arrow-left.svg'
import btNextImg from '../assets/icons/arrow-right.svg'
import ProductCard from './ProductCard'
import {getProducts} from '../services/products.js'
import {useState, useEffect} from 'react'
import ReactLoading from 'react-loading'

const Products=(props)=>{
    const productsShowPerPage = 6
    const [products,setProducts]= useState([])

    const startPaginationProducts={
        prevEnd:productsShowPerPage - 1,
        actualStart:0,
        actualEnd: productsShowPerPage - 1
    }
    const[paginationProducts,setPaginationProducts]=useState(startPaginationProducts)
    const [productsFilter,setProductsFilter]=useState([])
    const [filterOptionStatus,setFilterOptionStatus]=useState({option:'recent'})

    useEffect(()=>{
        getProducts.then(data=>{
            setProducts(data) 
            setProductsFilter(data) 
        })
    },[])




    let productsList =[]
    if(productsFilter.length>0){
        for (let i = paginationProducts.actualStart;i<=paginationProducts.actualEnd;i++){
            productsList.push(
                <ProductCard key={i}
                    name={productsFilter[0].name}
                    category={productsFilter[i].category}
                    cost={productsFilter[i].cost}
                    userCoins={props.coins}
                    img={productsFilter[i].img.url}
                 />
            )
        }
    }


        const filterProductsLowestPrice =()=>{
            const newFilteredProducts= products.slice().sort((a,b)=>{
                return a.cost - b.cost
            })
            setProductsFilter(newFilteredProducts)
            setFilterOptionStatus({option:'lowest'})
            setPaginationProducts(startPaginationProducts)
        }

        const filterProductsMostRecent =()=>{
            setProductsFilter(products)
            setFilterOptionStatus({option:'recent'})
            setPaginationProducts(startPaginationProducts)
        }
        
        const filterProductsHighestPrice =()=>{
            const  newFilteredProducts= products.slice().sort((a,b)=>{
                return b.cost - a.cost
            })
            setProductsFilter(newFilteredProducts)
            setFilterOptionStatus({option:'highest'})
            setPaginationProducts(startPaginationProducts)
        }


        const isOptionSelected = (option)=>{
            if(filterOptionStatus.option == option){
                return true
            }else{
                return false
            }
        }

    const isProductPositionExists=(position)=>{
        return (productsFilter[position]!=null) ? true : false
    }

    const paginationNext=()=>{
        let startValue = paginationProducts.actualEnd+1
        let endValue=0

        if(isProductPositionExists(paginationProducts.actualEnd + productsShowPerPage)){
            endValue = paginationProducts.actualEnd+ productsShowPerPage
        }else{
            endValue = productsFilter.length-1
        }

        setPaginationProducts(prev=>{
            return{
                prevEnd:prev.actualEnd,
                actualStart:startValue,
                actualEnd:endValue
            }
        })
    }

    const paginationBack=()=>{
        let startValue=0
        let endValue = paginationProducts.actualEnd - productsShowPerPage
        
        if(isProductPositionExists(paginationProducts.actualStart-productsShowPerPage)){
            startValue = paginationProducts.actualStart - productsShowPerPage
            
            if(paginationProducts.actualEnd === productsFilter.length-1){
                endValue = paginationProducts.prevEnd
            }
        }else{
            startValue = 0            
        }
        
        setPaginationProducts(prev=>{
            return{
                prevEnd:prev.actualEnd,
                actualStart:startValue,
                actualEnd:endValue
            }
        })
    }

    return(
        <main className='main'>
            <div className='products-filter-section'>
                <div className='products-filter-actions'>
                    <p className='products-section-count'>{paginationProducts.actualEnd+1} of 32 products</p>
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
                    <button 
                        className='bt-pagination' 
                        onClick={paginationBack}
                        disabled={paginationProducts.actualStart === 0}>
                        <img src={btBackImg}></img>
                    </button>
                    <button 
                        className='bt-pagination'
                        onClick={paginationNext}
                        disabled={paginationProducts.actualEnd === productsFilter.length-1}>
                        <img src={btNextImg}></img>
                    </button>               
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
                <p className='pagination-products-total'>{paginationProducts.actualEnd+1} of 32 products</p>
                <div className='bt-products-back-next'>
                    <img src={btBackImg}></img>
                    <img src={btNextImg}></img>
                </div>
            </div>
           
        </main>
    )
}

export default Products