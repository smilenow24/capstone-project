import {Chart as ChartJS, registerables} from 'chart.js';
import {Line} from 'react-chartjs-2';
ChartJS.register(...registerables);

const data = {
  labels: ['w1', 'w2', 'w3', 'w4'],
  datasets: [
    {
      data: [112, 118, 119, 120, 122],
      borderColor: 'red',
      backgroundColor: 'red',
      borderWidth: 5,
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} options={{maintainAspectRatio: false}} />
    </div>
  );
};

export default LineChart;
