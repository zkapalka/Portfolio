import styled from 'styled-components';
import ProjectCard from "../../ProjectCard/ProjectCard";
import FeedbackCarousel from "./Feedback/FeedbackCarousel";

// Styled component for the h2 tag
const StyledH2 = styled.h2`
  text-align: center;
  margin: 3%;
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
    <section className="projects" id="projects">
      {/* Apply the styled component */}
      <StyledH2>My Projects</StyledH2>
      <div className="project-grid">
        {projectCardData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      {/* Apply the styled component */}
      <StyledH2>Feedback from GA</StyledH2>
      <p>Week 1 to 8, GA used a color rating system from blue being the highest, green being good, yellow and then finally red.</p>
      <p>Starting from Week 9, we converted to a different rating that essentially tracked how much work was submitted from 100% to 0% work being submitted</p>
      <FeedbackCarousel />
    </section>
  );
};

export default Project;
