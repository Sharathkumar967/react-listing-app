import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header-section'>
        <div className='hero-text'>
           <span className='hero-text-title'>Marketplace</span>
           <span className='hero-text-subtitle'>property listing</span>
        </div>  
        <img className='hero-img' src='https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
    </div>
  )
}

export default Header