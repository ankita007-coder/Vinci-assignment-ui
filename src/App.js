import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Widget1 from './components/Widget1.js';
import Widget2 from './components/Widget2';
import Widget3 from './components/Widget3';
import Table from './components/Table';
import CalendarComponent from './components/Calendar'; // Import the Calendar component
import { Container, MainContent, WidgetsContainer, TableContainer, CalendarContainer } from './styles';
import './App.css';

const App = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Header />
        <WidgetsContainer>
          <Widget1 />
          <Widget2 />
          <Widget3 />
        </WidgetsContainer>
        <TableContainer>
          <Table />
        </TableContainer>
      </MainContent>
      <CalendarContainer>
        <CalendarComponent /> {/* Render the CalendarComponent */}
      </CalendarContainer>
    </Container>
  );
};

export default App;
