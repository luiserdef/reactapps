

const Dice = (props)=>{
    const dices=props.dices

    function createDots(value){
        const dot=[]
        let number=''
        switch (value){
            case 1:
                number='one'
            break
            case 2:
                number='two'
            break
            case 3:
                number='three'
            break
            case 4:
                number='four'
            break
            case 5:
                number='five'
            break
            case 6:
                number='six'
            break
            default:
        }

        for(let i=0;i<value;i++){
            dot.push(<div key={i}className={`dot ${number}`}></div>)
        }

        return dot
    }

    const renderbuttons=dices.map(element => {
        return(<div 
                    key={element.id} 
                    className={'dice '+(element.selected ? 'diceSelected':'')} 
                    onClick={()=>props.holdDice(element.id)}>
                        {createDots(element.value).map(dot=>dot)}
                </div>)
    });

    return(
        <div className="container-dice">
            {renderbuttons}
        </div>
    )
}

export default Dice