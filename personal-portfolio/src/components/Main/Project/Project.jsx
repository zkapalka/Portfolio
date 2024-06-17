import React from 'react';
import styled from 'styled-components';
import ProjectCard from "./ProjectCard/ProjectCard";
import FeedbackCarousel from "./Feedback/FeedbackCarousel";

// Styled component for the section
const Section = styled.section`
  position: relative;
  padding-top: 15%; /* Adjust this value based on the header height */
  margin-top: 0%; /* Adjust this value based on the header height */
`;

// Styled component for the h2 tag
const StyledH2 = styled.h2`
  text-align: center;
  margin: 3%;
`;

// Styled component for the project grid
const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

// Styled component for the paragraphs
const StyledParagraph = styled.p`
  text-align: center;
  margin: 1rem 0;
`;

const Project = () => {
  const projectCardData = [
    {
      link: "https://github.com/zkapalka/GA_Stuff/tree/main/personal_portfolio-master",
      image: "src/assets/portfolio.jpg",
      alt: "Picture of the word portfolio",
      projectName: "Personal Portfolio",
      description: "A personal portfolio project using JavaScript",
    },
    { 
      link: "https://github.com/zkapalka/GA_Stuff/tree/main/Week_4-master",
      image: "src/assets/shoe.jpeg",
      alt: "Collection of different shoes arranged in the color of a rainbow",
      projectName: "DEI JavaScript Project",
      description: "A prototype of a job board aimed at Deaf people using JavaScript",
    },
    {
      link: "https://github.com/zkapalka/GA_Stuff/tree/main/week_6-main/day_3/java-project-dictionary-application-master",
      image: "src/assets/dictionary-words-grammar-education-8b6784-1024 (1).jpg",
      alt: "Pic of the definition of dictionary",
      projectName: "Dictionary Java App",
      description: "A basic dictionary app using Java",
    },
    { 
      link: "https://github.com/zkapalka/GA_Stuff/tree/main/week_12_SpringProject-develop",
      image: "src/assets/Back flex.jpg",
      alt: "Drawing of man flexing back",
      projectName: "Backend Spring Project",
      description: "A project mimicking basic CRUD services for a job board using Spring and PostreSQL",
    },
    {
      link: "https://github.com/zkapalka/GA_Stuff/tree/main/capstone",
      image: "src/assets/Capstone.jpg",
      alt: "Project 6",
      projectName: "Capstone Project",
      description: "My capstone using React, Spring, and PostreSQL",
    }
  ];

  return (
    <Section id="projects">
      <StyledH2>My Projects</StyledH2>
      <ProjectGrid>
        {projectCardData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectGrid>
      <StyledH2>Feedback from GA</StyledH2>
      <StyledParagraph>
        Week 1 to 8, GA used a color rating system from blue being the highest, green being good, yellow and then finally red.
      </StyledParagraph>
      <StyledParagraph>
        Starting from Week 9, we converted to a different rating that essentially tracked how much work was submitted from 100% to 0% work being submitted.
      </StyledParagraph>
      <FeedbackCarousel />
    </Section>
  );
};

export default Project;
