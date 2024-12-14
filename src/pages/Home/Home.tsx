import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Metrics from '../../components/Metrics/Metrics';
import Awards from '../../components/Awards/Awards';
import Partners from '../../components/Partners/Partners';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
`;

const ServicesWrapper = styled.div`
  margin-top: 60px;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Hero />
      <ServicesWrapper>
        <Services />
      </ServicesWrapper>
      <Metrics />
      <Awards />
      <Partners />
    </HomeContainer>
  );
};

export default Home;
