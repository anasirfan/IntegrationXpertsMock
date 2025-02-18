import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import CustomerSatisfaction from './CustomerSatisfaction';
import TargetReality from './TargetReality';
import VolumeService from './VolumeService';
import TopProducts from './TopProducts';
import SalesMapping from './SalesMapping';
import { CiExport } from "react-icons/ci";
import salesIcon from '../assets/sales-icon.png';
import productIcon from '../assets/product-icon.png';
import customerIcon from '../assets/customer-icon.png';
import orderIcon from '../assets/order-icon.png';
import { useSidebar } from '../context/SidebarContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  const { isCollapsed } = useSidebar();
  const statsData = [
    {
      title: 'Total Sales',
      value: '$1k',
      change: '+8%',
      icon: salesIcon,
      bgColor: 'bg-[#FFE2E5]',
      accentColor: 'text-[#FA5A7D]',
    },
    {
      title: 'Total Order',
      value: '300',
      change: '+5%',
      icon: orderIcon,
      bgColor: 'bg-[#FFF4DE]',
      accentColor: 'text-[#FFA412]',
    },
    {
      title: 'Product Sold',
      value: '5',
      change: '+1.2%',
      icon: productIcon,
      bgColor: 'bg-[#DCFCE7]',
      accentColor: 'text-[#3CD856]',
    },
    {
      title: 'New Customers',
      value: '8',
      change: '0.5%',
      icon: customerIcon,
      bgColor: 'bg-[#F3E8FF]',
      accentColor: 'text-[#A700FF]',
    },
  ];

  const cardStyles = {
    wrapper: "rounded-2xl p-2 sm:p-3 lg:p-4",
    container: "flex flex-col h-full",
    header: "flex items-center justify-between",
    iconContainer: "w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center",
    icon: "w-4 h-4 sm:w-5 sm:h-5",
    changeText: "text-[10px] sm:text-xs",
    contentContainer: "mt-2 sm:mt-3",
    value: "text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800",
    title: "text-xs sm:text-sm text-gray-600"
  };

  const visitorData = {
    labels: months,
    datasets: [
      {
        label: 'Loyal Customers',
        data: [400, 380, 450, 420, 500, 580, 750, 600, 500],
        borderColor: '#A700FF',
        backgroundColor: 'rgba(167, 0, 255, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#A700FF',
      },
      {
        label: 'New Customers',
        data: [300, 350, 320, 400, 380, 450, 600, 450, 380],
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#EF4444',
      },
      {
        label: 'Unique Customers',
        data: [500, 480, 520, 490, 510, 600, 680, 550, 500],
        borderColor: '#3CD856',
        backgroundColor: 'rgba(60, 216, 86, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#3CD856',
      },
    ],
  };

  const revenueData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Online Sales',
        data: [15, 25, 10, 20, 15, 25, 20],
        backgroundColor: '#0095FF',
        barPercentage: 0.6,
      },
      {
        label: 'Offline Sales',
        data: [20, 15, 25, 10, 20, 15, 25],
        backgroundColor: '#00E096',
        barPercentage: 0.6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          boxHeight: 6,
          padding: 8,
          font: {
            size: 11,
            family: 'Inter'
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(163, 174, 208, 0.1)'
        },
        ticks: {
          padding: 8,
          font: {
            size: 10
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          padding: 8,
          font: {
            size: 10
          }
        }
      }
    },
    layout: {
      padding: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
      }
    }
  };

  return (
    <div className={`p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-5 lg:space-y-6 ${!isCollapsed ? '!pl-64' : '!pl-20'}`}>
      {/* First Row - Sales and Visitor Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        <div className="lg:col-span-8 card bg-white p-3 sm:p-4 lg:p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-4 lg:mb-6">
            <div>
              <h3 className="font-semibold text-base lg:text-lg">Today's Sales</h3>
              <p className='text-xs lg:text-sm text-gray-400'>Sales Summary</p>
            </div>
            <button className="text-xs lg:text-sm text-gray-800 border-[1px] border-black/10 font-medium flex items-center py-1.5 px-3 lg:py-2 lg:px-4 rounded-xl space-x-2">
              <CiExport className='w-3 h-3 lg:w-4 lg:h-4' />
              <p>Export</p>
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className={`${cardStyles.wrapper} ${stat.bgColor}`}>
                <div className={`${cardStyles.container}`}>
                  <div className={cardStyles.header}>
                    <div className={cardStyles.iconContainer}>
                      <img src={stat.icon} alt={stat.title} className={cardStyles.icon} />
                    </div>
                  </div>
                  <div className={cardStyles.contentContainer}>
                    <h4 className={cardStyles.value}>{stat.value}</h4>
                    <p className={cardStyles.title}>{stat.title}</p>
                    <p><span className={`${cardStyles.changeText} ${stat.accentColor}`}>
                      {stat.change} from yesterday
                    </span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-4 card bg-white p-3 sm:p-4 lg:p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-4 lg:mb-6">
            <h3 className="font-semibold text-base lg:text-lg">Visitor Insights</h3>
          </div>
          <div className="h-[200px] lg:h-[250px]">
            <Line data={visitorData} options={chartOptions} height={80} />
          </div>
        </div>
      </div>

      {/* Second Row - Revenue, Satisfaction, and Target */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-6">
        <div className="lg:col-span-3 card bg-white p-3 sm:p-4 lg:p-6 rounded-2xl">
          <div className="flex justify-between items-center mb-4 lg:mb-6">
            <h3 className="font-semibold text-base lg:text-lg">Total Revenue</h3>
          </div>
          <div className="h-[200px] lg:h-[250px]">
            <Bar data={revenueData} options={chartOptions} />
          </div>
        </div>

        <div className="lg:col-span-2 card bg-white p-3 sm:p-4 lg:p-6 rounded-2xl">
          <CustomerSatisfaction />
        </div>

        <div className="lg:col-span-2 card bg-white p-3 sm:p-4 lg:p-6 rounded-2xl">
          <TargetReality />
        </div>
      </div>

      {/* Fourth Row */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-6">
        <div className="lg:col-span-3">
          <TopProducts />
        </div>
        <div className="lg:col-span-2">
          <SalesMapping />
        </div>
        <div className="lg:col-span-2">
          <VolumeService />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
