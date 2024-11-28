import React, { useRef } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Mesh, Group } from 'three';

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

const ModelContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: 12px;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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

function Trophy({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
  const group = useRef<Group>();
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={[0.8, 0.8, 0.8]}>
      {/* Base */}
      <mesh position={[0, -1.5, 0]}>
        <cylinderGeometry args={[0.8, 1, 0.3, 32]} />
        <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.4, 0.8, 0.3, 32]} />
        <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Stem */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 1.5, 32]} />
        <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Cup */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.7, 0.2, 1.2, 32]} />
        <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.8, 0.7, 0.6, 32]} />
        <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Handles */}
      <group position={[0, 0.8, 0]}>
        {/* Left Handle */}
        <group position={[-0.7, 0, 0]}>
          {/* Upper curve */}
          <mesh position={[0, 0.3, 0]} rotation={[0, 0, Math.PI * 0.25]}>
            <torusGeometry args={[0.25, 0.05, 16, 32, Math.PI * 0.6]} />
            <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Lower curve */}
          <mesh position={[0, -0.3, 0]} rotation={[0, 0, -Math.PI * 0.25]}>
            <torusGeometry args={[0.25, 0.05, 16, 32, Math.PI * 0.6]} />
            <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Vertical connector */}
          <mesh position={[-0.18, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.6, 16]} />
            <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>

        {/* Right Handle */}
        <group position={[0.7, 0, 0]}>
          {/* Upper curve */}
          <mesh position={[0, 0.3, 0]} rotation={[0, 0, -Math.PI * 0.75]}>
            <torusGeometry args={[0.25, 0.05, 16, 32, Math.PI * 0.6]} />
            <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Lower curve */}
          <mesh position={[0, -0.3, 0]} rotation={[0, 0, Math.PI * 0.75]}>
            <torusGeometry args={[0.25, 0.05, 16, 32, Math.PI * 0.6]} />
            <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Vertical connector */}
          <mesh position={[0.18, 0, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.6, 16]} />
            <meshStandardMaterial color="#ffd700" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      </group>

      {/* Top Decoration */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

const Awards: React.FC = () => {
  return (
    <AwardsSection>
      <Container>
        <Title>Our Achievements</Title>
        <AwardsGrid>
          <AwardCard>
            <ModelContainer>
              <Canvas camera={{ position: [0, 0, 7], fov: 40 }}>
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <Trophy position={[0, -0.3, 0]} rotation={[0.1, 0, 0]} />
                <Environment preset="sunset" />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
              </Canvas>
            </ModelContainer>
            <AwardTitle>
              Top DSA - HDFC Bank
              <br />
              <span>
                South India's Best Direct Sales Associate
              </span>
            </AwardTitle>
          </AwardCard>

          <AwardCard>
            <ModelContainer>
              <Canvas camera={{ position: [0, 0, 7], fov: 40 }}>
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <Trophy position={[0, -0.3, 0]} rotation={[0.1, Math.PI / 4, 0]} />
                <Environment preset="sunset" />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
              </Canvas>
            </ModelContainer>
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
