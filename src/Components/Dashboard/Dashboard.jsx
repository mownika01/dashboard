import React from 'react'
import Slidebar from './Slidebar';
import './Dashboard.css';
import Main from '../../Components/Dashboard/rightside/index'

const Dashboard = () => {
  return (
    <div className='grid_container'>
        <Slidebar />
        <Main />
    </div>
  )
}
export default Dashboard;