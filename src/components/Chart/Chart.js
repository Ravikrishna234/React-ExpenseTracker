import React from "react";
import ChartBar from "./ChartBar";
// import './chart.css'
// import ''.
import "./Chart.css";
function Chart(props) {
  return (
  <div className="chart">
      {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={}
            label={dataPoint.label}
          ></ChartBar>
      ))}
  </div>
  );
}
export default Chart;
