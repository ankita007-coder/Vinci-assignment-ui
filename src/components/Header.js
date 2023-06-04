import React from 'react';
import { HeaderContainer, Greeting, Profile, Avatar } from '../styles';
import Pic from '../assets/images/user.png';
const Header = () => {
  return (
    <HeaderContainer>
      <Greeting>Welcome back, John!</Greeting>
      <Profile>

        <Avatar src={Pic} alt="User Avatar" />
      </Profile>
    </HeaderContainer>
  );
};

export default Header;
