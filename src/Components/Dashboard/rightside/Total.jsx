import React from 'react'
import './total.css'
import data from '../../../Data/data'


const Total = () => {
  return (
    <div className="total_container">
       <div className="total">
        {data.map((item)=>(
         <div className="total_item">
          <div className="icon"style={{background:item.clr}}>
           {item.icon}
           </div>
           <p className='txt'>{item.title}</p>
           <div className="point">
           <h3 className="amnt">{item.amnt}</h3>
           <div className="num">{item.point}</div>
           </div>
         </div>
         ))}
       </div>
    </div>
  )
}

export default Total;