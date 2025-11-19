import '../styles/globals.css';
import * as React from 'react';
import { Manrope, } from 'next/font/google';
import { Header } from '../components/Header';
import { AnalyticsWrapper } from './analytics';
import type { Metadata } from 'next';

const manropeFont = Manrope({
  weight: ['500', '600', '700', '800'],
  subsets: ['latin'],
  adjustFontFallback: false,
  display: 'swap',
});

export const generateMetadata = (): Metadata => {
  const date = new Date();
  const year = date.getFullYear();
  const experience = year - 2018;

  return {
    title: 'farouq.dev | Frontend Engineer',
    description: `I'm Farouq, Front-end developer living in Dublin, Ireland and currently working at VisionR as a Frontend Engineer. Expertise in the development of sophisticated user interface and web applications, with complex business logic with over ${experience} years of professional experience.`,
    keywords: [
      'farouq.dev',
      'ayofef',
      'farouq ayofe',
      'front-end developer',
      'freelance',
      'web developer',
      'portfolio',
      'Frontend Engineer',
      'Frontend Developer',
      'Dublin',
      'Ireland',
      'Frontend',
    ],
    authors: [{ name: 'Farouq Ayofe' }],
    openGraph: {
      title: 'farouq.dev | Frontend Engineer',
      type: 'website',
      url: 'https://farouq.dev',
      images: [{ url: 'https://farouq.dev/farouq.webp' }],
      description: 'Frontend Engineer',
      siteName: 'farouq.dev',
    },
    icons: {
      icon: '/icon.png',
    },
    viewport: 'width=device-width, initial-scale=1',
  };
};

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
