import React, { useState } from 'react';
import styled from 'styled-components';
import { Radio, RadioChangeEvent } from 'antd';
import personalLoanImg from '../../assets/images/services/personal-loan.jpg';
import businessLoanImg from '../../assets/images/services/business-loan.jpg';
import homeLoanImg from '../../assets/images/services/home-loan.jpg';
import creditCardImg from '../../assets/images/services/credit-card.jpg';
import healthInsuranceImg from '../../assets/images/services/health-insurance.jpg';
import lifeInsuranceImg from '../../assets/images/services/life-insurance.jpg';
import propertyLoanImg from '../../assets/images/services/property-loan.jpg';
import goldLoanImg from '../../assets/images/services/gold-loan.jpg';
import shortTermLoanImg from '../../assets/images/services/short-term-loan.jpg';

const ServicesSection = styled.section`
  padding: 80px 5%;
  background: #ffffff;
  position: relative;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const CardImage = styled.div<{ $backgroundImage: string }>`
  height: 180px;
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
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%);
  }
`;

const CardContent = styled.div`
  padding: 24px;
  background: white;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  color: #1a1a1a;
  margin-bottom: 12px;
  font-weight: 600;
  line-height: 1.4;
`;

const CardDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0;
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
    description: 'Get instant personal loans with minimal documentation and competitive interest rates',
    image: personalLoanImg,
    type: ['loans'],
  },
  {
    id: 2,
    title: 'Credit Cards',
    description: 'Premium credit cards with exclusive rewards and lifestyle benefits',
    image: creditCardImg,
    type: ['cards'],
  },
  {
    id: 3,
    title: 'Health Insurance',
    description: 'Comprehensive health coverage for you and your family with cashless claims',
    image: healthInsuranceImg,
    type: ['insurance'],
  },
  {
    id: 4,
    title: 'Business Loan',
    description: 'Flexible financing solutions to fuel your business growth and expansion',
    image: businessLoanImg,
    type: ['loans'],
  },
  {
    id: 5,
    title: 'Life Insurance',
    description: "Secure your family's future with our comprehensive life insurance plans",
    image: lifeInsuranceImg,
    type: ['insurance'],
  },
  {
    id: 6,
    title: 'Home Loan',
    description: 'Make your dream home a reality with attractive interest rates and long tenure',
    image: homeLoanImg,
    type: ['loans'],
  },
  {
    id: 7,
    title: 'Property Loan',
    description: 'Get loans against your property with competitive rates and flexible terms',
    image: shortTermLoanImg,
    type: ['loans'],
  },
  {
    id: 8,
    title: 'Loan Against Property',
    description: 'Unlock the value of your property with minimal documentation and quick processing',
    image: goldLoanImg,
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
            </CardContent>
          </ServiceCard>
        ))}
      </CardsGrid>
    </ServicesSection>
  );
};

export default Services;
