import '../styles/globals.css';
import * as React from 'react';
import { Manrope, } from 'next/font/google';
import { Header } from '../components/Header';
import { AnalyticsWrapper } from './analytics';

const manropeFont = Manrope({
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
  adjustFontFallback: false,
  display: 'swap',
});

const PageLayout: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en" className={manropeFont.className}>
      <body>
        <Header />

        <div>{children}</div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
};

export default PageLayout;
