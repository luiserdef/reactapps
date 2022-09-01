import logo from '../assets/logo.svg'
import coin from '../assets/icons/coin.svg'

const Header = (props)=>{
return(
    <header className='header'>
        <a href='#'><img src={logo} className='logo' ></img></a>
        <div className='profile-info'>
            <h2>{props.name}</h2>
            <div className='user-info-points'>
                <p>{props.coins}</p>
                <img src={coin}></img>
            </div>
        </div>
    </header>
)
}

export default Header