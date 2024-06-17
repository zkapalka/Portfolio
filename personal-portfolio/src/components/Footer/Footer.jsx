import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div``;

const FooterH4 = styled.h4`
  margin-bottom: 1rem;
`;

const FooterUl = styled.ul``;

const FooterLi = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterBottom = styled.div`
  text-align: center;
`;

const Footer = () => {
  const listObjects = [
    { href: "https://twitter.com/?lang=en", name: "X", desc: "X link" },
    { href: "https://www.linkedin.com/", name: "LinkedIn", desc: "Linkedin link" },
    { href: "https://git.generalassemb.ly/", name: "GitHub", desc: "GitHub link" },
  ];

  return (
    <StyledFooter id="contact">
      <FooterContent className="footer-content">
        <FooterSection className="footer-section">
          <FooterH4>Contact</FooterH4>
          <p>Email: zkapalka@indeed.com</p>
          <p>Phone: 123-456-7890</p>
        </FooterSection>
        <FooterSection className="footer-section">
          <FooterH4>Social</FooterH4>
          <FooterUl>
            {listObjects.map((list, index) => (
              <FooterLi key={index}>
                <a href={list.href}>{list.name}</a>
                <span>{list.desc}</span>
              </FooterLi>
            ))}
          </FooterUl>
        </FooterSection>
      </FooterContent>
      <FooterBottom className="footer-bottom">
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </FooterBottom>
    </StyledFooter>
  );
};

export default Footer;
