import React from 'react';
import * as P from './parts';

interface NavbarTemplateProps {
  className?: string
}

const NavbarTemplate: React.FC<NavbarTemplateProps> = ({ children, className }) => (
  <P.Wrapper className={className}>
    {children}
  </P.Wrapper>
);

export default NavbarTemplate;