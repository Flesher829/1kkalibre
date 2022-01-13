import styled from 'styled-components';
import { Button } from '@/common/button';

export const Landing = () => {
  return (
    <LandingContainer>
      <Button>Hello World</Button>
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
