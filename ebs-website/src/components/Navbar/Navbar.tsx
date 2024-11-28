import React, { useState, useEffect } from 'react';
import { Menu, Layout } from 'antd';
import type { MenuProps } from 'antd';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ebsLogo from './ebslogo.jpg';

const { Header } = Layout;

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 30px 0;
  transition: all 0.3s ease;
  background: transparent;
  backdrop-filter: none;
`;

const NavbarContainer = styled.div<{ $scrolled: boolean }>`
  background: linear-gradient(135deg, #0094d9 0%, #0077b6 100%);
  border-radius: 35px;
  box-shadow: 0 4px 20px rgba(0, 148, 217, 0.15);
  width: 75%;
  margin: 0 auto;
  height: 70px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  
  ${props => props.$scrolled && `
    box-shadow: 0 4px 30px rgba(0, 148, 217, 0.2);
    backdrop-filter: blur(15px);
  `}
`;

const NavContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 28px;
`;

const LogoContainer = styled.div`
  height: 42px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  padding-right: 40px;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    height: 28px;
    width: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const LogoImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const CompanyName = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;

  .company-bold {
    font-weight: 600;
    margin-left: 6px;
  }
`;

const StyledMenu = styled(Menu)`
  background: transparent;
  border-bottom: none;
  flex: 1;
  display: flex;
  justify-content: space-between;
  line-height: 70px;
  
  &.ant-menu-horizontal {
    border-bottom: none;
    background: transparent;
  }

  .ant-menu-item,
  .ant-menu-submenu {
    color: rgba(255, 255, 255, 0.95) !important;
    margin: 0 10px !important;
    font-weight: 500;
    letter-spacing: 0.3px;
    transition: all 0.3s ease;
    position: relative;
    padding: 0 6px;
    
    &:hover {
      color: #ffffff !important;
      transform: translateY(-1px);
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    }

    &::after {
      display: none !important;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: #ffffff;
      transform: scaleX(0);
      transition: transform 0.3s ease;
      border-radius: 2px;
    }

    &:hover::before {
      transform: scaleX(1);
    }
  }

  .ant-menu-submenu-title {
    color: rgba(255, 255, 255, 0.95) !important;
    display: flex;
    align-items: center;
  }

  .ant-menu-item-selected {
    background-color: transparent !important;
    &::before {
      transform: scaleX(1);
    }
  }

  .ant-menu-submenu-popup {
    .ant-menu {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      padding: 8px 0;
    }

    .ant-menu-item {
      color: #333 !important;
      margin: 4px 8px !important;
      padding: 0 16px;
      border-radius: 12px;
      height: 40px;
      line-height: 40px;

      &:hover {
        color: #0094d9 !important;
        background: rgba(0, 148, 217, 0.08);
        transform: translateX(4px);
        text-shadow: none;
      }

      &::before {
        display: none;
      }
    }
  }
`;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const menuItems: MenuProps['items'] = [
    {
      label: <Link to="/" onClick={handleHomeClick}>Home</Link>,
      key: 'home',
    },
    {
      label: 'Credit Cards',
      key: 'creditCards',
      children: [
        { label: <Link to="/services/credit-cards">IDFC Bank Credit Card</Link>, key: 'idfc' },
        { label: <Link to="/services/credit-cards">AU Bank Credit Card</Link>, key: 'au' },
        { label: <Link to="/services/credit-cards">Yes Bank Credit Card</Link>, key: 'yes' },
        { label: <Link to="/services/credit-cards">Axis Bank Credit Card</Link>, key: 'axis' },
        { label: <Link to="/services/credit-cards">Indusind Credit Card</Link>, key: 'indusind' },
        { label: <Link to="/services/credit-cards">HDFC Credit Card</Link>, key: 'hdfc' },
        { label: <Link to="/services/credit-cards">ICICI Bank Credit Card</Link>, key: 'icici' },
      ],
    },
    {
      label: 'Loans',
      key: 'loans',
      children: [
        { label: <Link to="/services/personal-loan">Personal Loans</Link>, key: 'personal' },
        { label: <Link to="/services/business-loan">Business Loan</Link>, key: 'business' },
        { label: <Link to="/services/home-loan">Home Loan</Link>, key: 'home' },
        { label: <Link to="/services/home-loan-balance-transfer">Home Loan Balance Transfer</Link>, key: 'transfer' },
        { label: <Link to="/services/loan-against-property">Loan Against Property</Link>, key: 'lap' },
        { label: <Link to="/services/gold-loan">Gold Loan</Link>, key: 'gold' },
      ],
    },
    {
      label: 'Insurance',
      key: 'insurance',
      children: [
        { label: <Link to="/services/health-insurance">Health Insurance</Link>, key: 'health' },
        { label: <Link to="/services/life-insurance">Life Insurance</Link>, key: 'life' },
      ],
    },
    {
      label: <Link to="/about">About Us</Link>,
      key: 'about',
    },
  ];

  return (
    <StyledHeader>
      <NavbarContainer $scrolled={scrolled}>
        <NavContainer>
          <Link to="/" onClick={handleHomeClick}>
            <LogoContainer>
              <LogoImage src={ebsLogo} alt="EBS Logo" />
              <CompanyName>
                Everyday Banking<span className="company-bold">Solutions</span>
              </CompanyName>
            </LogoContainer>
          </Link>
          <StyledMenu
            mode="horizontal"
            items={menuItems}
            theme="dark"
            disabledOverflow={true}
          />
        </NavContainer>
      </NavbarContainer>
    </StyledHeader>
  );
};

export default Navbar;
