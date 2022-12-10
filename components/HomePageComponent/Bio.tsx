import * as React from 'react';
import { StyledWrapper, StyledTitle, StyledBioGreetings, StyledBioBlob } from './HomepageComponent.styled';

export const Bio: React.FunctionComponent = () => {
  const date = new Date();

  const year = date.getUTCFullYear();

  const age = year - 1996;

  const experience = year - 2019;

  return (
    <StyledWrapper>
      <StyledTitle>ABOUT ME</StyledTitle>
      <StyledBioGreetings>Hi, I&apos;m Farouq.</StyledBioGreetings>
      <br />
      <StyledBioBlob>
        I&apos;m <strong>Farouq</strong> , a {age} years old <strong>Front-end</strong> developer living in Dublin,
        Ireland and currently working at VisionR as a Frontend Engineer. Expertise in the development of sophisticated
        user interface and web applications with complex business logic with over {experience} years of professional
        experience.
      </StyledBioBlob>
      <br />
      <StyledBioBlob>I&apos;m hard working, super curious, dedicated, and also a fast learner!</StyledBioBlob>
    </StyledWrapper>
  );
};
