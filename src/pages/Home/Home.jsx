import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Home = () => {

    const { allCoin, currency } = useContext(CoinContext);
    const [displayCoin, setDisplayCoini] = useState([]);
    const [input, setInput] = useState('');

    const inputHandler = async (e) => {
        // e.preventDefault()
        setInput(e.target.value);
        if (e.target.value === "") {
            setDisplayCoini(allCoin)
        }
    }


    const searchHandler = async (e) => {
        e.preventDefault()
        const coins = await allCoin.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))
        setDisplayCoini(coins)
    }

    useEffect(() => {
        setDisplayCoini(allCoin)
    }, [allCoin])

    return (
        <div className='home'>
            <div className='hero'>
                <h1>Largest <br /> Crypto Marketplace</h1>
                <p>Welcome to the world's largest cyptocurrency marketplace. Sign up to explore more about cryptos.</p>
                <form onSubmit={searchHandler}>
                    <input onChange={inputHandler} list='coinlist' value={input} type="text" name="" id="" placeholder='Search Crypto' required />

                    <datalist id='coinlist'>
                        {allCoin.map((item, index) => (
                            <option key={index} value={item.name} />
                        ))}
                    </datalist>

                    <button type='submit'>Search</button>
                </form>
            </div>
            <div className='crypto-table'>
                <div className="table-layout">
                    <p>#</p>
                    <p>coins</p>
                    <p>Price</p>
                    <p style={{ textAlign: "center" }}>24H Change</p>
                    <p className='market-gap'>Market Cap</p>
                </div>

                {
                    displayCoin.slice(0, 10).map((item, index) => (
                        <Link to={`/coin/${item.id}`} className='table-layout' key={index}>
                            <p>{item.market_cap_rank}</p>
                            <div>
                                <img src={item.image} />
                                <p>{item.name + " - " + item.symbol}</p>
                            </div>
                            <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                            <p className={item.price_change_percentage_24h > 0 ? 'green' : 'red'}>{Math.floor(item.price_change_percentage_24h * 100) / 100}</p>
                            <p className='market-gap'>{currency.symbol} {item.market_cap.toLocaleString()}</p>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}

export default Home
