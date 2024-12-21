import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Awards from '../../components/Awards/Awards';
import Partners from '../../components/Partners/Partners';
import Metrics from '../../components/Metrics/Metrics';

const HomeContainer = styled.div`
  position: relative;
`;

const Section = styled.section`
  padding: 60px 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 40px 20px;
  }
`;

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <HomeContainer>
      <Hero />
      {!isMobile && (
        <Section>
          <Metrics />
        </Section>
      )}
      <Services />
      <Awards />
      <Partners />
    </HomeContainer>
  );
};

export default Home;