import ProductCard from './ProductCard'
import {getProducts} from '../services/products.js'
import {useState, useEffect} from 'react'
import ReactLoading from 'react-loading'
import PaginationButtons  from './PaginationButtons'
import FilterButtons from './FilterButtons'

const Products=(props)=>{
    const productsShowPerPage = 5
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

    const isProductPositionExists=(position)=>{
        return (productsFilter[position]!=null) ? true : false
    }

    const updatePaginationPosition=(startPosition,endPosition)=>{
        setPaginationProducts(prev=>{
            return {
                prevEnd:prev.actualEnd,
                actualStart:startPosition,
                actualEnd:endPosition
            }
        })
    }

    return(
        <main className='main'>
            <div className='products-filter-section'>
                <div className='products-filter-actions'>
                    <p className='products-section-count'>{paginationProducts.actualEnd+1} of 32 products</p>
                    <p>Sort by:</p>
                    <FilterButtons
                        setProductsFilter={setProductsFilter}
                        setFilterOptionStatus={setFilterOptionStatus}
                        setPaginationProducts={setPaginationProducts}
                        startPaginationProducts={startPaginationProducts}
                        filterOptionStatus = {filterOptionStatus}
                        products = {products}
                    />
                </div>
                <PaginationButtons
                    isProductPositionExists={isProductPositionExists}
                    paginationProducts = {paginationProducts}
                    productsShowPerPage= {productsShowPerPage}
                    totalOfProducts = {productsFilter.length-1}
                    updatePaginationPosition = {updatePaginationPosition}           
                />
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
                <PaginationButtons
                    isProductPositionExists={isProductPositionExists}
                    paginationProducts = {paginationProducts}
                    productsShowPerPage= {productsShowPerPage}
                    totalOfProducts = {productsFilter.length-1}
                    updatePaginationPosition = {updatePaginationPosition}
                />
            </div>
           
        </main>
    )
}

export default Products