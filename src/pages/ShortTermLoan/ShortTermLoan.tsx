import React from 'react';
import styled from 'styled-components';
import { Steps, Collapse } from 'antd';
import shortTermLoanImg from '../../assets/images/services/short-term-loan.jpg';

const { Panel } = Collapse;

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const HeroSection = styled.section`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${shortTermLoanImg}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-top: 70px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
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
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const FeatureItem = styled.li`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 15px;
  color: #333;
  font-size: 1.1rem;

  &:before {
    content: "✓";
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: #4CAF50;
    color: white;
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;

  .ant-collapse {
    background: transparent;
    border: none;
  }

  .ant-collapse-item {
    margin-bottom: 16px;
    border: 1px solid #eee;
    border-radius: 10px !important;
    overflow: hidden;
  }

  .ant-collapse-header {
    font-size: 1.1rem;
    padding: 16px 24px !important;
  }

  .ant-collapse-content {
    border-top: 1px solid #eee;
  }
`;

const CTASection = styled.section`
  background-color: #f8f9fa;
  padding: 60px 5%;
  text-align: center;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #0094d9 0%, #0077b6 100%);
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 119, 182, 0.2);
  }

  &:active {
    transform: translateY(0);
    background-color: #333;
  }
`;

const ShortTermLoan: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <Title>Short Term Loan</Title>
          <Subtitle>Quick financial solutions for immediate needs</Subtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Why Choose Our Short Term Loan?</SectionTitle>
        <Grid>
          <FeatureCard>
            <FeatureTitle>Quick Disbursement</FeatureTitle>
            <FeatureDescription>
              Get funds within 24 hours of approval with minimal
              documentation and hassle-free process.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Flexible Tenure</FeatureTitle>
            <FeatureDescription>
              Choose loan tenure from 3 months to 12 months
              based on your repayment capacity.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Minimal Documentation</FeatureTitle>
            <FeatureDescription>
              Simple documentation requirements with quick
              verification for faster processing.
            </FeatureDescription>
          </FeatureCard>
        </Grid>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Key Features</SectionTitle>
        <FeaturesList>
          <FeatureItem>Loan up to ₹5 Lakhs</FeatureItem>
          <FeatureItem>No Collateral Required</FeatureItem>
          <FeatureItem>Flexible Repayment Options</FeatureItem>
          <FeatureItem>Minimal Documentation</FeatureItem>
          <FeatureItem>Quick Approval</FeatureItem>
          <FeatureItem>No Hidden Charges</FeatureItem>
          <FeatureItem>Online Application</FeatureItem>
          <FeatureItem>24/7 Customer Support</FeatureItem>
        </FeaturesList>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Application Process</SectionTitle>
        <TimelineContainer>
          <Steps
            direction="vertical"
            current={-1}
            items={[
              {
                title: 'Online Application',
                description: 'Fill the simple online application form'
              },
              {
                title: 'Document Upload',
                description: 'Upload required documents online'
              },
              {
                title: 'Quick Verification',
                description: 'Fast verification of documents and details'
              },
              {
                title: 'Instant Approval',
                description: 'Get loan approval within hours'
              },
              {
                title: 'Disbursement',
                description: 'Amount credited to your bank account'
              }
            ]}
          />
        </TimelineContainer>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQContainer>
          <Collapse>
            <Panel header="What is the minimum and maximum loan amount?" key="1">
              You can apply for a short term loan ranging from ₹25,000 to ₹5 lakhs,
              depending on your income and repayment capacity.
            </Panel>
            <Panel header="What are the eligibility criteria?" key="2">
              You should be between 21-58 years of age, have a minimum monthly income
              of ₹20,000, and at least 1 year of work experience in current organization.
            </Panel>
            <Panel header="What documents are required?" key="3">
              We need your PAN card, Aadhaar card, latest salary slips, bank statements
              for the last 3 months, and a cancelled cheque for processing.
            </Panel>
            <Panel header="What is the interest rate?" key="4">
              Interest rates start from 14% p.a. and may vary based on your credit
              score, income, and loan tenure.
            </Panel>
            <Panel header="Can I prepay the loan?" key="5">
              Yes, you can prepay your loan after 3 months from disbursement. A nominal
              prepayment charge of 2% may be applicable.
            </Panel>
          </Collapse>
        </FAQContainer>
      </ContentSection>

      <CTASection>
        <SectionTitle>Need Quick Funds?</SectionTitle>
        <CTAButton>Apply Now</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default ShortTermLoan;
