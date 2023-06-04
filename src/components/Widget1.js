import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WidgetContainer, WidgetTitle, WidgetContent } from '../styles';
import { widget1Data } from '../mockData/widget1Data';

const Widget1 = () => {
  return (
    <WidgetContainer>
      <WidgetTitle>Widget 1</WidgetTitle>
      <WidgetContent>
        <ResponsiveContainer width="100%">
          <LineChart data={widget1Data.data}>
            <XAxis dataKey="x" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line type="monotone" dataKey="y" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </WidgetContent>
    </WidgetContainer>
  );
};

export default Widget1;
