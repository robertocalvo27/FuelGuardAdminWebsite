"use client"

import { Line, Bar, Pie } from "react-chartjs-2"
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
} from "chart.js"

// Register ChartJS components
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

// Sample data
const data = {
  labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
  datasets: [
    {
      label: "2024",
      data: [65, 59, 80, 81, 56, 55],
      borderColor: "hsl(var(--chart-1))",
      backgroundColor: "hsl(var(--chart-1) / 0.1)",
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
    }
  }
}

export function LineChart() {
  return <Line data={data} options={options} height="300px" />
}

export function BarChart() {
  return <Bar data={data} options={options} height="300px" />
}

export function PieChart() {
  const pieData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "hsl(var(--chart-1))",
          "hsl(var(--chart-2))",
          "hsl(var(--chart-3))",
          "hsl(var(--chart-4))",
          "hsl(var(--chart-5))"
        ]
      }
    ]
  }
  return <Pie data={pieData} options={options} height="300px" />
}