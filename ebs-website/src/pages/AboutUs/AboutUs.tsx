import React from 'react';
import styled from 'styled-components';
import { Typography, Row, Col, Card, Timeline } from 'antd';
import { CheckCircleFilled, TeamOutlined, TrophyOutlined, GlobalOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const AboutUsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  background: linear-gradient(135deg, #1a365d 0%, #2a4365 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
  border-radius: 10px;
`;

const StyledCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ValueCard = styled(Card)`
  margin-bottom: 1rem;
  background: #f8fafc;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const MilestoneSection = styled.div`
  background: #f8fafc;
  padding: 3rem 2rem;
  border-radius: 10px;
  margin: 3rem 0;
`;

const AboutUs: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Title level={1} style={{ color: 'white', marginBottom: '1rem' }}>
          About EBS Financial
        </Title>
        <Paragraph style={{ color: 'white', fontSize: '1.2rem' }}>
          Building Trust Through Financial Excellence Since 1995
        </Paragraph>
      </HeroSection>

      <AboutUsContainer>
        {/* Mission and Vision */}
        <Row gutter={[24, 24]} style={{ marginBottom: '3rem' }}>
          <Col xs={24} md={12}>
            <StyledCard title="Our Mission">
              <Paragraph>
                To empower individuals and businesses with innovative financial solutions that enable growth,
                security, and prosperity. We strive to make financial services accessible, transparent, and
                tailored to meet the unique needs of our diverse clientele.
              </Paragraph>
            </StyledCard>
          </Col>
          <Col xs={24} md={12}>
            <StyledCard title="Our Vision">
              <Paragraph>
                To be the most trusted and preferred financial partner in India, recognized for our
                customer-centric approach, technological innovation, and commitment to creating lasting
                financial well-being for our customers.
              </Paragraph>
            </StyledCard>
          </Col>
        </Row>

        {/* Core Values */}
        <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Our Core Values
        </Title>
        <Row gutter={[24, 24]} style={{ marginBottom: '3rem' }}>
          <Col xs={24} md={8}>
            <ValueCard>
              <TeamOutlined style={{ fontSize: '2rem', color: '#1a365d', marginBottom: '1rem' }} />
              <Title level={4}>Customer First</Title>
              <Paragraph>
                We put our customers at the heart of everything we do, ensuring their success is our
                success.
              </Paragraph>
            </ValueCard>
          </Col>
          <Col xs={24} md={8}>
            <ValueCard>
              <TrophyOutlined style={{ fontSize: '2rem', color: '#1a365d', marginBottom: '1rem' }} />
              <Title level={4}>Excellence</Title>
              <Paragraph>
                We strive for excellence in our services, processes, and customer relationships.
              </Paragraph>
            </ValueCard>
          </Col>
          <Col xs={24} md={8}>
            <ValueCard>
              <GlobalOutlined style={{ fontSize: '2rem', color: '#1a365d', marginBottom: '1rem' }} />
              <Title level={4}>Innovation</Title>
              <Paragraph>
                We embrace technology and innovative solutions to provide better financial services.
              </Paragraph>
            </ValueCard>
          </Col>
        </Row>

        {/* Milestones */}
        <MilestoneSection>
          <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Our Journey
          </Title>
          <Timeline mode="alternate">
            <Timeline.Item>
              <Title level={4}>1995</Title>
              <Paragraph>Founded as EBS Financial Services</Paragraph>
            </Timeline.Item>
            <Timeline.Item>
              <Title level={4}>2000</Title>
              <Paragraph>Expanded operations to 10 major cities</Paragraph>
            </Timeline.Item>
            <Timeline.Item>
              <Title level={4}>2010</Title>
              <Paragraph>Launched digital banking services</Paragraph>
            </Timeline.Item>
            <Timeline.Item>
              <Title level={4}>2015</Title>
              <Paragraph>Achieved 1 million customer milestone</Paragraph>
            </Timeline.Item>
            <Timeline.Item>
              <Title level={4}>2020</Title>
              <Paragraph>Introduced AI-powered financial advisory</Paragraph>
            </Timeline.Item>
            <Timeline.Item>
              <Title level={4}>Present</Title>
              <Paragraph>Serving millions of customers with innovative financial solutions</Paragraph>
            </Timeline.Item>
          </Timeline>
        </MilestoneSection>

        {/* Why Choose Us */}
        <Title level={2} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Why Choose EBS Financial
        </Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <StyledCard>
              <CheckCircleFilled style={{ color: '#1a365d', fontSize: '24px', marginBottom: '1rem' }} />
              <Title level={4}>25+ Years of Experience</Title>
              <Paragraph>
                Trusted by millions of customers with their financial needs for over two decades.
              </Paragraph>
            </StyledCard>
          </Col>
          <Col xs={24} md={8}>
            <StyledCard>
              <CheckCircleFilled style={{ color: '#1a365d', fontSize: '24px', marginBottom: '1rem' }} />
              <Title level={4}>Customer-Centric Approach</Title>
              <Paragraph>
                Tailored financial solutions designed around your unique needs and goals.
              </Paragraph>
            </StyledCard>
          </Col>
          <Col xs={24} md={8}>
            <StyledCard>
              <CheckCircleFilled style={{ color: '#1a365d', fontSize: '24px', marginBottom: '1rem' }} />
              <Title level={4}>Digital Innovation</Title>
              <Paragraph>
                Cutting-edge technology for seamless and secure financial services.
              </Paragraph>
            </StyledCard>
          </Col>
        </Row>
      </AboutUsContainer>
    </>
  );
};

export default AboutUs;
