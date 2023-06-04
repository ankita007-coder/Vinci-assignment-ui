import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WidgetContainer, WidgetTitle, WidgetContent } from '../styles';
import { widget3Data } from '../mockData/widget3Data';

const Widget3 = () => {
  return (
    <WidgetContainer>
      <WidgetTitle>Widget 3</WidgetTitle>
      <WidgetContent>
        <ResponsiveContainer width="100%">
          <AreaChart data={widget3Data.data}>
            <XAxis dataKey="x" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="y" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </WidgetContent>
    </WidgetContainer>
  );
};

export default Widget3;
