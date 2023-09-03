import React from "react";
import "./donutChart.css";
import Chart from "react-apexcharts";
import {AiOutlinePlus} from 'react-icons/ai'

const DonutChart = () => {

  return (
    <div className="d_container">
      <div className="donut_chart">
        <h2>Top Products</h2>
        <div className="time">
          <p>May - June 2021</p>
        </div>
        <Chart
          type="donut"
          width={330}
          height={180}
          series={[400, 300, 350]}
          
          options={{
            colors:["#98D89E", "#F6DC7D", "#EE8484"],
            labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
            dataLabels:{
              enabled: false,
              }
          }}
        />
      </div>
      <div className="modal">
        <div className="add_sign">
          <div className="icon">
           <AiOutlinePlus size={50} />
           </div>
          <h3>Add Products</h3>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
