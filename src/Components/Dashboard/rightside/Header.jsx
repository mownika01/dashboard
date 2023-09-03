import React from 'react'
import {IoIosSearch} from 'react-icons/io'
import {BsBell} from 'react-icons/bs'
import './header.css'
import img from '../../../assests/img1.jfif'

const Header = () => {
  return (
    <div className="header_container">
      <div className="header">
         <h1 className='header_title'>Dashboard</h1>
      </div>
      <div className="input_field">
              <div className='wrap'>
                <input type="text" placeholder='Search'/>
                <IoIosSearch/>
              </div>
               <BsBell size={18} />
              <img src={img} />
        </div>
    </div>
  )
}
export default Header;