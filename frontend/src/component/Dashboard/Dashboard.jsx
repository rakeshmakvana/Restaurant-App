import React, { useState } from 'react';
import './Dashboard.css';
import dash1 from '../../assets/dash1.png';
import dash2 from '../../assets/dash2.png';
import dash3 from '../../assets/dash3.png';
import dash4 from '../../assets/dash4.png';
import dash5 from '../../assets/dash5.png';
import dishImage1 from '../../assets/dishImage1.png';
import dishImage2 from '../../assets/dishImage2.png';
import dishImage3 from '../../assets/dishImage3.png';
import dishImage4 from '../../assets/dishImage4.png';
import dishImage5 from '../../assets/dishImage5.png';
import dishImage6 from '../../assets/dishImage6.png';
import { Pie } from 'react-chartjs-2';
import { FaBox, FaStore } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend as ChartLegend } from 'chart.js';

ChartJS.register(ArcElement, ChartTooltip, ChartLegend);

const data1 = [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 30 },
    { month: 'Mar', value: 50 },
    { month: 'Apr', value: 35 },
    { month: 'May', value: 40 },
    { month: 'Jun', value: 55 },
    { month: 'Jul', value: 25 },
    { month: 'Aug', value: 60 },
    { month: 'Sep', value: 48 },
    { month: 'Oct', value: 38 },
    { month: 'Nov', value: 42 },
    { month: 'Dec', value: 30 }
];

const dishes = [
    { image: dishImage1, name: 'Rice Noodles', price: '$12', orders: '100', revenue: '$240' },
    { image: dishImage2, name: 'French Fries', price: '$18', orders: '50', revenue: '$270' },
    { image: dishImage3, name: 'Biryani rice', price: '$10', orders: '120', revenue: '$400' },
    { image: dishImage4, name: 'Pasta', price: '$10', orders: '120', revenue: '$400' },
    { image: dishImage5, name: 'Salad', price: '$10', orders: '120', revenue: '$400' },
    { image: dishImage6, name: 'Rice Noodles', price: '$260', orders: '120', revenue: '$400' },
];

function Dashboard() {
    const [selectedWeek, setSelectedWeek] = useState("This Week");
    const [timeframe, setTimeframe] = useState("Week");

    const data = {
        labels: ['Parcel Order', 'On-Site Order'],
        datasets: [
            {
                data: [587, 475],
                backgroundColor: ['yellow', 'red'],
                borderColor: 'black',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white',
                },
            },
            title: {
                display: true,
                color: 'white',
            },
        },
    };

    const handleWeekChange = (event) => {
        setSelectedWeek(event.target.value);
    };

    const handleTimeframeChange = (event) => {
        setTimeframe(event.target.value);
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-7 section-spacing">
                                <div className="dash-img">
                                    <img src={dash1} alt="dash1" />
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="row dash-widget">
                                    <div className="col-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-img">
                                                    <img src={dash2} alt="dash2" />
                                                    <div className="card-text">
                                                        <p>Total Order Today</p>
                                                        <h3>265</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-img">
                                                    <img src={dash3} alt="dash3" />
                                                    <div className="card-text">
                                                        <p>Average Customer</p>
                                                        <h3>589</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-img">
                                                    <img src={dash4} alt="dash4" />
                                                    <div className="card-text">
                                                        <p>Average Waiting</p>
                                                        <h3>00:30 Hr</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="card-img">
                                                    <img src={dash5} alt="dash5" />
                                                    <div className="card-text">
                                                        <p>Today Revenue</p>
                                                        <h3>Rs256</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <div className="bar-chart-container bar-chart-spacing">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={data1} style={{ backgroundColor: '#1f1d2b' }}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="value" fill="#5783f3" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="pie-container">
                                    <div style={{ backgroundColor: 'rgb(31, 29, 43)', padding: '20px', borderRadius: '8px', color: 'white', marginTop: '10px' }} >
                                        <div style={{ marginBottom: '20px' }}>
                                            <label htmlFor="week-select" style={{ marginRight: '10px' }}>Select Week:</label>
                                            <select
                                                id="week-select"
                                                value={selectedWeek}
                                                onChange={handleWeekChange}
                                                style={{ padding: '5px', borderRadius: '4px', }}>
                                                <option value="This Week" >This Week</option>
                                                <option value="Last Week">Last Week</option>
                                                <option value="Two Weeks Ago">Two Weeks Ago</option>
                                            </select>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div style={{ flex: 1 }}>
                                                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Order Summary</p>
                                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                                    <FaBox style={{ color: 'red', fontSize: '24px', marginRight: '10px' }} />
                                                    <div>
                                                        <span style={{ fontSize: '16px' }}>Parcel Order</span>
                                                        <br />
                                                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>587</span>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <FaStore style={{ color: 'yellow', fontSize: '24px', marginRight: '10px' }} />
                                                    <div>
                                                        <span style={{ fontSize: '16px' }}>On-Site Order</span>
                                                        <br />
                                                        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>475</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                                <div style={{ width: '250px', height: '250px' }}>
                                                    <Pie data={data} options={options} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="dishes">
                                    <div className="dishes-header">
                                        <h3>Popular Dishes</h3>
                                        <select
                                            value={timeframe}
                                            onChange={handleTimeframeChange}
                                            className="timeframe-select"
                                        >
                                            <option value="Week">Week</option>
                                            <option value="Month">Month</option>
                                            <option value="Year">Year</option>
                                        </select>
                                    </div>
                                    <div className="dishes-list-header">
                                        <div>Dish</div>
                                        <div>Price</div>
                                        <div>Orders/Day</div>
                                        <div>Revenue/Day</div>
                                    </div>
                                    <div className="dishes-list">
                                        {dishes.map((dish, index) => (
                                            <div className="dish-item" key={index}>
                                                <div className="dish-image-name">
                                                    <img src={dish.image} alt={dish.name} className="dish-image" />
                                                    <span className="dish-name">{dish.name}</span>
                                                </div>
                                                <div className="dish-price">{dish.price}</div>
                                                <div className="dish-orders">{dish.orders}</div>
                                                <div className="dish-revenue">{dish.revenue}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
