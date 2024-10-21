import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function ForecastChart({ data }) {
  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(item => item.temperature),
        borderColor: '#8884d8',
        fill: true,
        backgroundColor: 'rgba(136, 132, 216, 0.2)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        min: -10, 
        max: 10,
        ticks: {
          callback: function (value) {
            return value + '°C';
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (<Line data={chartData} options={options} />);
}