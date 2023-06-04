import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WidgetContainer, WidgetTitle, WidgetContent } from '../styles';
import { widget2Data } from '../mockData/widget2Data';

const Widget2 = () => {
  return (
    <WidgetContainer>
      <WidgetTitle>Widget 2</WidgetTitle>
      <WidgetContent>
        <ResponsiveContainer width="100%">
          <BarChart data={widget2Data.data}>
            <XAxis dataKey="x" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Bar dataKey="y" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </WidgetContent>
    </WidgetContainer>
  );
};

export default Widget2;
