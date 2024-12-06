import React from 'react';
import styled from 'styled-components';
import { Steps, Collapse } from 'antd';
import businessLoanImg from '../../assets/images/services/business-loan.jpg';

const { Panel } = Collapse;

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
`;

const HeroSection = styled.section`
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${businessLoanImg}) no-repeat center;
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

const BusinessLoan: React.FC = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <Title>Business Loan</Title>
          <Subtitle>Empower your business growth with flexible financing solutions</Subtitle>
        </HeroContent>
      </HeroSection>

      <ContentSection>
        <SectionTitle>Why Choose Our Business Loan?</SectionTitle>
        <Grid>
          <FeatureCard>
            <FeatureTitle>Competitive Rates</FeatureTitle>
            <FeatureDescription>
              Get business loans starting at 14% p.a. with flexible
              repayment options up to 5 years.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Quick Processing</FeatureTitle>
            <FeatureDescription>
              Fast approval process with minimal documentation
              and disbursement within 3 business days.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>High Loan Amount</FeatureTitle>
            <FeatureDescription>
              Get loans up to ₹50 lakhs without any collateral,
              based on your business performance.
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
          <BenefitItem>Flexible Repayment Options</BenefitItem>
          <BenefitItem>No Hidden Charges</BenefitItem>
          <BenefitItem>Competitive Interest Rates</BenefitItem>
          <BenefitItem>Dedicated Relationship Manager</BenefitItem>
          <BenefitItem>Business Advisory Support</BenefitItem>
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
                title: 'Business Assessment',
                description: 'Share your business details and requirements'
              },
              {
                title: 'Document Submission',
                description: 'Submit business and KYC documents'
              },
              {
                title: 'Verification',
                description: 'Business evaluation and document verification'
              },
              {
                title: 'Loan Approval',
                description: 'Loan sanction and agreement'
              },
              {
                title: 'Disbursement',
                description: 'Quick fund transfer to your business account'
              }
            ]}
          />
        </TimelineContainer>
      </ContentSection>

      <ContentSection>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQContainer>
          <Collapse>
            <Panel header="What are the eligibility criteria for a business loan?" key="1">
              • Business age: Minimum 2 years
              • Annual turnover: Minimum ₹25 Lakhs
              • Credit score: 700+
              • Business registration: Required
            </Panel>
            <Panel header="What documents are required?" key="2">
              Required documents include:
              • Business registration documents
              • Last 2 years ITR and financial statements
              • Bank statements for the last 12 months
              • KYC documents of directors/partners
            </Panel>
            <Panel header="What is the processing fee?" key="3">
              The processing fee is 1-2% of the loan amount or ₹10,000, whichever is lower.
              This fee covers the cost of processing your application and business evaluation.
            </Panel>
            <Panel header="How long does it take to get the loan?" key="4">
              The loan approval typically takes 3 business days after complete document
              submission. Disbursement happens within 24 hours of approval.
            </Panel>
            <Panel header="Can I get a business loan without collateral?" key="5">
              Yes, we offer collateral-free business loans up to ₹50 Lakhs based on your
              business performance and creditworthiness.
            </Panel>
          </Collapse>
        </FAQContainer>
      </ContentSection>

      <CTASection>
        <SectionTitle>Ready to Grow Your Business?</SectionTitle>
        <CTAButton>Apply Now</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default BusinessLoan;
