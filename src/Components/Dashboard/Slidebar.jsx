import React from 'react'
import './slidebar.css'
import {FiPieChart} from 'react-icons/fi'
import {LuTags} from 'react-icons/lu'
import {TbCalendarTime} from 'react-icons/tb'
import {FaRegCircleUser} from 'react-icons/fa6'
import {AiOutlineSetting} from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className="sidebar_container">
        <div className="wrapper">
          <h1 className='slidebar_title'>Board.</h1>
          <div className="menuitems">
            <div className="menuitem">
              <FiPieChart size={18}/>
              <a href="" className='menu_title new'>Dashboard</a>
            </div>
            <div className="menuitem">
              <LuTags size={18} />
              <a href= " " className='menu_title'>Transactions</a>
            </div>
            <div className="menuitem">
              <TbCalendarTime size={18}/>
              <a href= " " className='menu_title'>Schedules</a>
            </div>
            <div className="menuitem">
              <FaRegCircleUser size={18}/>
              <a href= " "className='menu_title'>Users</a>
            </div>
             <div className="menuitem">
              <AiOutlineSetting size={18}/>
              <a href= " "className='menu_title'>Settings</a>
            </div>
          </div>
        </div>
        <div className="contact">
            <a href= " " className='heading_slidebar'>Help</a>
            <a href= " "className='heading_slidebar'>Contact Us</a>
        </div>
    </div>
  )
}

export default Sidebar;