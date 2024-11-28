import React from 'react';
import styled from 'styled-components';
import creditCardImg from '../../assets/images/services/credit-card.jpg';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const HeroSection = styled.section`
  position: relative;
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${creditCardImg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ContentSection = styled.section`
  padding: 80px 5%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a1a1a;
  margin-bottom: 2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const FeatureCard = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const CTASection = styled.section`
  background-color: #f8f9fa;
  padding: 60px 5%;
  text-align: center;
`;

const CTAButton = styled.button`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const features = [
  {
    title: 'Rewards Program',
    description: 'Earn reward points on every purchase and redeem them for travel, shopping, or cashback.'
  },
  {
    title: 'Zero Annual Fee',
    description: 'No annual fee for the first year, with minimal charges thereafter based on usage.'
  },
  {
    title: 'Secure Transactions',
    description: 'Advanced security features including chip protection and real-time fraud detection.'
  },
  {
    title: 'Global Acceptance',
    description: 'Accepted at millions of merchants worldwide with international transaction support.'
  },
  {
    title: 'Instant Approval',
    description: 'Get your credit card approved instantly with minimal documentation required.'
  },
  {
    title: 'EMI Options',
    description: 'Convert large purchases into easy EMIs with flexible repayment tenures.'
  }
];

const CreditCards: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <Title>Credit Cards</Title>
          <Subtitle>
            Premium credit cards with exclusive rewards and lifestyle benefits
          </Subtitle>
          <CTAButton>Apply Now</CTAButton>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Card Benefits</SectionTitle>
        <Grid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </Grid>
      </ContentSection>

      <CTASection>
        <SectionTitle>Ready to Apply?</SectionTitle>
        <CTAButton>Apply Now</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default CreditCards;
