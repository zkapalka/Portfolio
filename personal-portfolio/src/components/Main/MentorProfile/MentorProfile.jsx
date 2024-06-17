import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  padding-top: 15%; /* Adjust this value based on the header height */
  margin-top: 0%; /* Adjust this value based on the header height */
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


const FeedbackContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
`;

const FeedbackHeader = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const FeedbackList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FeedbackItem = styled.li`
  font-size: 1rem;
  color: #555;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const MentorProfile = () => {
  const feedbackData = [
    "We reviewed his project this week and he was able to clearly define why he made various choices as well as ways in which he would do things differently / improve it further which all show a great understanding of what he did.  He's more comfortable taking advantage of the resources available to him (such as ChatGPT) and understands the limitations of them.  He asks great questions and is clearly already growing as a developer.  Making great progress.",
    "Zach continues to ask great questions and shows a good understanding of the concepts covered this week.  He says Java itself isn't difficult to transition to although admits some of the topics about inheritance / polymorphism / abstraction / etc. is hard to wrap his mind around.  We've discussed it a fair bit this week and I think it'll get easier for him to see as he gets some more concrete examples.  He has also expressed a desire to see how development works on a team. ",
    "We did a code review on Zach and Emily's projects today which went well and they found value in.  ",
    "Zach continues to build a strong base of knowledge he can draw on for new concepts which seems to really be helping him pick up new materials.  It doesn't sound as stressful to learn new things as it used to be - as an example, he immediately picked up on why React can be so powerful and seemed eager to dig into it more this week."
  ];
  
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
      <FeedbackContainer>
        <FeedbackHeader>Feedback for Zach the Mentee</FeedbackHeader>
        <FeedbackList>
          {feedbackData.map((feedback, index) => (
            <FeedbackItem key={index}>{feedback}</FeedbackItem>
          ))}
        </FeedbackList>
      </FeedbackContainer>
    </ProfileContainer>
  );
};

export default MentorProfile;
