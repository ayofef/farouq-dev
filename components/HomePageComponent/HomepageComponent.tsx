import * as React from 'react'; 
import classes from './styled.module.scss';

import { TechSkills } from './TechSkills';
import { Bio } from './Bio';
import { Contact } from './Contact';
import { Experience } from './Experience';

export const HomePageComponent: React.FunctionComponent = () => {
  return (
    <div className={`container ${classes.Wrapper}`}>
        
      <Bio />
      <TechSkills />
      <Experience />
      <Contact />
    </div>
  );
};
