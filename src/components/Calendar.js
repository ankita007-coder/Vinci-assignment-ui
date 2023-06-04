import React from 'react';
import Calendar from 'react-calendar';
import { CalendarWrapper, StatisticsWrapper, ChartContainer, Summary } from '../styles';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import "../App.css";

const orderData = [
  { date: '2023-01', orders: 200, returns: 50 },
  { date: '2023-02', orders: 180, returns: 30 },
  { date: '2023-03', orders: 150, returns: 40 },
  { date: '2023-04', orders: 190, returns: 40 },
  // Add more data as needed
];

const CalendarComponent = () => {
  return (
    <CalendarWrapper>
      <Calendar className="calendar" width={300} height={350}/>
      <StatisticsWrapper>
        <ChartContainer>
          <BarChart width={200} height={200} data={orderData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="orders" fill="#ff3030" />
            <Bar dataKey="returns" fill="#7b68ee" />
          </BarChart>
        </ChartContainer>
        <Summary>
          <div>
            <span>Orders: </span>
            <span>{orderData.reduce((total, item) => total + item.orders, 0)}</span>
          </div>
          <div>
            <span>Returns: </span>
            <span>{orderData.reduce((total, item) => total + item.returns, 0)}</span>
          </div>
          <div>
            <span>Total Sales: </span>
            <span>{/* Add the calculation for total sales */}</span>
          </div>
        </Summary>
      </StatisticsWrapper>
    </CalendarWrapper>
  );
};

export default CalendarComponent;
