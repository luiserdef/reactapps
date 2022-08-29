import heroImg from '../assets/hero.png'

const Hero =()=>{

const styleBackgroundHero={
    backgroundImage:`url(${heroImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition:'right'
}

    return(
        <div style={styleBackgroundHero} className='hero'>
            <h1>Electronics</h1>
        </div>
    )
}

export default Hero