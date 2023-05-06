import React from 'react';
import styled from 'styled-components';
import { BackgroundCircle } from './styled-components/Styled';
import { animateScroll } from 'react-scroll';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 20px);
  grid-template-rows: repeat(10, 20px);
  gap: 1rem;

  @media (max-width: 991px) {
    grid-template-columns: repeat(10, 4px);
    grid-template-rows: repeat(10, 4px);
}
`;

const SquareDots = (props) => {
  const { top, left, right, bottom, margin, animation, delay} = props;

  const grid = [];
  for (let i = 0; i < 100; i++) {
    grid.push(<BackgroundCircle key={i} />);
  }

  return (
    <GridWrapper data-aos={animation}  data-aos-delay={delay}
      style={{
        position: 'absolute',
        margin: margin,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
      }}
    >
      {grid}
    </GridWrapper>
  );
};


export default SquareDots;
