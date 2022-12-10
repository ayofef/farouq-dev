import * as React from 'react';
import Image from 'next/image';
import profilePic from '../../assets/img/farouq.webp';
import { StyledWrapper } from './HomepageComponent.styled';

import { TechSkills } from './TechSkills';
import { Bio } from './Bio';
import { Contact } from './Contact';

export const HomePageComponent: React.FunctionComponent = () => {
  return (
    <StyledWrapper className="container">
      <div>
        <Image
          src={profilePic}
          alt="Farouq Ayofe - farouq.dev"
          placeholder="blur"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '6px',
          }}
        />
      </div>
      &nbsp;
      {/* 
       Bio
       */}
      <Bio />
      {/* 
       TECH SKills
       */}
      <TechSkills />
      {/* 
       Contact
       */}
      <Contact />
    </StyledWrapper>
  );
};
