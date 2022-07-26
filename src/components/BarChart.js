import {Chart as ChartJS, registerables} from 'chart.js';
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
      text: 'absolute values of increase per day',
      color: '#d7dcde',
    },

    labels: {
      xAxes: {
        ticks: {
          color: '#d7dcde',
        },
      },
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
  width: 20rem;
  height: 120px;
`;
