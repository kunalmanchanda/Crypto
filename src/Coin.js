import React from 'react'
import './Coin.css'

const Coin = (props) => {
    // console.log(props)
    const { image, name, symbol, price, volume, priceChange, marketcap } = props
    // console.log(volume)
    let prc = null;

    if(priceChange < 0)
    {
        prc = <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
    }
    else
    {
        prc = <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
    }

    return (
        <div className="coin-continer">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">₹{price}</p>
                    <p className="coin-volume">₹{volume == null ? 0 : volume.toLocaleString()}</p>
                    {prc}
                    <p className='coin-marketcap'>
                        Mkt Cap: ₹{marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
