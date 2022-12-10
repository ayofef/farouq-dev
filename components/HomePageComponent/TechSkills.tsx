import * as React from 'react';

import { StyledWrapper, StyledTitle, StyledTechSkillsWrapper, StyledTechSkillsItem } from './HomepageComponent.styled';
import { TECH_SKILLS } from './constant';

export const TechSkills: React.FunctionComponent = () => {
  return (
    <StyledWrapper>
      <StyledTitle>TECHNICAL SKILLS</StyledTitle>
      <StyledTechSkillsWrapper>
        {TECH_SKILLS.map((skill) => {
          return <StyledTechSkillsItem key={skill}>{skill}</StyledTechSkillsItem>;
        })}
      </StyledTechSkillsWrapper>
      <br />
    </StyledWrapper>
  );
};
