import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
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
import AboutUs from './pages/AboutUs/AboutUs';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal-loan" element={<PersonalLoan />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/business-loan" element={<BusinessLoan />} />
            <Route path="/health-insurance" element={<HealthInsurance />} />
            <Route path="/life-insurance" element={<LifeInsurance />} />
            <Route path="/short-term-loan" element={<ShortTermLoan />} />
            <Route path="/home-loan" element={<HomeLoan />} />
            <Route path="/gold-loan" element={<GoldLoan />} />
            <Route path="/home-loan-balance-transfer" element={<HomeLoanBalanceTransfer />} />
            <Route path="/loan-against-property" element={<LoanAgainstProperty />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
};

export default App;
