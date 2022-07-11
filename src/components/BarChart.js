import {Chart as ChartJS, registerables} from 'chart.js';
//import {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(...registerables);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'absolut values of increase per day',
    },
  },
};

function BarChart({barChartData}) {
  return (
    <BarChartContainer>
      <Bar data={barChartData} options={options} />
    </BarChartContainer>
  );
}

export default BarChart;

const BarChartContainer = styled.div`
  width: auto;
  height: 100px;
`;