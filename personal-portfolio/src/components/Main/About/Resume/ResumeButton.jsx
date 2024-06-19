import React from 'react';
import styled from 'styled-components';
import kapalkaResume from '/Users/zkapalka/Desktop/Portfolio/personal-portfolio/src/assets/kapalkaResume.pdf';

// Styled button using styled-components
const Button = styled.button`
  background-color: #333;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  cursor: pointer;
  margin: 2%;
  font-size: 1rem;
  border-radius: 5px;

  &:hover {
    background-color: #555;
  }
`;

const ResumeButton = () => {
  return (
    <a href={kapalkaResume} target="_blank" rel="noopener noreferrer">
      <Button>Check my resume out</Button>
    </a>
  );
};

export default ResumeButton;
