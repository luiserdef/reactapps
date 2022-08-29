import buyBlueButton from '../assets/icons/buy-blue.svg'
import coinImg from '../assets/icons/coin.svg'

const ProductCard=()=>{

    const blueButtonActionStyle={
        background:`url(${buyBlueButton})`,
        backgroundRepeat:'no-repeat'
    }

    return(
        <div className='product-card'>
            {/* <div style={blueButtonActionStyle} className='bt-buy-product-action'></div> */}
            {/* <div className='buy-product-coins-info'>
                <p>You need 100</p>
                <img style={{width:'20px'}}src={coinImg}></img>
            </div> */}
            <div className='product-img'>
                <img></img>
            </div>                    
            <div className='product-detail'>
                <p className='product-detail-category'>Razer naga</p>
                <p className='product-detail-name'>Razer Naga Chroma</p>
            </div>
        </div>
    )
}

export default ProductCard