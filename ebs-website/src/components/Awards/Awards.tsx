import React, { useRef } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Mesh, Group } from 'three';

const AwardsSection = styled.section`
  padding: 100px 0;
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
  font-size: 2.8rem;
  color: #333333;
  margin-bottom: 60px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #0094d9, #0077b6);
  }
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const AwardCard = styled.div`
  background: #ffffff;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 15px;
  overflow: hidden;
`;

const AwardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333333;
  margin-bottom: 15px;
  font-weight: 500;
  line-height: 1.4;
`;

function Trophy({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
  const group = useRef<Group>();
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={group} position={position} rotation={rotation} scale={[1, 1, 1]}>
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
              South India's Best Direct Sales Associate of HDFC Bank Ltd
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
              Ranked Top 3 Channel Partner in Pan India for Crossing 100 Crores in Unsecured Business
            </AwardTitle>
          </AwardCard>
        </AwardsGrid>
      </Container>
    </AwardsSection>
  );
};

export default Awards;
