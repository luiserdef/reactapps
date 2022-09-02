import buyBlueButton from '../assets/icons/buy-blue.svg'
import buyWhiteButton from '../assets/icons/buy-white.svg'
import coinImg from '../assets/icons/coin.svg'
import {useState} from 'react'

const ProductCard=(props)=>{

    const [reedemProduct,setRedeemProduct]=useState({display:'none'})
    const[isProductSelectedForBuy,setIsProductSelectedForBuy]=useState(false)
    const[shopIcon,setShopICon]=useState(()=>({
            backgroundImage:`url(${buyBlueButton})`,
            backgroundRepeat:'no-repeat'
        })
    )
    const isUserCanReedem = props.userCoins >= props.cost ? true: false

    function selectBuyProduct(){
        if(isProductSelectedForBuy){
            setRedeemProduct({display:'none'})
            setShopICon(icon=>({...icon,backgroundImage:`url(${buyBlueButton})`}))
        }else{
            setRedeemProduct({display:'flex'})
            setShopICon(icon=>({...icon,backgroundImage:`url(${buyWhiteButton})`,zIndex:1}))
        }

        setIsProductSelectedForBuy(e=>!e)
    }

    let userAvailablePurchaseIcon=<></>
    if(isUserCanReedem){
        userAvailablePurchaseIcon = <div style={shopIcon} onClick={selectBuyProduct} className='bt-buy-product-action'></div>
    }else{
        const coinsNeeded =props.cost-props.userCoins
        userAvailablePurchaseIcon = <div className='buy-product-coins-info'>
                                        <p>You need {coinsNeeded}</p>
                                        <img style={{width:'20px'}}src={coinImg}></img>
                                    </div>
    }

    return(
        <div className='product-card'>
            {userAvailablePurchaseIcon}
            <div className='product-img'>
                <img src={props.img}></img>
            </div>                    
            <div className='product-detail'>
                <p className='product-detail-category'>{props.category}</p>
                <p className='product-detail-name'>{props.name}</p>
            </div>
            {isUserCanReedem && <div style={reedemProduct} className='reedem-products'>
                <div className='points-info'>
                    <p>{props.cost}</p>
                    <img style={{width:'45px',marginTop:'8px'}}src={coinImg}></img> 
                </div>
                <button className='bt-reedem-now'>Reedem Now</button>
            </div>}
        </div>
    )
}

export default ProductCard