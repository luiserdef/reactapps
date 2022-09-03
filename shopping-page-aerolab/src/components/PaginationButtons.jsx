import btBackImg from '../assets/icons/arrow-left.svg'
import btNextImg from '../assets/icons/arrow-right.svg'

const PaginationButtons=(props)=>{


    const paginationNext=()=>{
        let startValue = props.paginationProducts.actualEnd + 1
        let endValue=0

        if(props.isProductPositionExists(props.paginationProducts.actualEnd + props.productsShowPerPage)){
            endValue = props.paginationProducts.actualEnd+  props.productsShowPerPage
        }else{
            endValue = props.totalOfProducts
        }

        props.updatePaginationPosition(startValue,endValue)
    }

    const paginationBack=()=>{
        let startValue=0
        let endValue = props.paginationProducts.actualEnd - props.productsShowPerPage
        
        if(props.isProductPositionExists(props.paginationProducts.actualStart - props.productsShowPerPage)){
            startValue = props.paginationProducts.actualStart - props.productsShowPerPage
            
            if(props.paginationProducts.actualEnd === props.totalOfProducts){
                endValue = props.paginationProducts.prevEnd
            }
        }else{
            startValue = 0            
        }

        props.updatePaginationPosition(startValue,endValue)   
    }


    return (
        <div className='bt-products-back-next'>
            <button 
                className='bt-pagination' 
                onClick={paginationBack}
                disabled={props.paginationProducts.actualStart === 0}>
                <img src={btBackImg}></img>
            </button>
            <button 
                className='bt-pagination'
                onClick={paginationNext}
                disabled={props.paginationProducts.actualEnd === props.totalOfProducts}>
                <img src={btNextImg}></img>
            </button>               
        </div>
    )

}

export default PaginationButtons