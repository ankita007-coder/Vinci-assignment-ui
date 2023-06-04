import React from 'react';
import { SidebarContainer, Logo, Menu, MenuItem } from '../styles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>Dashboard</Logo>
      <Menu>
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>Analytics</MenuItem>
        <MenuItem>Reports</MenuItem>
        <MenuItem>Settings</MenuItem>
      </Menu>
    </SidebarContainer>
  );
};

export default Sidebar;
