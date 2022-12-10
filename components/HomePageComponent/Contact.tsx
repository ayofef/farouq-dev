import * as React from 'react';
import { StyledWrapper, StyledTitle, StyledContactLinks } from './HomepageComponent.styled';
import { CONTACT_LINKS } from './constant';
import Link from 'next/link';

export const Contact: React.FunctionComponent = () => {
  return (
    <StyledWrapper>
      <StyledTitle>LINKS</StyledTitle>
      <StyledContactLinks>
        {CONTACT_LINKS.map(({ url, label }) => {
          return (
            <Link key={label} href={url} target="_blank" rel="noreferrer noopener" className="contact-link">
              {label}
            </Link>
          );
        })}
      </StyledContactLinks>
    </StyledWrapper>
  );
};
