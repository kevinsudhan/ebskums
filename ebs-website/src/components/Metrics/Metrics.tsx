import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const MetricsSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #0077b6 0%, #023e8a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 10px;
  font-weight: 600;
  position: relative;
`;

const SubTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  color: #e6f7ff;
  margin-bottom: 50px;
  font-weight: 500;
  position: relative;
`;

const MetricsCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    border-radius: 20px;
    z-index: 0;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const MetricItem = styled.div`
  text-align: center;
  padding: 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  
  &:last-child {
    border-right: none;
  }
  
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const MetricNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MetricTitle = styled.div`
  font-size: 1.25rem;
  color: #e6f7ff;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Metrics: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <MetricsSection>
      <Container>
        <Title>Everyday Banking Has Changed Countless Lives</Title>
        <SubTitle>Services Offered Till Date</SubTitle>
        <MetricsCard ref={ref}>
          <MetricsGrid>
            <MetricItem>
              <MetricNumber>
                {inView && (
                  <CountUp
                    start={0}
                    end={100000}
                    duration={2.5}
                    separator=","
                    suffix="+"
                  />
                )}
              </MetricNumber>
              <MetricTitle>Loans</MetricTitle>
            </MetricItem>
            <MetricItem>
              <MetricNumber>
                {inView && (
                  <CountUp
                    start={0}
                    end={150000}
                    duration={2.5}
                    separator=","
                    suffix="+"
                  />
                )}
              </MetricNumber>
              <MetricTitle>Insurances</MetricTitle>
            </MetricItem>
            <MetricItem>
              <MetricNumber>
                {inView && (
                  <CountUp
                    start={0}
                    end={200000}
                    duration={2.5}
                    separator=","
                    suffix="+"
                  />
                )}
              </MetricNumber>
              <MetricTitle>Credit Cards</MetricTitle>
            </MetricItem>
          </MetricsGrid>
        </MetricsCard>
      </Container>
    </MetricsSection>
  );
};

export default Metrics;
