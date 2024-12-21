import React, { useState, useEffect } from 'react';
import { Menu, Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import ebsLogo from './EBS logo.png';

const StyledHeader = styled.header`
  background: white;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const NavbarContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  min-width: 280px;

  @media (max-width: 1024px) {
    min-width: auto;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 16px;

  img {
    height: 40px;
    width: auto;
  }

  span {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    white-space: nowrap;
    transition: all 0.2s ease;
    letter-spacing: -0.2px;
  }

  @media (max-width: 1024px) {
    gap: 12px;
    
    img {
      height: 32px;
    }

    span {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    span {
      font-size: 0.9rem;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: center;
  flex: 1;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${props => props.$active ? '#0077b6' : '#666'};
  font-weight: 500;
  text-decoration: none;
  padding: 8px 0;
  position: relative;
  transition: all 0.2s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #0077b6;
    transform: scaleX(${props => props.$active ? 1 : 0});
    transform-origin: left;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #0077b6;

    &:after {
      transform: scaleX(1);
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 280px;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const LoginButton = styled(Button)`
  height: 38px;
  padding: 0 24px;
  border-radius: 6px;
  font-weight: 500;
  border-color: #0077b6;
  color: #0077b6;

  &:hover {
    border-color: #023e8a !important;
    color: #023e8a !important;
  }
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
  min-width: 300px;
  padding: 8px;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);

  .ant-dropdown-menu-item {
    padding: 12px 16px;
    border-radius: 8px;
    
    &:hover {
      background: #f5f5f5;
    }
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  padding: 4px;
  color: #333;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover, &:focus {
    color: #0077b6;
    background: none;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background: white;
  padding: 24px;
  transform: translateX(${props => props.$isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
  z-index: 999;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MobileNavLink = styled(Link)<{ $active?: boolean }>`
  color: ${props => props.$active ? '#0077b6' : '#666'};
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  transition: all 0.2s ease;

  &:hover {
    color: #0077b6;
  }
`;

const MobileActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #eee;

  ${LoginButton}, ${AboutUsButton} {
    width: 100%;
    height: 44px;
    font-size: 1rem;
  }
`;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to="/personal-loan">
          Personal Loan
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/business-loan">
          Business Loan
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link to="/home-loan">
          Home Loan
        </Link>
      ),
    },
    {
      key: '4',
      label: (
        <Link to="/education-loan">
          Education Loan
        </Link>
      ),
    },
  ];

  const cardItems: MenuProps['items'] = [
    {
      key: 'axis-bank',
      label: <Link to="/cards/axis-bank">Axis Bank Credit Cards</Link>,
    },
    {
      key: 'hdfc-bank',
      label: <Link to="/cards/hdfc-bank">HDFC Bank Credit Cards</Link>,
    },
    {
      key: 'icici-bank',
      label: <Link to="/cards/icici-bank">ICICI Bank Credit Cards</Link>,
    },
    {
      key: 'idfc-bank',
      label: <Link to="/cards/idfc-bank">IDFC Bank Credit Cards</Link>,
    },
    {
      key: 'yes-bank',
      label: <Link to="/cards/yes-bank">Yes Bank Credit Cards</Link>,
    },
  ];

  const loansMenu = {
    personal: [
      {
        key: 'personal-banking',
        label: <Link to="/personal-loan/banking-partners">Banking Partners</Link>,
      },
      {
        key: 'personal-nbfc',
        label: <Link to="/personal-loan/nbfc-partners">Non-Banking Financial Company Partners</Link>,
      },
      {
        key: 'personal-fintech',
        label: <Link to="/personal-loan/fintech-partners">Fintech Partners</Link>,
      },
    ],
    business: [
      {
        key: 'business-banking',
        label: <Link to="/business-loan/banking-partners">Banking Partners</Link>,
      },
      {
        key: 'business-nbfc',
        label: <Link to="/business-loan/nbfc-partners">Non-Banking Financial Company Partners</Link>,
      },
      {
        key: 'business-fintech',
        label: <Link to="/business-loan/fintech-partners">Fintech Partners</Link>,
      },
    ],
    lap: [
      {
        key: 'lap-banking',
        label: <Link to="/loan-against-property/banking-partners">Banking Partners</Link>,
      },
      {
        key: 'lap-nbfc',
        label: <Link to="/loan-against-property/nbfc-partners">Non-Banking Financial Company Partners</Link>,
      },
      {
        key: 'lap-fintech',
        label: <Link to="/loan-against-property/fintech-partners">Fintech Partners</Link>,
      },
    ],
  };

  const loansDropdownMenu = (
    <DropdownMenu>
      <Menu.SubMenu key="personal" title="Personal Loans">
        {loansMenu.personal.map(item => (
          <Menu.Item key={item.key}>{item.label}</Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu key="business" title="Business Loan">
        {loansMenu.business.map(item => (
          <Menu.Item key={item.key}>{item.label}</Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.SubMenu key="lap" title="Loan Against Property">
        {loansMenu.lap.map(item => (
          <Menu.Item key={item.key}>{item.label}</Menu.Item>
        ))}
      </Menu.SubMenu>
      <Menu.Item key="home-loan">
        <Link to="/home-loan">Home Loan</Link>
      </Menu.Item>
      <Menu.Item key="home-loan-balance-transfer">
        <Link to="/home-loan-balance-transfer">Home Loan Balance Transfer</Link>
      </Menu.Item>
      <Menu.Item key="gold-loan">
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
    <StyledHeader style={{ 
      boxShadow: scrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
      transition: 'box-shadow 0.3s ease'
    }}>
      <NavbarContainer>
        <LogoSection>
          <Link to="/" onClick={handleHomeClick}>
            <LogoContainer>
              <img src={ebsLogo} alt="EBS Finance" />
              <span>EBS Finance</span>
            </LogoContainer>
          </Link>
        </LogoSection>

        <NavLinks>
          <NavLink to="/" onClick={handleHomeClick} $active={location.pathname === '/'}>
            Home
          </NavLink>
          <Dropdown overlay={<Menu items={cardItems} />} placement="bottom">
            <NavLink to="/credit-cards" $active={location.pathname.includes('credit-cards')}>
              Cards <DownOutlined style={{ fontSize: 8 }} />
            </NavLink>
          </Dropdown>
          <Dropdown overlay={loansDropdownMenu} trigger={['hover']}>
            <NavLink to="/loans" $active={location.pathname.includes('loan')}>
              Loans <DownOutlined style={{ fontSize: 8 }} />
            </NavLink>
          </Dropdown>
          <Dropdown overlay={insuranceMenu} trigger={['hover']}>
            <NavLink to="/insurance" $active={location.pathname.includes('insurance')}>
              Insurance <DownOutlined style={{ fontSize: 8 }} />
            </NavLink>
          </Dropdown>
        </NavLinks>

        <ActionButtons>
          <Link to="/login">
            <LoginButton>Login</LoginButton>
          </Link>
          <Link to="/about-us">
            <AboutUsButton>About Us</AboutUsButton>
          </Link>
        </ActionButtons>

        <MobileMenuButton
          icon={isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        <MobileMenu $isOpen={isMobileMenuOpen}>
          <MobileNavLinks>
            <MobileNavLink 
              to="/" 
              $active={location.pathname === '/'} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </MobileNavLink>
            <MobileNavLink 
              to="/credit-cards" 
              $active={location.pathname.includes('credit-cards')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cards
            </MobileNavLink>
            <MobileNavLink 
              to="/loans" 
              $active={location.pathname.includes('/loan')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Loans
            </MobileNavLink>
            <MobileNavLink 
              to="/insurance" 
              $active={location.pathname.includes('insurance')}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insurance
            </MobileNavLink>
          </MobileNavLinks>

          <MobileActionButtons>
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <LoginButton>Login</LoginButton>
            </Link>
            <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>
              <AboutUsButton>About Us</AboutUsButton>
            </Link>
          </MobileActionButtons>
        </MobileMenu>
      </NavbarContainer>
    </StyledHeader>
  );
};

export default Navbar;
