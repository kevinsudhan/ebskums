import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 24px;
`;

export const BLBankingPartners: React.FC = () => {
  return (
    <Container>
      <Title>Business Loan Banking Partners</Title>
      {/* Content will be added later */}
    </Container>
  );
};

export default BLBankingPartners;