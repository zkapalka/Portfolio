import ProjectCard from "../../ProjectCard/ProjectCard";

const Project = () => {
  const projectCardData = [
    {
      link: "https://git.generalassemb.ly/zkapalka/personal_portfolio",
      image: "src/assets/portfolio.jpg",
      alt: "Picture of the word portfolio",
      projectName: "Personal Portfolio",
      description: "A personal portfolio project using JavaScript",
    },
    { 
      link: "https://git.generalassemb.ly/zkapalka/Week_4",
      image: "src/assets/shoe.jpeg",
      alt: "Collection of different shoes arranged in the color of a rainbow",
      projectName: "DEI JavaScript Project",
      description: "A prototype of a job board aimed at Deaf people using JavaScript",
    },
    {
      link: "https://git.generalassemb.ly/zkapalka/week_6/tree/main/day_3",
      image: "src/assets/dictionary-words-grammar-education-8b6784-1024 (1).jpg",
      alt: "Pic of the definition of dictionary",
      projectName: "Dictionary Java App",
      description: "A basic dictionary app using Java",
    },
    { 
      link: "https://git.generalassemb.ly/zkapalka/week_12_SpringProject",
      image: "src/assets/Back flex.jpg",
      alt: "Drawing of man flexing back",
      projectName: "Backend Spring Project",
      description: "A project mimicking basic CRUD services for a job board using Spring and PostreSQL",
    },
    {
      image: "src/assets/Capstone.jpg",
      alt: "Project 6",
      projectName: "Capstone Project",
      description: "My capstone using React, Spring, and PostreSQL",
    }
  ];
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectCardData.map((project, index) => {
          return (
            <ProjectCard key={index} link={project.link} image={project.image} alt={project.alt} projectName={project.projectName} description={project.description}/>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
