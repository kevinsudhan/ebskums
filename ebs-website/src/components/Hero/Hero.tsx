import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

// Import images
import creditCardHero from '../../assets/images/hero/credit-card-hero.png';
import personalLoanHeroImg from '../../assets/images/hero/personal-loan-hero.jpg?url';
import homeLoanHeroImg from '../../assets/images/hero/home-loan-hero.jpeg?url';

const personalLoanHero = new URL('../../assets/images/hero/personal-loan-hero.jpg', import.meta.url).href;
const homeLoanHero = new URL('../../assets/images/hero/home-loan-hero.jpeg', import.meta.url).href;

const HeroSection = styled.section`
  height: 650px;
  position: relative;
  overflow: hidden;
  background: #f8f9fa;
  margin: 130px 40px 0 40px;
  border-radius: 24px;
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transition: transform 0.5s ease-in-out;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const Slide = styled.div<{ $backgroundImage: string }>`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(0.85);
  }
`;

const TextContent = styled.div`
  max-width: 800px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  z-index: 2;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const NavigationButton = styled(Button)<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.$direction}: 20px;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  z-index: 4;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  svg {
    font-size: 20px;
  }
`;

const Indicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 4;
`;

const Indicator = styled.div<{ $active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
`;

const slides = [
  {
    image: creditCardHero,
    title: 'Empower Your Wallet, Unlock Your World!',
    description: 'Need a Credit Card? Contact Us Today for Tailored Solutions!',
  },
  {
    image: personalLoanHero,
    title: 'Your dreams, our trust. Personal loans made simple',
    description: 'Customizable repayment options and optimized interest rates to finance your next major purchase or planned travel.',
  },
  {
    image: homeLoanHero,
    title: 'Building dreams, one home at a time',
    description: 'Transform your homeownership dreams into reality with our flexible home loan solutions.',
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging]);

  useEffect(() => {
    setCurrentTranslate(-currentSlide * 100);
    setPrevTranslate(-currentSlide * 100);
  }, [currentSlide]);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartPos(('touches' in e) ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const currentPosition = ('touches' in e) ? e.touches[0].clientX : e.clientX;
    const diff = (currentPosition - startPos) * 100 / (containerRef.current?.offsetWidth || 1);
    const newTranslate = prevTranslate + diff;
    
    setCurrentTranslate(newTranslate);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const threshold = 20;
    const diff = currentTranslate - prevTranslate;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      } else if (diff < 0 && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      } else {
        setCurrentTranslate(prevTranslate);
      }
    } else {
      setCurrentTranslate(prevTranslate);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <HeroSection>
      <CarouselContainer
        ref={containerRef}
        style={{ transform: `translateX(${currentTranslate}%)` }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {slides.map((slide, index) => (
          <Slide key={index} $backgroundImage={slide.image}>
            <TextContent>
              <Title>{slide.title}</Title>
              <Description>{slide.description}</Description>
            </TextContent>
          </Slide>
        ))}
      </CarouselContainer>

      <NavigationButton $direction="left" onClick={prevSlide} style={{ opacity: currentSlide === 0 ? 0.5 : 1 }}>
        <LeftOutlined />
      </NavigationButton>
      <NavigationButton $direction="right" onClick={nextSlide} style={{ opacity: currentSlide === slides.length - 1 ? 0.5 : 1 }}>
        <RightOutlined />
      </NavigationButton>

      <Indicators>
        {slides.map((_, index) => (
          <Indicator
            key={index}
            $active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Indicators>
    </HeroSection>
  );
};

export default Hero;
