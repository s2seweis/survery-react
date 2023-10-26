import React from 'react';
import { Bar } from 'react-chartjs-2';
import './playground.css'; // Import the CSS file for styling

const BarChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: [20, 40, 65, 85, 60],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            }
        ]
    };

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: '#333', // Y-axis label color
                },
            }],
            xAxes: [{
                ticks: {
                    fontColor: '#333', // X-axis label color
                },
            }],
        },
        legend: {
            labels: {
                fontColor: '#333', // Legend label color
            }
        }
    };

    return (
        <div className="bar-chart-container">
            <h2 className="chart-title">Monthly Taken Surveys</h2>
            <div className="chart">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default BarChart;
