import React, { useState } from 'react';
import { Menu, Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import ebsLogo from './EBS logo.png';

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: white;
  padding: 0;
`;

const NavbarContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    height: 45px;
    width: auto;
    object-fit: contain;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin: 0 48px;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${props => props.$active ? '#111' : '#666'};
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  position: relative;

  &:hover {
    color: #111;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #111;
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  &:hover::after,
  ${props => props.$active && `
    &::after {
      transform: scaleX(1);
    }
  `}
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const AboutUsButton = styled(Button)`
  background: #000;
  color: white;
  border: none;
  height: 38px;
  padding: 0 24px;
  border-radius: 6px;
  font-weight: 500;

  &:hover {
    background: #333 !important;
    color: white !important;
  }
`;

const DropdownMenu = styled(Menu)`
  min-width: 200px;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;

  .ant-dropdown-menu-item {
    padding: 8px 16px;
    border-radius: 6px;
  }
`;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const cardsMenu = (
    <DropdownMenu>
      <Menu.Item key="axis">
        <Link to="/axis-bank-credit-card">Axis Bank Credit Card</Link>
      </Menu.Item>
      <Menu.Item key="hdfc">
        <Link to="/hdfc-credit-card">HDFC Credit Card</Link>
      </Menu.Item>
      <Menu.Item key="idfc">
        <Link to="/idfc-bank-credit-card">IDFC Bank Credit Card</Link>
      </Menu.Item>
      <Menu.Item key="au">
        <Link to="/au-bank-credit-card">AU Bank Credit Card</Link>
      </Menu.Item>
      <Menu.Item key="icici">
        <Link to="/icici-bank-credit-card">ICICI Bank Credit Card</Link>
      </Menu.Item>
      <Menu.Item key="yes">
        <Link to="/yes-bank-credit-card">Yes Bank Credit Card</Link>
      </Menu.Item>
      <Menu.Item key="indusind">
        <Link to="/indusind-credit-card">Indusind Credit Card</Link>
      </Menu.Item>
    </DropdownMenu>
  );

  const loansMenu = (
    <DropdownMenu>
      <Menu.Item key="personal">
        <Link to="/personal-loan">Personal Loans</Link>
      </Menu.Item>
      <Menu.Item key="business">
        <Link to="/business-loan">Business Loan</Link>
      </Menu.Item>
      <Menu.Item key="home">
        <Link to="/home-loan">Home Loan</Link>
      </Menu.Item>
      <Menu.Item key="transfer">
        <Link to="/home-loan-balance-transfer">Home Loan Balance Transfer</Link>
      </Menu.Item>
      <Menu.Item key="lap">
        <Link to="/loan-against-property">Loan Against Property</Link>
      </Menu.Item>
      <Menu.Item key="gold">
        <Link to="/gold-loan">Gold Loan</Link>
      </Menu.Item>
    </DropdownMenu>
  );

  const insuranceMenu = (
    <DropdownMenu>
      <Menu.Item key="health">
        <Link to="/health-insurance">Health Insurance</Link>
      </Menu.Item>
      <Menu.Item key="life">
        <Link to="/life-insurance">Life Insurance</Link>
      </Menu.Item>
    </DropdownMenu>
  );

  return (
    <StyledHeader>
      <NavbarContainer>
        <Link to="/" onClick={handleHomeClick}>
          <LogoContainer>
            <img src={ebsLogo} alt="EBS Finance" />
          </LogoContainer>
        </Link>

        <NavLinks>
          <NavLink to="/" onClick={handleHomeClick} $active={location.pathname === '/'}>
            Home
          </NavLink>
          <Dropdown overlay={cardsMenu} trigger={['hover']}>
            <NavLink to="#" $active={location.pathname.includes('cards')}>
              Cards <DownOutlined style={{ fontSize: 8 }} />
            </NavLink>
          </Dropdown>
          <Dropdown overlay={loansMenu} trigger={['hover']}>
            <NavLink to="#" $active={location.pathname.includes('loan')}>
              Loans <DownOutlined style={{ fontSize: 8 }} />
            </NavLink>
          </Dropdown>
          <Dropdown overlay={insuranceMenu} trigger={['hover']}>
            <NavLink to="#" $active={location.pathname.includes('insurance')}>
              Insurance <DownOutlined style={{ fontSize: 8 }} />
            </NavLink>
          </Dropdown>
        </NavLinks>

        <ActionButtons>
          <AboutUsButton>About Us</AboutUsButton>
        </ActionButtons>
      </NavbarContainer>
    </StyledHeader>
  );
};

export default Navbar;
