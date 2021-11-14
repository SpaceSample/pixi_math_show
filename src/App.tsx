import React, { useEffect } from 'react';
import styled from 'styled-components';

import { getPixiApp } from './rcs';

function App() {
  useEffect(() => {
    getPixiApp();
  }, []);
  return (
    <div className="App">
      <StyledTitle>Pixi Math Show</StyledTitle>
    </div>
  );
}

const StyledTitle = styled.h2`
  margin: 20px;
`;

export default App;
