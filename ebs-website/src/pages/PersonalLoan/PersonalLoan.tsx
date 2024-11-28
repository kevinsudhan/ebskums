import React from 'react';
import styled from 'styled-components';
import { Steps, Collapse } from 'antd';
import personalLoanImg from '../../assets/images/services/personal-loan.jpg';

const { Panel } = Collapse;

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const HeroSection = styled.section`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${personalLoanImg}) no-repeat center;
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

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const BenefitItem = styled.li`
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

const PersonalLoan: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <Title>Personal Loan</Title>
          <Subtitle>Quick, hassle-free loans for your personal needs</Subtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Why Choose Our Personal Loan?</SectionTitle>
        <Grid>
          <FeatureCard>
            <FeatureTitle>Competitive Rates</FeatureTitle>
            <FeatureDescription>
              Get personal loans starting at 10.49% p.a. with flexible
              repayment options up to 5 years.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Quick Processing</FeatureTitle>
            <FeatureDescription>
              Fast approval process with minimal documentation
              and disbursement within 24-48 hours.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>High Loan Amount</FeatureTitle>
            <FeatureDescription>
              Get loans up to ₹25 lakhs based on your income
              and creditworthiness.
            </FeatureDescription>
          </FeatureCard>
        </Grid>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Key Benefits</SectionTitle>
        <BenefitsList>
          <BenefitItem>No Collateral Required</BenefitItem>
          <BenefitItem>Minimal Documentation</BenefitItem>
          <BenefitItem>Quick Disbursement</BenefitItem>
          <BenefitItem>Zero Foreclosure Charges</BenefitItem>
          <BenefitItem>Flexible Tenure Options</BenefitItem>
          <BenefitItem>100% Digital Process</BenefitItem>
          <BenefitItem>No Hidden Charges</BenefitItem>
          <BenefitItem>Dedicated Support</BenefitItem>
        </BenefitsList>
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
                description: 'Fill the online application form with basic details'
              },
              {
                title: 'Document Upload',
                description: 'Submit KYC and income documents'
              },
              {
                title: 'Verification',
                description: 'Quick verification of documents and credit check'
              },
              {
                title: 'Loan Approval',
                description: 'Loan sanction and digital agreement'
              },
              {
                title: 'Disbursement',
                description: 'Amount credited directly to your bank account'
              }
            ]}
          />
        </TimelineContainer>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQContainer>
          <Collapse>
            <Panel header="What is the minimum salary required for a personal loan?" key="1">
              The minimum salary requirement varies based on your city of residence:
              • Metro cities: ₹25,000 per month
              • Non-metro cities: ₹20,000 per month
            </Panel>
            <Panel header="What documents are required?" key="2">
              Required documents include:
              • Identity proof (Aadhaar/PAN)
              • Address proof
              • Latest 3 months salary slips
              • Bank statements for the last 6 months
            </Panel>
            <Panel header="What is the processing fee?" key="3">
              The processing fee is 1-2% of the loan amount or ₹5,000, whichever is lower.
              This is a one-time fee charged at the time of loan disbursement.
            </Panel>
            <Panel header="How long does it take to get the loan?" key="4">
              Once all documents are submitted and verified, the loan amount is typically
              disbursed within 24-48 hours.
            </Panel>
            <Panel header="Can I prepay my loan?" key="5">
              Yes, you can prepay your personal loan after paying a minimum of 6 EMIs.
              A nominal foreclosure charge may be applicable.
            </Panel>
          </Collapse>
        </FAQContainer>
      </ContentSection>

      <CTASection>
        <SectionTitle>Ready to Get Started?</SectionTitle>
        <CTAButton>Apply Now</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default PersonalLoan;
