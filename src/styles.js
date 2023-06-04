import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #FFC3A0, #FFAFBD, #BDB2FF, #A2C7FF);
`;

export const SidebarContainer = styled.div`
  width: 110px;
  height: 100%;
 // background-color: #7b68ee; /* Purple */
  padding: 20px;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #ff1493; /* Deep Pink */
`;

export const Menu = styled.ul`
  list-style: none;
  margin-top: 40px;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin-bottom: 10px;
  font-size: 18px;
  color: #2a1e5c; /* Royal Blue */
  cursor: pointer;

  &:hover {
    color: #ff8c00; /* Dark Orange */
  }
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Greeting = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333; /* Dark Gray */
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Username = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333; /* Dark Gray */
`;

export const WidgetContainer = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ff69b4; 
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const WidgetTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333; /* Dark Gray */
`;

export const WidgetContent = styled.div`
 
  padding: 20px;
  border-radius: 8px;
  
  height: 75%;
`;

export const WidgetsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 50%;
  > div {
    flex: 0 0 25%;
  }
`;

export const TableContainer = styled.div`
  height: 150px;
  overflow-y: scroll; /* Enable scrolling within the table container */
  margin-top: 20px;
  padding: 20px;
  // background-color: #A2C7FF;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CalendarContainer = styled.div`
  width: 25%;
  padding: 20px;
  background-color: transparent;
`;

export const CalendarWrapper = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StatisticsWrapper = styled.div`
  margin-top: 20px;
`;

export const ChartContainer = styled.div`
  margin-bottom: 20px;
`;

export const Summary = styled.div`
display:flex;
justify-content: center;
align-items: center;
  > div {
    padding: 10px;
  }
`;
