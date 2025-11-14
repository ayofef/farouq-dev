import * as React from 'react';
import classes from './styled.module.scss';

export const Bio: React.FunctionComponent = () => {
  const date = new Date();

  const year = date.getFullYear();

  const experience = year - 2018;

  return (
    <div className={classes.Wrapper}> 
      <h1 className={classes.BioGreetings}>Hi, I&apos;m Farouq.</h1> 
      <p className={classes.BioBlob}>
        <strong>JavaScript</strong> I&apos;m a JavaScript developer based in Dublin, Ireland, currently working at VisionR as a Frontend Engineer. With over {experience} years of experience, I specialise in building sophisticated user interface and web applications with complex business logic.
      </p>
      <br />
      <p className={classes.BioBlob}>
        My true passion is product development and I enjoy all stages of the development process from the initial idea, brainstorming, wireframe,
        design, development and shipping the final product.
      </p>
      <br />
      <p className={classes.BioBlob}>I&apos;m always eager to learn, experiment, and push my skills further.</p>
      <br />
    </div>
  );
};
