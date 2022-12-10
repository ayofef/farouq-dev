import * as React from 'react';
import { StyledHeader } from './Header.styled';

interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <StyledHeader className="container">
      <h1>farouq.dev</h1>
    </StyledHeader>
  );
};
