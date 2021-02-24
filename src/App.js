import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Coin from './Coin'
import './App.css'

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let fetchData = async () => {
      try {
        const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        console.log(res.data)
        setCoins(res.data)
      }
      catch(err) {
        console.log(err)
      }   
    }
    fetchData()
  }, [])

  const changeHandler = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a Currency</h1>
        <form action="">
          <input type="text" placeholder="Search" className="coin-input" onChange={changeHandler}/>
        </form>
      </div>
      {
        filteredCoins.map(coin => {
          return <Coin
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />
        })
      }
    </div>
  )
}

export default App

// git add . add all files to the staging area to be commited to local repository
// git rm --cached <file> remove file from staging area to untracked file
// git restore --staged <file> not staged for commit
// git restore <file> to discard changes in working directory
// git config --global user.name "Kunal  ncxjk"
// git branch <>  git checkout <>
