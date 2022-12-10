import '../styles/globals.css';
import * as React from 'react';
import { Manrope, Courier_Prime } from '@next/font/google';
import { Header } from '../components/Header';

const manropeFont = Manrope({
  weight: ['500', '600', '700', '800'],
});

const PageLayout: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en" className={manropeFont.className}>
      <body>
        <Header />

        <div>{children}</div>
      </body>
    </html>
  );
};

export default PageLayout;
