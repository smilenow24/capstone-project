import {Chart as ChartJS, registerables} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(...registerables);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'false',
    },
    title: {
      display: 'false',
      text: 'absolute values of increase per day',
    },
  },
  scales: {
    xAxis: {
      myScale: {
        type: 'time',
        time: {
          unit: 'day',
          unitStepSize: 1,
          setInterval: 1,
        },
      },
    },
  },
};

const LineChart = ({lineChartData}) => {
  return (
    <div>
      <Line data={lineChartData} options={options} />
    </div>
  );
};

export default LineChart;
