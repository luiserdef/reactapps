

const FilterButtons =(props)=>{

    const filterProductsLowestPrice =()=>{
        const newFilteredProducts= props.products.slice().sort((a,b)=>{
            return a.cost - b.cost
        })
        props.setProductsFilter(newFilteredProducts)
        props.setFilterOptionStatus({option:'lowest'})
        props.setPaginationProducts(props.startPaginationProducts)
    }

    const filterProductsMostRecent =()=>{
        props.setProductsFilter(props.products)
        props.setFilterOptionStatus({option:'recent'})
        props.setPaginationProducts(props.startPaginationProducts)
    }
    
    const filterProductsHighestPrice =()=>{
        const  newFilteredProducts= props.products.slice().sort((a,b)=>{
            return b.cost - a.cost
        })
        props.setProductsFilter(newFilteredProducts)
        props.setFilterOptionStatus({option:'highest'})
        props.setPaginationProducts(props.startPaginationProducts)
    }

        const isOptionSelected = (option)=>{
            if(props.filterOptionStatus.option == option){
                return true
            }else{
                return false
            }
        }

return(
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
)

}

export default FilterButtons