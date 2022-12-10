'use client';

import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 20px 0;
`;

export const StyledTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 800;
`;

export const StyledBioGreetings = styled.h2`
  font-size: 4.8rem;
  font-weight: 900;
  margin-top: -8px;
  margin-left: -2px;
`;

export const StyledBioBlob = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 2.2;
`;

export const StyledTechSkillsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 8px;
`;
export const StyledTechSkillsItem = styled.div`
  padding: 2px 6px 3px 6px;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: #1b263b;
  color: #e0e1dd;
  vertical-align: middle;
  flex-shrink: 0;
  margin-bottom: 6px;

  &:not(:last-child) {
    margin-right: 6px;
  }
`;

export const StyledContactLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-top: 8px;

  .contact-link {
    font-size: 1.7rem;
    font-weight: 600;
    display: block;

    &:not(:last-child) {
      margin-right: 18px;
    }

    &::after,
    &::before {
      content: '';
      display: block;
      position: relative;

      width: 100%;
      height: 1.6px;
      background-color: #1b263b;
      transform: scaleX(0);
      transition: all 0.3s ease-out;
      transform-origin: left;
    }

    &:hover {
      &::after,
      &::before {
        transform: scaleX(1);
      }
    }
  }
`;
