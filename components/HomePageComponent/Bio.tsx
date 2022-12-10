import * as React from 'react';
import classes from './styled.module.scss';

export const Bio: React.FunctionComponent = () => {
  const date = new Date();

  const year = date.getUTCFullYear();

  const age = year - 1996;

  const experience = year - 2019;

  return (
    <div className={classes.Wrapper}>
      <p className={classes.Title}>ABOUT ME</p>
      <h2 className={classes.BioGreetings}>Hi, I&apos;m Farouq.</h2>
      <br />
      <p className={classes.BioBlob}>
        I&apos;m <strong>Farouq</strong> , a {age} years old <strong>Front-end</strong> developer living in Dublin,
        Ireland and currently working at VisionR as a Frontend Engineer. Expertise in the development of sophisticated
        user interface and web applications with complex business logic with over {experience} years of professional
        experience.
      </p>
      <br />
      <p className={classes.BioBlob}>I&apos;m hard working, super curious, dedicated, and also a fast learner!</p>
    </div>
  );
};
