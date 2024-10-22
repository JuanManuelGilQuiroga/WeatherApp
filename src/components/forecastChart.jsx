import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function ForecastChart() {

  const data = [18,20,15,16,15,19,22]
  const dias = ["Mon","Tue","Wen","Thu","Fri","Sat","Sun"]

  const chartData = {
    labels: dias,
    datasets: [
      {
        data: data,
        fill: true,
        backgroundColor: '#2E004E',
        borderColor: '#2E004E',
        pointBorderColor: '#2E004E',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        min: 0, 
        max: 30,
        ticks: {
          color: '',
          callback: function (value) {
            return value + '°C';
          },
        },
      },
      x: {
        ticks: { color: 'black' }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (<Line className='h-[100%]' data={chartData} options={options} />);
}