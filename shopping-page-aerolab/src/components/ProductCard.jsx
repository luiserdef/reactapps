import buyBlueButton from '../assets/icons/buy-blue.svg'
import buyWhiteButton from '../assets/icons/buy-white.svg'
import coinImg from '../assets/icons/coin.svg'
import {useState} from 'react'

const ProductCard=(props)=>{

    const[shopIcon,setShopICon]=useState(()=>({
            backgroundImage:`url(${buyBlueButton})`,
            backgroundRepeat:'no-repeat'
        })
    )
    const isUserCanReedem = props.userCoins>=props.cost ? true: false

    const ProductCardHovered =()=>{
        setShopICon(icon=>({...icon,backgroundImage:`url(${buyWhiteButton})`}))
    }

    const ProductCardNotHovered =()=>{
        setShopICon(icon=>({...icon,backgroundImage:`url(${buyBlueButton})`}))
    }
    let userAvailablePurchaseIcon=<></>
    if(isUserCanReedem){
        userAvailablePurchaseIcon = <div style={shopIcon} className='bt-buy-product-action'></div>
    }else{
        userAvailablePurchaseIcon = <div className='buy-product-coins-info'>
                                        <p>You need {props.cost}</p>
                                        <img style={{width:'20px'}}src={coinImg}></img>
                                    </div>
    }


    return(
        <div className='product-card' onMouseEnter={ProductCardHovered} onMouseLeave={ProductCardNotHovered}>
            {isUserCanReedem && <div className='reedem-products'>
                <div className='points-info'>
                    <p>{props.cost}</p>
                    <img style={{width:'45px',marginTop:'8px'}}src={coinImg}></img> 
                </div>
                <button className='bt-reedem-now'>Reedem Now</button>
            </div>}
            {userAvailablePurchaseIcon}
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