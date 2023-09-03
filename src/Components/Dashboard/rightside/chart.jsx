import React from "react";
import { Bar } from "react-chartjs-2";
import "./chart.css";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const chart = () => {
  const data = {
    labels: ["week1", "week2", "week3", "week4"],
    datasets: [
      {
        label: "Guest",
        data: [400, 450, 300, 350],
        backgroundColor: "#EE8484",
        border: "none",
      },
      {
        label: "User",
        data: [500, 350, 200, 400],
        backgroundColor: "#98D89E",
        border: "none",
      },
    ],
  };

  const options = {};

  return (
    <div className="barchart_container">
      <div className="barchart">
        <h3 className="title">Activities</h3>
        <p className="barchart_mnth">May - June 2021</p>
        <div className="bar_graph">
          <Bar data={data} options={options} width={1000}></Bar>
        </div>
      </div>
    </div>
  );
};

export default chart;
