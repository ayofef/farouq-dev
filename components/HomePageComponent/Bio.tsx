import * as React from 'react';
import classes from './styled.module.scss';

export const Bio: React.FunctionComponent = () => {
  const date = new Date();

  const year = date.getFullYear();

  const experience = year - 2019;

  return (
    <div className={classes.Wrapper}>
      <p className={classes.Title}>ABOUT ME</p>
      <h2 className={classes.BioGreetings}>Hi, I&apos;m Farouq.</h2>
      <br />
      <p className={classes.BioBlob}>
        I&apos;m <strong>Farouq</strong> , a <strong>JavaScript</strong> developer living in Dublin, Ireland and
        currently working at VisionR as a Frontend Engineer. Expertise in the development of sophisticated user
        interface and web applications with complex business logic, with over {experience} years of professional
        experience.
      </p>
      <br />
      <p className={classes.BioBlob}>
        My true passion is product development and I enjoy all aspects from the initial idea, brainstorming, wireframe,
        design, development, right to the final product.
      </p>
      <br />
      <p className={classes.BioBlob}>I&apos;m hard working, super curious, dedicated, and also a fast learner!</p>
    </div>
  );
};
