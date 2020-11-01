import React from 'react';
import StyledNavbarTemplate from './templates/NavbarTemplate';
import * as P from './parts';
import LogoSVG from 'assets/logo.svg';

console.log(LogoSVG)

const HomePage = () => (
  <StyledNavbarTemplate>
    <P.Logo src={LogoSVG} />
  </StyledNavbarTemplate>
)

export default HomePage;