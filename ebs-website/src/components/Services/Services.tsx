import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';

// Import images
import personalLoanImg from '../../assets/images/services/personal-loan.jpg';
import creditCardImg from '../../assets/images/services/credit-card.jpg';
import businessLoanImg from '../../assets/images/services/business-loan.jpg';
import homeLoanImg from '../../assets/images/services/home-loan.jpg';
import goldLoanImg from '../../assets/images/services/gold-loan.jpg';
import healthInsuranceImg from '../../assets/images/services/health-insurance.jpg';
import lifeInsuranceImg from '../../assets/images/services/life-insurance.jpg';
import propertyLoanImg from '../../assets/images/services/property-loan.jpg';

const ServicesSection = styled.section`
  padding: 80px 5%;
  background: #ffffff;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  
  .ant-radio-button-wrapper {
    height: 40px;
    line-height: 38px;
    padding: 0 24px;
    font-size: 1rem;
    border-radius: 20px;
    border: none;
    background: #f5f5f5;
    color: #666;
    margin: 0 8px;
    transition: all 0.3s ease;

    &:not(:first-child)::before {
      display: none;
    }

    &:hover {
      color: #0094d9;
      background: #e6f7ff;
    }

    &.ant-radio-button-wrapper-checked {
      background: #0094d9;
      color: white;
      box-shadow: none;
    }
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.div<{ $backgroundImage: string }>`
  height: 200px;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
  }
`;

const CardContent = styled.div`
  padding: 24px;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #1a1a1a;
  margin-bottom: 12px;
  font-weight: 600;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const LearnMoreButton = styled(Button)`
  background: transparent;
  border: 2px solid #0094d9;
  color: #0094d9;
  height: 40px;
  padding: 0 24px;
  border-radius: 20px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #0094d9;
    color: white;
  }
`;

type ServiceType = 'all' | 'loans' | 'cards' | 'insurance';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  type: ServiceType[];
}

const services: Service[] = [
  {
    id: 1,
    title: 'Personal Loan',
    description: 'Quick personal loans with competitive interest rates',
    image: personalLoanImg,
    type: ['loans'],
  },
  {
    id: 2,
    title: 'Credit Card',
    description: 'Exclusive rewards and benefits with our credit cards',
    image: creditCardImg,
    type: ['cards'],
  },
  {
    id: 3,
    title: 'Business Loan',
    description: 'Empower your business growth with flexible financing',
    image: businessLoanImg,
    type: ['loans'],
  },
  {
    id: 4,
    title: 'Home Loan',
    description: 'Make your dream home a reality',
    image: homeLoanImg,
    type: ['loans'],
  },
  {
    id: 5,
    title: 'Gold Loan',
    description: 'Instant loans against your gold assets',
    image: goldLoanImg,
    type: ['loans'],
  },
  {
    id: 6,
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for you and your family',
    image: healthInsuranceImg,
    type: ['insurance'],
  },
  {
    id: 7,
    title: 'Life Insurance',
    description: "Secure your family's future with our life insurance plans",
    image: lifeInsuranceImg,
    type: ['insurance'],
  },
  {
    id: 8,
    title: 'Loan Against Property',
    description: 'Unlock the value of your property with competitive interest rates',
    image: propertyLoanImg,
    type: ['loans'],
  }
];

const Services: React.FC = () => {
  const [filter, setFilter] = useState<ServiceType>('all');

  const handleFilterChange = (e: RadioChangeEvent) => {
    setFilter(e.target.value);
  };

  const filteredServices = services.filter(service => 
    filter === 'all' ? true : service.type.includes(filter)
  );

  return (
    <ServicesSection>
      <SectionHeader>
        <Title>Our Services</Title>
        <Subtitle>
          Discover our comprehensive range of financial solutions tailored to your needs
        </Subtitle>
      </SectionHeader>

      <FilterContainer>
        <Radio.Group 
          value={filter} 
          onChange={handleFilterChange}
          buttonStyle="solid"
        >
          <Radio.Button value="all">All Services</Radio.Button>
          <Radio.Button value="loans">Loans</Radio.Button>
          <Radio.Button value="cards">Cards</Radio.Button>
          <Radio.Button value="insurance">Insurance</Radio.Button>
        </Radio.Group>
      </FilterContainer>

      <CardsGrid>
        {filteredServices.map(service => (
          <ServiceCard key={service.id}>
            <CardImage $backgroundImage={service.image} />
            <CardContent>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              <LearnMoreButton>Learn More</LearnMoreButton>
            </CardContent>
          </ServiceCard>
        ))}
      </CardsGrid>
    </ServicesSection>
  );
};

export default Services;
