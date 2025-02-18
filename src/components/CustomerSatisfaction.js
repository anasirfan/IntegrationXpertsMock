import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const CustomerSatisfaction = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Last Month',
        data: [3004, 2850, 2900, 2800, 2950, 2800, 3100],
        borderColor: '#0095FF',
        backgroundColor: 'rgba(0, 149, 255, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#0095FF',
      },
      {
        label: 'This Month',
        data: [4504, 4300, 4600, 4200, 4800, 4100, 4900],
        borderColor: '#00E096',
        backgroundColor: 'rgba(0, 224, 150, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#00E096',
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 11,
            family: "'Poppins', sans-serif"
          },
          color: '#737791'
        },
        border: {
          display: false
        }
      }
    }
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg">Customer Satisfaction</h3>
      </div>
      <div className="h-[200px]">
        <Line data={data} options={options} />
      </div>
      <div className="flex justify-center items-center mt-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#0095FF]"></div>
            <span className="text-sm text-gray-600">Last Month</span>
          </div>
          <span className="text-sm font-semibold mt-1">${data.datasets[0].data[data.datasets[0].data.length - 1]}</span>
        </div>
        <div className="mx-4 h-8 w-px bg-gray-200"></div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00E096]"></div>
            <span className="text-sm text-gray-600">This Month</span>
          </div>
          <span className="text-sm font-semibold mt-1">${data.datasets[1].data[data.datasets[1].data.length - 1]}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
