import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const options = {};
  const data = {
    labels: ["Mon", "Tue", "Wed", "Wed", "Wed", "Wed", "Wed"],
    datasets: [
      {
        label: "steps",
        data: [3000, 2000, 1000, 200, 2000, 1000, 5000],
        borderColor: "rgb(75,192,192)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
