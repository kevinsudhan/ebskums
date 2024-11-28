import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Metrics from './components/Metrics/Metrics';
import Awards from './components/Awards/Awards';
import Partners from './components/Partners/Partners';
import PersonalLoan from './pages/PersonalLoan/PersonalLoan';
import CreditCards from './pages/CreditCards/CreditCards';
import BusinessLoan from './pages/BusinessLoan/BusinessLoan';
import HealthInsurance from './pages/HealthInsurance/HealthInsurance';
import LifeInsurance from './pages/LifeInsurance/LifeInsurance';
import ShortTermLoan from './pages/ShortTermLoan/ShortTermLoan';
import HomeLoan from './pages/HomeLoan/HomeLoan';
import GoldLoan from './pages/GoldLoan/GoldLoan';
import HomeLoanBalanceTransfer from './pages/HomeLoanBalanceTransfer/HomeLoanBalanceTransfer';
import LoanAgainstProperty from './pages/LoanAgainstProperty/LoanAgainstProperty';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  padding: 0;
  margin: 0;
`;

const MainContent = styled.main`
  width: 100%;
`;

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Metrics />
    <Awards />
    <Partners />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/personal-loan" element={<PersonalLoan />} />
            <Route path="/services/credit-cards" element={<CreditCards />} />
            <Route path="/services/business-loan" element={<BusinessLoan />} />
            <Route path="/services/health-insurance" element={<HealthInsurance />} />
            <Route path="/services/life-insurance" element={<LifeInsurance />} />
            <Route path="/services/short-term-loan" element={<ShortTermLoan />} />
            <Route path="/services/home-loan" element={<HomeLoan />} />
            <Route path="/services/gold-loan" element={<GoldLoan />} />
            <Route path="/services/home-loan-balance-transfer" element={<HomeLoanBalanceTransfer />} />
            <Route path="/services/loan-against-property" element={<LoanAgainstProperty />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
};

export default App;
