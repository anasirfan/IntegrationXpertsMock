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
import targetIcon from '../assets/target.png';
import realityIcon from '../assets/reality.png';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TargetReality = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug'],
    datasets: [
      {
        label: 'Reality Sales',
        data: [8.823, 7.9, 8.5, 8.1, 8.6, 8.3, 8.9, 8.923],
        backgroundColor: '#4AB58E',
        barThickness: 12,
        borderRadius: 4
      },
      {
        label: 'Target Sales',
        data: [12.122, 11.2, 12.5, 11.8, 12.8, 11.9, 12.8, 12.122],
        backgroundColor: '#FFCF00',
        barThickness: 12,
        borderRadius: 4
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
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}k`;
          }
        }
      }
    },
    scales: {
      x: {
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
        display: false
      }
    }
  };

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg">Target vs Reality</h3>
      </div>
      <div className="h-[200px]">
        <Bar data={data} options={options} />
      </div>
      <div className="flex flex-col space-y-2  items-start mt-3">
        <div className="flex space-x-10">
          <div className="flex items-center gap-2">
            <div className='bg-[#4AB58E] bg-opacity-50 p-3 rounded-lg'>
            <img src={realityIcon} className='w-5 h-5' alt="target" />
            </div>
            <div className="flex flex-col ">
              <span className="text-sm font-semibold">Reality Sales</span>
              <p className='text-xs text-gray-600'>Global</p>
            </div>
          </div>
          <p className="text-lg text-[#4AB58E] font-semibold mt-1">{data.datasets[0].data[data.datasets[0].data.length - 1]}</p>
        </div>
        <div className="flex space-x-10">
          <div className="flex items-center gap-2">
            <div className='bg-[#FFA800] bg-opacity-50 p-3 rounded-lg'>
            <img src={targetIcon} className='w-5 h-5' alt="target" />
            </div>
            <div className="flex flex-col ">
              <span className="text-sm font-semibold">Target Sales</span>
              <p className='text-xs text-gray-600'>Commercial</p>
            </div>
          </div>
          <p className="text-lg text-[#FFA800] font-semibold mt-1">{data.datasets[1].data[data.datasets[1].data.length - 1]}</p>
        </div>
        
      </div>
    </div>
  );
};

export default TargetReality;
