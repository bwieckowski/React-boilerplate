import styled from 'styled-components';
import NavbarTemplate from './templates/NavbarTemplate';
import LogoSVG from 'assets/logo.svg';

export const Logo = styled(LogoSVG)`
  width: 100px;
`;
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5px 0;
`;

export const TopDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media only screen and (max-width: 1400px) {
      width: 100%;
      flex-direction: column;
  }
`;

export const CreatorUpdateDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const StyledNavbarTemplate = styled(NavbarTemplate)``