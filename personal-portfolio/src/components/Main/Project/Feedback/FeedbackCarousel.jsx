// FeedbackCarousel.js
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const feedbackData = [
  {
    week: 'Week 1',
    rating: 'Green',
    feedback: 'Very active in Slack and Zoom chat, both to help other students and to ask questions regarding the purpose and details of the functions being taught. Consistent with homework thus far.',
  },
  {
    week: 'Week 2',
    rating: 'Blue',
    feedback: '"Up to date on deliverables and excellent work on them. Full attendance + exit tickets. Consistently communicating and asking questions."	',
  },
  {
    week: 'Week 3',
    rating: 'Blue',
    feedback: '"Up to date on deliverables. Based on labs, student is progressing very well. Exit ticket mentioned a desire for more time to practice - we will see if that resolves with the amount of homework time they have this week."	',
  },
  {
    week: 'Week 4',
    rating: 'Blue',
    feedback: '"Excellent project. Looked very good and was smartly composed in JS. Did not request help, seems to have arrived at success self-sufficiently or with other help."	',
  },
  {
    week: 'Week 5',
    rating: 'Blue',
    feedback: '"Continuing strong. Self-sufficient, good code, and communicative in class. Asks questions that I would expect of someone thinking forward to how the system works as a whole."	 ',
  },
  {
    week: 'Week 6',
    rating: 'Blue',
    feedback: 'Still a great student. Codes well in homework. Working hard on the project out of the gate.',
  },
  {
    week: 'Week 7',
    rating: 'Blue',
    feedback: '"Zach project left an impression of good and well-organized code. Some small feedback was given on how it could conform to OOP principles, but overall it was well done. The most striking feature is his attention to text-based UI design - it was clear he made deliberate choices and pains to optimize for user experience."	',
  },
  {
    week: 'Week 8',
    rating: 'Blue',
    feedback: 'Seems to have the hang of SQL. Not enough variation in SQL code or personal interaction this week to make any observations.',
  },
  {
    week: 'Week 9',
    rating: '100% submitted',
    feedback: 'Moving into Spring, instructors are pleased to see prior feedback from the Java project has lead to a better class/package organization and separation of concerns. Asks many questions with an eye toward understanding all interactions and potential for individual Spring mechanics being taught.',
  },
  {
    week: 'Week 10',
    rating: '100% submitted',
    feedback: 'Working with Emily on group project. Frequently requested help, though mainly with problems that were no fault of their own and simply growing pains of learning to work with Git in different system configurations. Both doing very well. Good to see Zach reaching out for more help than normal.',
  },
  {
    week: 'Week 11',
    rating: '100% submitted',
    feedback: 'Zach seems less to have been less confident in the materials this week (primarily testing), but that is not reflected in his work. He had one of the most specific and robust submissions for the testing assignment.',
  },
  {
    week: 'Week 12',
    rating: '100% submitted',
    feedback: 'Project is looking extremely good going into next week. Almost entirely self-sufficient, but has come for help on a few stuck points. ',
  },
  {
    week: 'Week 13',
    rating: '100% submitted',
    feedback: 'This Spring project is simply Amazing. Great job.',
  },
  {
    week: 'Week 14',
    rating: '100% submitted',
    feedback: 'Zach has been one of the most detail-oriented students I have met all the way through the course to this week. He has a mind for edge cases and covering every possible outcome of every piece of code. I look forward to seeing that level of detail in his capstone, and must say he has been a great student.',
  },
  {
    week: 'Week 15',
    rating: '100% submitted',
    feedback: 'Project almost certainly on track for completion.',
  },
  {
    week: 'Week 16 - Capstone',
    rating: '100.5',
    feedback: 'The project is truly remarkable, with so many positive aspects to highlight. The presentation was great, and the UI is stunning. The validation for login and signup is awesome, ensuring a seamless user experience. The filtering by name and platform is excellent, adding significant functionality. The validation on the profile edit is also very well done. Zach has made great use of local storage, and his code is clean and well-structured. The application of Software Engineering principles is on point, and the documentation is thorough and clear.',
  },
];

const CarouselContainer = styled.div`
  width: 90vw;
  height: 40vh;
  margin: 0 auto;
  overflow: hidden; /* Prevent overflow */

  .slick-list {
    padding-bottom: 20px; /* Add padding to avoid overlapping */
  }

  .slick-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%; /* Ensure the slide takes up the full height of the container */
    background-color: #333;
    color: #fff;
    padding: 10px;
    border-radius: 5%;
    margin-right: 10px; /* Add margin between slides */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }

  .slick-slide:last-child {
    margin-right: 0; /* Remove margin from the last slide to prevent extra spacing */
  }

  .slick-dots {
    bottom: -30px; /* Move dots below slides to avoid overlap */
  }
`;

const FeedbackCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {feedbackData.map((feedback, index) => (
          <div key={index}>
            <h3>{feedback.week}</h3>
            <p>Rating: {feedback.rating}</p>
            <p>Feedback: {feedback.feedback}</p>
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default FeedbackCarousel;
