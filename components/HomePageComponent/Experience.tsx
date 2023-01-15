import * as React from 'react';
import classes from './styled.module.scss';
import Image from 'next/image';
import { EXPERIENCE } from './constant';

export interface ExperienceProps {}

export const Experience: React.FunctionComponent<ExperienceProps> = () => {
  return (
    <div className={classes.Wrapper}>
      <p className={classes.Title}>EXPERIENCE</p>

      {EXPERIENCE.map(({ name, tags, year, logo }) => {
        return (
          <div key={name} className={classes.Experience}>
            <div className={classes.Experience__Logo}>
              <Image src={logo} alt="whenthen" width={50} height={50} />
            </div>
            <div className={classes.Experience__Details}>
              <p className={classes.Experience__Title}>{name}</p>
              <div className={classes.TechSkillsWrapper}>
                {tags.map((tag) => {
                  return (
                    <div key={tag} className={classes.TechSkillsItem}>
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={classes.Experience__Years}>
              <p>{year}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
