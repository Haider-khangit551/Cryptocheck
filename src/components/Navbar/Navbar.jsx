import React, { useContext } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const { setCurrency } = useContext(CoinContext)

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({
          name: "usd",
          symbol: "$"
        })
        break;
      }

      case "eur": {
        setCurrency({
          name: "eur",
          symbol: "€"
        })
        break;
      }

      case "inr": {
        setCurrency({
          name: "inr",
          symbol: "₹"
        })
        break;
      }

      default: {
        setCurrency({
          name: "usd",
          symbol: "$"
        })
        break;

      }

    }
  }

  return (
    <div className='navbar'>
      {/* <img src={logo} className='logo' alt="" /> */}
      <Link to='/'><h1>CRYPTOPLACE</h1></Link>

      <ul>

        <Link to='/'><li>Home</li></Link>
        <Link to='/feature'><li>Features</li></Link>
        <Link to='/'><li>Pricing</li></Link>
        <Link to='/blogs'> <li>Blog</li></Link >
      </ul >
      <div className="navright">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EURO</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign up <img src={arrow_icon} alt="" /></button>
      </div>
    </div >
  )
}

export default Navbar
