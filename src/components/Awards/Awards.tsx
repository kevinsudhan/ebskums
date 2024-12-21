import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import goldenLaurel from '../../assets/images/golden laurel.png';

const { Title } = Typography;

const AwardsSection = styled.section`
  padding: 60px 0;
  background: #f8f9fa;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
`;

const AwardsTitle = styled(Title)`
  text-align: center;
  margin-bottom: 40px !important;
  color: #333 !important;

  @media (max-width: 768px) {
    font-size: 24px !important;
    margin-bottom: 30px !important;
  }
`;

const AwardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    height: 400px;
    overflow: hidden;
  }
`;

const CardContainer = styled(motion.div)`
  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const AwardCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
    margin: 0 auto;
  }
`;

const AwardIcon = styled.div`
  font-size: 40px;
  color: #0077b6;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 15px;
  }
`;

const AwardTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const AwardDescription = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ImageContainer = styled.div`
  width: 160px;
  height: 160px;
  margin: 10px 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15));
  }

  ${AwardCard}:hover & img {
    transform: scale(1.08) rotate(5deg);
  }

  @media (max-width: 480px) {
    width: 140px;
    height: 140px;
    margin: 10px 0 15px;
  }
`;

const MobileNavigation = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavigationButton = styled.button`
  background: #333;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #000;
  }

  .anticon {
    color: white;
    font-size: 16px;
  }
`;

const Awards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const awards = [
    {
      title: "Silver Jubilee Contribution",
      description: "25 Years of Dedication and Service to HDFC Bank"
    },
    {
      title: "Certificate of Appreciation",
      description: "Recognizing Excellence in Q1 FY 2022-2023 - Axis Finance"
    },
    {
      title: "Certificate of Appreciation",
      description: "In Acknowledgment of Exceptional Contribution to Personal Loan Services in 2023 by Bandhan Bank"
    },
    {
      title: "Valued Partnership Recognition",
      description: "Significant Contribution in the Credit Card Category - Standard Chartered"
    },
    {
      title: "Exemplary Support Award",
      description: "For Outstanding Contribution to Personal Loan Business in FY 2023-24 from IndusInd Bank"
    },
    {
      title: "Growth Contribution Token",
      description: "In Recognition of Key Role in Incred's Success"
    },
    {
      title: "Highest Disbursement Achievement",
      description: "300 Crores in Personal Loans Disbursed from Chennai DSA Vertical - HDFC Bank"
    },
    {
      title: "Contribution Recognition",
      description: "Appreciation for Outstanding Support in Personal Loans - Yes Bank"
    },
    {
      title: "Unwavering Support Award",
      description: "In Acknowledgment of Contributions in FY 2023-24 - IDFC Bank"
    },
    {
      title: "Excellence in Loan Services",
      description: "Awarded for Outstanding Performance in Ask Loans - ICICI Bank"
    },
    {
      title: "Certificate of Excellence",
      description: "Heroes of South for Contribution to Home Loan Business in Q1 2024, Awarded by HDFC Bank"
    },
    {
      title: "Gratitude Certificate",
      description: "Recognizing Steadfast Support to Incred Finance in FY 2023-24"
    },
    {
      title: "Certificate of Appreciation",
      description: "Recognizing Excellence in GST Practices from Government of India, Ministry of Finance"
    },
    {
      title: "Outstanding Performance Award",
      description: "Recognizing Exceptional Results in FY 2023-24 - Tata Capital"
    },
    {
      title: "Gratitude Certificate",
      description: "In Appreciation of Valuable Contribution to SME Business in FY 2023-24 for Ask Loans, Awarded by Bajaj Finance"
    },
    {
      title: "Strategic Partnership Recognition",
      description: "Acknowledging Key Partnership and Collaboration with Chola"
    }
  ];

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev === 0 ? awards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev === awards.length - 1 ? 0 : prev + 1));
  };

  const handleDragStart = (event: TouchEvent | MouseEvent) => {
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    setDragStart(clientX);
  };

  const handleDragEnd = (event: TouchEvent | MouseEvent) => {
    const clientX = 'changedTouches' in event ? event.changedTouches[0].clientX : event.clientX;
    const delta = dragStart - clientX;

    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        setDirection(1);
        handleNext();
      } else {
        setDirection(-1);
        handlePrevious();
      }
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    })
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('touchstart', handleDragStart);
    container.addEventListener('touchend', handleDragEnd);
    container.addEventListener('mousedown', handleDragStart);
    container.addEventListener('mouseup', handleDragEnd);

    return () => {
      container.removeEventListener('touchstart', handleDragStart);
      container.removeEventListener('touchend', handleDragEnd);
      container.removeEventListener('mousedown', handleDragStart);
      container.removeEventListener('mouseup', handleDragEnd);
    };
  }, [dragStart]);

  return (
    <AwardsSection>
      <Container>
        <AwardsTitle level={2}>Our Achievements</AwardsTitle>
        
        <AwardsContainer ref={containerRef}>
          {/* Desktop View */}
          {window.innerWidth > 768 && awards.map((award, index) => (
            <AwardCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ImageContainer>
                <img src={goldenLaurel} alt="Award Trophy" />
              </ImageContainer>
              <AwardTitle>{award.title}</AwardTitle>
              <AwardDescription>{award.description}</AwardDescription>
            </AwardCard>
          ))}

          {/* Mobile View */}
          {window.innerWidth <= 768 && (
            <CardContainer>
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <AwardCard
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <ImageContainer>
                    <img src={goldenLaurel} alt="Award Trophy" />
                  </ImageContainer>
                  <AwardTitle>{awards[currentIndex].title}</AwardTitle>
                  <AwardDescription>{awards[currentIndex].description}</AwardDescription>
                </AwardCard>
              </AnimatePresence>
            </CardContainer>
          )}
        </AwardsContainer>

        {/* Mobile Navigation */}
        <MobileNavigation>
          <NavigationButton onClick={handlePrevious}>
            <LeftOutlined />
          </NavigationButton>
          <NavigationButton onClick={handleNext}>
            <RightOutlined />
          </NavigationButton>
        </MobileNavigation>
      </Container>
    </AwardsSection>
  );
};

export default Awards;
