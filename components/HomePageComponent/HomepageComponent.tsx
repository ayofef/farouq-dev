import * as React from 'react';
import Image from 'next/image';
import profilePic from '../../public/farouq.webp';
import classes from './styled.module.scss';

import { TechSkills } from './TechSkills';
import { Bio } from './Bio';
import { Contact } from './Contact';

export const HomePageComponent: React.FunctionComponent = () => {
  return (
    <div className={`container ${classes.Wrapper}`}>
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
    </div>
  );
};
