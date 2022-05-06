import React from "react";
import { Chart } from "react-google-charts";

import './barChart.css';

const BarChart = () => {
   const data = [
    ["Day", "Vocabulary", "Grammar", "Listening", "Writing"],
    ["Mon", 79, 44, 41, 32],
    ["Tue", 0, 0, 174, 22],
    ["Wed", 42, 33, 97, 20],
    ["Thu", 38, 0, 0, 158],
    ["Fri", 48, 51, 75, 22],
    ["Sat", 47, 38, 0, 111],
    ["Sun", 58, 37, 101, 0]
  ];
  const options = {
    legend: "none",
    series: {
      0: { color: "#FF808B" },
      1: { color: "#4D4CAC" },
      2: { color: "#5E81F4" },
      3: { color: "#C8C9E9" }
    },
    bar: { groupWidth: "10%" },
    title: "",
    chartArea: { left: 0, top: 0, width: "100%", height: "100%" },
    isStacked: true,
    lineWidth: 3.5,
    hAxis: {
      textPosition: 'none',
      gridlines: {
        color: 'transparent'
      }
    },
    vAxis: {
      textPosition: 'none',
      gridlines: {
        color: 'transparent'
      }
    },
  };
  const labels = [
    { name: 'Vocabulary', label: 'vocabulary' },
    { name: 'Grammar', label: 'grammar' },
    { name: 'Listening', label: 'listening' }, 
    { name: 'Writing', label: 'writing' }, 
  ];
      
    return (
      <div>
        <Chart
          chartType="ColumnChart"
          width="470px"
          data={data}
          options={options}
        />
        <div className='x-axis-label'>
          {
            labels.map((label) => {
             return <div style={{ display: 'flex' }}>
                <div className={`${label.label}`}></div>
                <div className='labelText'>{label.name}</div>
            </div>
            })
          }
        </div>

      </div>
    );
};

export default BarChart;
