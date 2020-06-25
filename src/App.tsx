import React from 'react';
import styled from 'styled-components';

import { useTheme } from './ThemeContext';

const Header = styled.h1`
  font-size: 48px;
  margin-bottom: 1em;
`;

const Button = styled.button`
  border: 2px solid ${props => props.theme.color};
  border-radius: 5px;
  padding: 0.75em;
  background: none;
  color: ${props => props.theme.color};
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

const Card = styled.div`
  border-top-left-radius: 20px;
  background: ${props => props.theme.accent};
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  padding: 3rem;
  height: calc(100vh - 10vh - 6rem);
`;

const Container = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  padding: 10vh 0 0 20vw;
`;

const App: React.FunctionComponent = () => {
  const themeState = useTheme();

  return (
    <Container>
      <Card>
        <Header>{themeState.dark ? 'Dark' : 'Light'} mode example</Header>
        <Button onClick={themeState.toggle}>
          <span>Switch to {themeState.dark ? 'light' : 'dark'} mode</span>
        </Button>
      </Card>
    </Container>
  );
};

export default App;
