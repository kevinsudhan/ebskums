import React from 'react';
import styled from 'styled-components';
import goldenLaurel from '../../assets/images/golden laurel.png';

const AwardsSection = styled.section`
  padding: 60px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #333333;
  margin-bottom: 40px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #0094d9, #0077b6);
  }
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 300px);
  gap: 40px;
  justify-content: center;
  margin: 0 auto;
  
  @media (max-width: 968px) {
    grid-template-columns: 300px;
  }
`;

const AwardCard = styled.div`
  background: #ffffff;
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 20px;
  width: 300px;
  aspect-ratio: 1;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }
`;

const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  ${AwardCard}:hover & img {
    transform: scale(1.05);
  }
`;

const AwardTitle = styled.h3`
  font-size: 1.1rem;
  color: #1a1a1a;
  margin-bottom: 8px;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  flex-shrink: 0;

  span {
    font-size: 0.9rem;
    font-weight: normal;
    color: #666;
    text-transform: none;
    display: block;
    margin-top: 4px;
  }
`;

const Awards: React.FC = () => {
  return (
    <AwardsSection>
      <Container>
        <Title>Our Achievements</Title>
        <AwardsGrid>
          <AwardCard>
            <ImageContainer>
              <img src={goldenLaurel} alt="Top DSA Award" />
            </ImageContainer>
            <AwardTitle>
              Top DSA - HDFC Bank
              <br />
              <span>
                South India's Best Direct Sales Associate
              </span>
            </AwardTitle>
          </AwardCard>

          <AwardCard>
            <ImageContainer>
              <img src={goldenLaurel} alt="Elite Partner Award" />
            </ImageContainer>
            <AwardTitle>
              Elite Partner
              <br />
              <span>
                Top 3 Channel Partner for ₹100+ Crore Unsecured Business
              </span>
            </AwardTitle>
          </AwardCard>
        </AwardsGrid>
      </Container>
    </AwardsSection>
  );
};

export default Awards;
