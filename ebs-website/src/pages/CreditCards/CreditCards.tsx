import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Select, Button, Card, Rate, Tag, Typography } from 'antd';
import { CreditCardOutlined, CheckCircleFilled, StarFilled } from '@ant-design/icons';
import creditCardImg from '../../assets/images/services/credit-card.jpg';

const { Title, Text } = Typography;
const { Option } = Select;

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f7fa;
`;

const HeroSection = styled.section`
  padding: 60px 5%;
  background: linear-gradient(135deg, #0094d9, #0077b6);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  min-height: 600px;
  margin-top: 0;
  padding-top: 130px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 110px 5% 40px;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  color: white;
  padding-top: 40px;

  @media (max-width: 1024px) {
    text-align: center;
    padding-top: 20px;
  }
`;

const FormSection = styled.div`
  flex: 1;
  max-width: 500px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const ContentSection = styled.section`
  padding: 60px 5%;
  max-width: 1400px;
  margin: 0 auto;
`;

const PartnersSection = styled.div`
  padding: 60px 0;
  background: linear-gradient(to right, #f8f9fa, #ffffff, #f8f9fa);
  text-align: center;
  overflow: hidden;
`;

const PartnerLogosContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 20px 0;
`;

const PartnerLogos = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  animation: marquee 30s linear infinite;
  white-space: nowrap;
  will-change: transform;
  padding: 20px 0;

  &:hover {
    animation-play-state: paused;
  }

  img {
    max-width: 160px;
    height: 60px;
    object-fit: contain;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.9;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }

  @media (max-width: 768px) {
    gap: 40px;
    
    img {
      max-width: 130px;
      height: 50px;
    }
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 24px;
  padding: 20px 0;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const CreditCardItem = styled(Card)`
  width: 100%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: none;
  overflow: hidden;

  .ant-card-cover {
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: #fff;
  }

  .ant-card-body {
    padding: 24px;
  }

  .ant-card-meta-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px !important;
  }

  .ant-rate {
    font-size: 16px;
    color: #ffd700;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  }
`;

const CardImage = styled.img`
  max-width: 85%;
  max-height: 100px;
  object-fit: contain;
`;

const CardFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  font-size: 14px;
  color: #4a5568;

  .anticon {
    color: #4070f4;
    font-size: 16px;
  }
`;

const ApplyButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  height: 44px;
  background: #4070f4;
  border: none;
  font-size: 15px;
  border-radius: 8px;

  &:hover {
    background: #3060e0;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
`;

const FilterButton = styled.button<{ active?: boolean }>`
  padding: 8px 20px;
  border-radius: 25px;
  border: 1px solid #e1e8f0;
  background: ${props => props.active ? '#0094d9' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: #0094d9;
    color: ${props => props.active ? 'white' : '#0094d9'};
    transform: translateY(-1px);
  }
`;

const FilterTag = styled(Tag)`
  padding: 8px 20px;
  border-radius: 25px;
  border: 1px solid #e1e8f0;
  background: white;
  color: #666;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: #0094d9;
    color: #0094d9;
    transform: translateY(-1px);
  }
`;

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 16px;
  }

  .ant-input, .ant-select-selector {
    border-radius: 8px;
    height: 45px;
    &:hover, &:focus {
      border-color: #0094d9;
    }
  }

  .ant-select-selector {
    display: flex;
    align-items: center;
  }

  .ant-btn {
    height: 45px;
    border-radius: 8px;
  }
`;

const creditCards = [
  {
    id: 1,
    name: 'IRCTC RuPay Credit Card',
    image: '/images/cards/irctc.png',
    rating: 4.0,
    reviews: 1250,
    joiningFee: '₹500 + GST',
    features: [
      'Travel rewards on IRCTC bookings',
      'Complimentary lounge access',
      'Fuel surcharge waiver'
    ],
    categories: ['top', 'travel', 'rewards']
  },
  {
    id: 2,
    name: 'IDFC FIRST SWYP Credit Card',
    image: '/images/cards/idfc.png',
    rating: 5.0,
    reviews: 850,
    joiningFee: '₹499 + GST',
    features: [
      '1000 Reward Points on 1st EMI conversion',
      'Zero forex markup',
      'Movie ticket discounts'
    ],
    categories: ['top', 'movie', 'dining', 'shopping']
  },
  {
    id: 3,
    name: 'Axis Bank ACE Credit Card',
    image: '/images/cards/ace.png',
    rating: 4.5,
    reviews: 2100,
    joiningFee: 'NIL',
    features: [
      '5% cashback on bill payments',
      'Welcome bonus 2000 points',
      'Movie ticket BOGO offers'
    ],
    categories: ['top', 'movie', 'rewards', 'shopping']
  },
  {
    id: 4,
    name: 'HDFC Diners Club Black',
    image: '/images/cards/diners.png',
    rating: 4.8,
    reviews: 3200,
    joiningFee: '₹10000 + GST',
    features: [
      'Unlimited airport lounge access',
      'Golf privileges',
      '10X rewards on dining'
    ],
    categories: ['top', 'travel', 'dining', 'lounge']
  }
];

const CreditCards: React.FC = () => {
  const [form] = Form.useForm();
  const [activeFilter, setActiveFilter] = useState('top');

  const filters = [
    { id: 'top', label: 'Top Cards' },
    { id: 'travel', label: 'Travel' },
    { id: 'shopping', label: 'Shopping' },
    { id: 'fuel', label: 'Fuel' },
    { id: 'movie', label: 'Movie' },
    { id: 'dining', label: 'Dining' },
    { id: 'lounge', label: 'Lounge Access' },
    { id: 'rewards', label: 'Rewards' }
  ];

  const onFinish = (values: any) => {
    console.log('Form values:', values);
  };

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <Title level={1} style={{ color: 'white', marginBottom: 20 }}>
            Turn Spending into Savings with Top Credit Cards
          </Title>
          <Text style={{ color: 'white', fontSize: '1.2rem' }}>
            Apply for your ideal credit card today through EBS Finance. Know what to expect by sharing some basic details.
          </Text>
        </HeroContent>
        
        <FormSection>
          <Title level={3} style={{ marginBottom: 24 }}>Share your details to find the best card for your needs</Title>
          <StyledForm
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              name="fullName"
              rules={[{ required: true, message: 'Please enter your full name' }]}
            >
              <Input placeholder="Full Name" size="large" />
            </Form.Item>

            <Form.Item
              name="mobile"
              rules={[{ required: true, message: 'Please enter your mobile number' }]}
            >
              <Input placeholder="10 digit Mobile Number" size="large" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
            >
              <Input placeholder="Email ID" size="large" />
            </Form.Item>

            <Form.Item
              name="employmentType"
              rules={[{ required: true, message: 'Please select your employment type' }]}
            >
              <Select placeholder="Employment Type" size="large">
                <Option value="salaried">Salaried</Option>
                <Option value="self-employed">Self Employed</Option>
                <Option value="business">Business Owner</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="income"
              rules={[{ required: true, message: 'Please enter your annual income' }]}
            >
              <Input placeholder="Annual Income" size="large" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block size="large">
                Submit
              </Button>
            </Form.Item>
          </StyledForm>
        </FormSection>
      </HeroSection>

      <ContentSection>
        <PartnersSection>
          <Title level={2} style={{ marginBottom: '8px' }}>Our Banking Partners</Title>
          <Text type="secondary" style={{ fontSize: '16px', display: 'block', marginBottom: '40px' }}>
            We collaborate with India's leading banks to bring you exclusive credit card offers
          </Text>
          <PartnerLogosContainer>
            <PartnerLogos>
              <img src="/images/partners/hdfc.jpg" alt="HDFC Bank" loading="lazy" />
              <img src="/images/partners/icici.jpg" alt="ICICI Bank" loading="lazy" />
              <img src="/images/partners/axis.jpg.png" alt="Axis Bank" loading="lazy" />
              <img src="/images/partners/kotak.jpg" alt="Kotak Bank" loading="lazy" />
              <img src="/images/partners/idfc.jpg" alt="IDFC Bank" loading="lazy" />
              <img src="/images/partners/yes.png" alt="Yes Bank" loading="lazy" />
              <img src="/images/partners/au.jpg" alt="AU Bank" loading="lazy" />
              <img src="/images/partners/federal.png" alt="Federal Bank" loading="lazy" />
              {/* Duplicate logos for seamless loop */}
              <img src="/images/partners/hdfc.jpg" alt="HDFC Bank" loading="lazy" />
              <img src="/images/partners/icici.jpg" alt="ICICI Bank" loading="lazy" />
              <img src="/images/partners/axis.jpg.png" alt="Axis Bank" loading="lazy" />
              <img src="/images/partners/kotak.jpg" alt="Kotak Bank" loading="lazy" />
              <img src="/images/partners/idfc.jpg" alt="IDFC Bank" loading="lazy" />
              <img src="/images/partners/yes.png" alt="Yes Bank" loading="lazy" />
              <img src="/images/partners/au.jpg" alt="AU Bank" loading="lazy" />
              <img src="/images/partners/federal.png" alt="Federal Bank" loading="lazy" />
            </PartnerLogos>
          </PartnerLogosContainer>
        </PartnersSection>

        <Title level={2} style={{ textAlign: 'center', margin: '60px 0 20px' }}>
          Best Credit Cards of October 2024
        </Title>
        <FilterContainer>
          {filters.map(filter => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <CardGrid>
          {creditCards
            .filter(card => activeFilter === 'top' || card.categories.includes(activeFilter))
            .map(card => (
              <CreditCardItem
                key={card.id}
                cover={<CardImage src={card.image} alt={card.name} />}
              >
                <Card.Meta
                  title={
                    <div style={{ marginBottom: 16 }}>
                      <Title level={4} style={{ marginBottom: 8 }}>{card.name}</Title>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <Rate disabled defaultValue={card.rating} />
                        <Text type="secondary">({card.reviews})</Text>
                      </div>
                    </div>
                  }
                  description={
                    <>
                      <Text>Joining Fee: {card.joiningFee}</Text>
                      {card.features.map((feature, index) => (
                        <CardFeature key={index}>
                          <CheckCircleFilled />
                          <Text>{feature}</Text>
                        </CardFeature>
                      ))}
                      <ApplyButton type="primary">
                        Apply Now
                      </ApplyButton>
                    </>
                  }
                />
              </CreditCardItem>
            ))}
        </CardGrid>
      </ContentSection>
    </PageContainer>
  );
};

export default CreditCards;
