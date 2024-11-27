import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Metrics from './components/Metrics/Metrics';
import Awards from './components/Awards/Awards';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding: 0;
  margin: 0;
`;

const MainContent = styled.main`
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Navbar />
        <MainContent>
          <Hero />
          <Services />
          <Metrics />
          <Awards />
        </MainContent>
      </AppContainer>
    </Router>
  );
};

export default App;
