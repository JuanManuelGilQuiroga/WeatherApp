import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function ForecastChart({data, labelsPositions}) {
  console.log(labelsPositions)
  const [days, setDays] = useState([]);

  const getWeekDays = (labelsParam) => {
    const diasSemana = ["Sun","Mon","Tue","Wen","Thu","Fri","Sat"]
    let weekdays = labelsParam.map(date => {
        // Obtener el día de la semana (0-6) directamente
        const dayIndex = new Date(date).getDay(); 
        return diasSemana[dayIndex];
    });
    return weekdays
  }

  useEffect(() => {
    if (labelsPositions && labelsPositions.length > 0) {
        const filteredLabels = getWeekDays(labelsPositions);
        setDays(filteredLabels);
    }
  }, [labelsPositions]);

  //const data = [18,20,15,16,15,19,22]
  const chartData = {
    labels: days,
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