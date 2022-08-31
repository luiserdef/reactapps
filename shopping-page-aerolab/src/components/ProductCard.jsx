import buyBlueButton from '../assets/icons/buy-blue.svg'
import coinImg from '../assets/icons/coin.svg'

const ProductCard=(props)=>{

    const blueButtonActionStyle={
        background:`url(${buyBlueButton})`,
        backgroundRepeat:'no-repeat'
    }

    return(
        <div className='product-card'>
            {/* <div style={blueButtonActionStyle} className='bt-buy-product-action'></div> */}
            <div className='buy-product-coins-info'>
                <p>You need {props.cost}</p>
                <img style={{width:'20px'}}src={coinImg}></img>
            </div>
            <div className='product-img'>
                <img src={props.img}></img>
            </div>                    
            <div className='product-detail'>
                <p className='product-detail-category'>{props.category}</p>
                <p className='product-detail-name'>{props.name}</p>
            </div>
        </div>
    )
}

export default ProductCard