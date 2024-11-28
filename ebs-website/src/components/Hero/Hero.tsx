import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import creditCardHero from '../../assets/images/hero/credit-card-hero.png';
import personalLoanHero from '../../assets/images/hero/personal-loan-hero.jpg';
import homeLoanHero from '../../assets/images/hero/home-loan-hero.jpeg';

const HeroSection = styled.section`
  height: 650px;
  position: relative;
  overflow: hidden;
  background: #f8f9fa;
  margin-top: 130px;
  perspective: 1000px;
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
  transform-style: preserve-3d;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.$backgroundImage});
    background-size: cover;
    background-position: ${props => 
      props.$backgroundImage.includes('personal-loan-hero') ? 'center 60%' :
      props.$backgroundImage.includes('home-loan-hero') ? 'center 80%' :
      'center 40%'
    };
    background-repeat: no-repeat;
    z-index: 1;
    filter: brightness(0.85);
    transform: ${props => 
      props.$backgroundImage.includes('personal-loan-hero') ? 'scale(1.2)' :
      'scale(1)'
    } translateZ(-10px);
    transition: transform 0.3s ease-out;
  }
`;

const SlideContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding: 0 20px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(50px);
`;

const TextContent = styled.div`
  max-width: 800px;
  padding: 40px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.2;
  background: linear-gradient(120deg, #2193b0 0%, #6dd5ed 50%, #2193b0 100%);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s linear infinite;

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 32px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  transform: translateY(20px);
  animation: fadeInUp 0.5s forwards 0.2s;
  text-align: center;
`;

const LearnMoreButton = styled(Button)`
  height: 48px;
  padding: 0 32px;
  font-size: 1.1rem;
  border-radius: 24px;
  background: linear-gradient(120deg, #2193b0 0%, #6dd5ed 100%);
  border: none;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(33, 147, 176, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(33, 147, 176, 0.4);
    background: linear-gradient(120deg, #2193b0 0%, #84e0f7 100%);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CarouselButton = styled.button<{ $direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.$direction}: 20px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 4;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  svg {
    color: #000000;
    font-size: 20px;
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 4;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${props => props.$active ? '24px' : '8px'};
  height: 8px;
  border-radius: 4px;
  background: ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
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

const useParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const movement = scrolled * parseFloat(speed);
        if (element instanceof HTMLElement) {
          element.style.transform = `translate3d(0, ${movement}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useParallaxEffect();

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
            <SlideContent className="parallax" data-speed="0.5">
              <TextContent>
                <Title>{slide.title}</Title>
                <Description>{slide.description}</Description>
                <LearnMoreButton>Learn More</LearnMoreButton>
              </TextContent>
            </SlideContent>
          </Slide>
        ))}
      </CarouselContainer>

      <CarouselButton $direction="left" onClick={prevSlide} style={{ opacity: currentSlide === 0 ? 0.5 : 1 }} className="parallax" data-speed="0.3">
        <LeftOutlined />
      </CarouselButton>
      <CarouselButton $direction="right" onClick={nextSlide} style={{ opacity: currentSlide === slides.length - 1 ? 0.5 : 1 }} className="parallax" data-speed="0.3">
        <RightOutlined />
      </CarouselButton>

      <Dots>
        {slides.map((_, index) => (
          <Dot
            key={index}
            $active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </Dots>
    </HeroSection>
  );
};

export default Hero;
