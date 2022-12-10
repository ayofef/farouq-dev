import * as React from 'react';
import classes from './styled.module.scss';

interface HeaderProps {}

export const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header className={`container ${classes.Header}`}>
      <h1>farouq.dev</h1>
    </header>
  );
};
