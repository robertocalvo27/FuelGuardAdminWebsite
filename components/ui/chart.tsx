"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line, Bar, Pie } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']
const values = [65, 59, 80, 81, 56, 55]

export function LineChart() {
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Consumo de Combustible',
        data: values,
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#0ea5e9',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#0ea5e9',
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => `${value}L`,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
  }

  return <Line data={data} options={options} height={350} />
}

export function BarChart() {
  const data = {
    labels: ['Camión 1', 'Camión 2', 'Camión 3', 'Camión 4', 'Camión 5'],
    datasets: [
      {
        label: 'Eficiencia',
        data: [85, 78, 92, 71, 88],
        backgroundColor: '#6366f1',
        borderRadius: 4,
        hoverBackgroundColor: '#4f46e5',
        barThickness: 20,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => `${value}%`,
        },
      },
    },
  }

  return <Bar data={data} options={options} height={350} />
}

export function PieChart() {
  const data = {
    labels: ['Exceso de Velocidad', 'Frenado Brusco', 'Ralentí Excesivo', 'Otros'],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: ['#0ea5e9', '#6366f1', '#84cc16', '#eab308'],
        hoverBackgroundColor: ['#0284c7', '#4f46e5', '#65a30d', '#ca8a04'],
        borderWidth: 0,
        hoverOffset: 10,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
      },
    },
  }

  return <Pie data={data} options={options} height={350} />
}