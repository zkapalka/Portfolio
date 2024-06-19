import React from 'react';
import styled from 'styled-components';
import ResumeButton from "./Resume/ResumeButton";
import zachProfile from '/Users/zkapalka/Desktop/Portfolio/personal-portfolio/src/assets/zachProfile.jpeg';


const Section = styled.section`
  position: relative;
  padding-top: 15%; /* Adjust this value based on the header height */
  margin-top: 0%; /* Adjust this value based on the header height */
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const AboutText = styled.div`
  flex: 1;
  margin-right: 2rem;

  p {
    margin-bottom: 1rem;
  }
`;

const AboutImage = styled.div`
  flex: 1;

  img {
    border-radius: 20%;
    height: auto;
    max-width: 100%;
  }
`;

const About = () => {
  return (
    <Section id="about">
      <h2>About Me</h2>
      <AboutContent>
        <AboutText>
          <p>
            Hi, I'm Zach Kapalka, a software engineer with expertise in React, Java
            and other SWE disciplines. I enjoy developing applications at enterprise
            scale to better serve various companies and clients.
          </p>
          <br />
          <p>
            I started on this software engineer journey because I wanted to be able to peek into the world that my dad lived in for 
            over 30 years, and I wanted to be able to find something that I would be able to keep doing for the rest of my life, and 
            thanks to the multiple disciplines in the software engineering world, I've found it. While I'm on this adventure, I want to
            be able to eventually specialize in cloud, SRE or machine learning, and see just how far I'm capable of going.
          </p>
          <br />
          <p>
            With my background and passion for building robust systems, I focus on 
            creating clean, efficient codebases that scales and meet standards across 
            multiple industries.
          </p>
        </AboutText>
        <AboutImage>
          <img src={zachProfile} alt="About Image" />
        </AboutImage>
      </AboutContent>
      <ResumeButton />
    </Section>
  );
};

export default About;
