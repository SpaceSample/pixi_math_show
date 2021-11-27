import React from 'react';
import styled from 'styled-components';

import { initRectangularCoordinateSystem } from './rcs';
// import { ctx } from './rcs/context';
// import { drawLine } from './rcs/line';

function App() {
  return (
    <div className="App">
      <StyledTitle>Pixi Math Show</StyledTitle>
    </div>
  );
}

initRectangularCoordinateSystem('canvasDiv');

// setTimeout(() => {
//   let a = 1;
//   let b = 2;
//   let c = -333;
//   drawLine(a, b, c)
//   const line = drawLine(a, b, c);
//   setInterval(() => {
//     c += 2;
//     if (c > 500) {
//       c = 0;
//     }
//     if (line) {
//       line.x = c / a;
//     }

//   }, 16)
// }, 100);

const StyledTitle = styled.h2`
  margin: 20px;
`;

export default App;
