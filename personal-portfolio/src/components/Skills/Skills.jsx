import React from 'react';
import styled from 'styled-components';
import barbellRow from '/Users/zkapalka/Desktop/Portfolio/personal-portfolio/src/assets/barbellRow.png';
import cssIcon from '/Users/zkapalka/Desktop/Portfolio/personal-portfolio/src/assets/cssIcon.svg';
import gitIcon from '/Users/zkapalka/Desktop/Portfolio/personal-portfolio/src/assets/gitIcon.svg';
import javaIcon from '/Users/zkapalka/Desktop/Portfolio/personal-portfolio/src/assets/javaIcon.svg';
import reactIcon from '/Users/zkapalka/Desktop/Portfolio/personal-portfolio/src/assets/reactIcon.svg';
import springIcon from '/Users/zkapalka/Desktop/Portfolio/personal-portfolio/src/assets/springIcon.svg';
import postgressqlIcon from '/Users/zkapalka/Desktop/Portfolio/personal-portfolio/src/assets/postgresqlIcon.svg';

const StyledAside = styled.aside`
  display: flex;
  flex-direction: column; /* Adjusted to column layout */
  padding: 2rem;
  position: relative;
  padding-top: 15%; /* Adjusted padding */
  margin-top: 10vh; /* Adjusted margin */
`;

const StyledH3 = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
`;

const SkillSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SkillInfo = styled.div`
  flex: 1 0 25%;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  margin-top: 1rem; /* Added margin to separate each skill */
  cursor: pointer; /* Added cursor */
`;

const SkillImage = styled.img`
  width: 20%;
  height: auto; /* Ensuring aspect ratio is maintained */
  border-radius: 10%;
`;

const SkillName = styled.p`
  margin-top: 0.5rem;
  font-weight: bold;
`;

const Aside = () => {
  const skillData = [
    {
      img: reactIcon,
      imgAlt: "React Logo Icon",
      name: "React",
    },
    {
      img: javaIcon,
      imgAlt: "Java Logo Icon",
      name: "Java",
    },
    {
      img: gitIcon,
      imgAlt: "Git Logo Icon",
      name: "Git",
    },
    {
      img: postgressqlIcon,
      imgAlt: "PostreSQL Logo Icon",
      name: "PostreSQL",
    },
    {
      img: cssIcon,
      imgAlt: "CSS Icon",
      name: "CSS",
    },
    {
      img: springIcon,
      imgAlt: "Spring Logo Icon",
      name: "Spring",
    },
    {
      img: barbellRow,
      imgAlt: "React Logo Icon",
      name: "Lifting Heavy Stuff",
    }
  ];

  return (
    <StyledAside id="skill">
      <StyledH3>Skills</StyledH3>
      <SkillSection>
        {skillData.map((skill, index) => (
          <SkillInfo key={index}>
            <SkillImage src={skill.img} alt={skill.imgAlt} />
            <SkillName>{skill.name}</SkillName> {/* Added skill name */}
          </SkillInfo>
        ))}
      </SkillSection>
    </StyledAside>
  );
};

export default Aside;
