import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const MentorImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const MentorName = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const MentorTitle = styled.h2`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 1rem;
`;

const MentorBio = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center;
  max-width: 600px;
`;

const MentorProfile = () => {
  return (
    <ProfileContainer id='mentor'>
      <h2 >Mentor Profile</h2>
      <MentorImage src="src/assets/Mentor-Picture.jpeg" alt="Mentor's profile picture" />
      <MentorName>Adam Kreiss</MentorName>
      <MentorTitle>Software Engineer - Enterprise</MentorTitle>
      <MentorBio>
      I am a software engineer of 17 years living in western NY with a busy household 
      (pre-teens, lots of pets, active in our church, DIY #ftw).  I've done frontend, backend, and devops automation over my career.  
      Quote - "If you don't hate some of your code from 1 year ago, you aren't growing as a developer."
      </MentorBio>
    </ProfileContainer>
  );
};

export default MentorProfile;
