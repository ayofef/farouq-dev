import * as React from 'react';
import classes from './styled.module.scss';

import { TECH_SKILLS } from './constant';

export const TechSkills: React.FunctionComponent = () => {
  return (
    <div className={classes.Wrapper}>
      <p className={classes.Title}>TECHNICAL SKILLS</p>
      <div className={classes.TechSkillsWrapper}>
        {TECH_SKILLS.map((skill) => {
          return (
            <div key={skill} className={classes.TechSkillsItem}>
              {skill}
            </div>
          );
        })}
      </div>
      <br />
    </div>
  );
};
