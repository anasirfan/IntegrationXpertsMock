import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VolumeService = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Services',
        data: [0.835, 0.9, 0.8, 0.9, 0.7, 0.6],
        backgroundColor: '#00E096',
        barThickness: 25,
        borderRadius: {
          topLeft: 4,
          topRight: 4
        }
      },
      {
        label: 'Volume',
        data: [1.135, 1.3, 1.1, 1.2, 0.9, 0.8],
        backgroundColor: '#0095FF',
        barThickness: 25,
        borderRadius: {
          topLeft: 4,
          topRight: 4
        }
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: '#000',
        bodyColor: '#666',
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 12,
        usePointStyle: true
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          font: {
            size: 11,
            family: "'Poppins', sans-serif"
          },
          color: '#737791'
        }
      },
      y: {
        stacked: true,
        display: false,
        beginAtZero: true
      }
    }
  };

  return (
    <div className="card bg-white p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg">Volume vs Service Level</h3>
      </div>
      <div className="h-[200px]">
        <Bar data={data} options={options} />
      </div>
      <div className="flex justify-center items-center mt-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#0095FF]"></div>
            <span className="text-md text-gray-600">Volume</span>
          </div>
          <span className="text-sm font-semibold mt-1">{data.datasets[1].data[0]}</span>
        </div>
        <div className="mx-4 h-8 w-px bg-gray-300"></div>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00E096]"></div>
            <span className="text-md text-gray-600">Services</span>
          </div>
          <span className="text-sm font-semibold mt-1">{data.datasets[0].data[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default VolumeService;
