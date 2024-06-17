import React from 'react';
import styled from 'styled-components';

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
  width: 100%;
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
      img: "src/assets/React-icon.svg",
      imgAlt: "React Logo Icon",
      name: "React",
    },
    {
      img: "src/assets/java.svg",
      imgAlt: "Java Logo Icon",
      name: "Java",
    },
    {
      img: "src/assets/Git_icon.svg",
      imgAlt: "Git Logo Icon",
      name: "Git",
    },
    {
      img: "src/assets/postgresql.svg",
      imgAlt: "PostreSQL Logo Icon",
      name: "PostreSQL",
    },
    {
      img: "src/assets/css-3.svg",
      imgAlt: "CSS Icon",
      name: "CSS",
    },
    {
      img: "src/assets/spring-3.svg",
      imgAlt: "Spring Logo Icon",
      name: "Spring",
    },
    {
      img: "src/assets/Barbell-rear-delt-row-2.png",
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
