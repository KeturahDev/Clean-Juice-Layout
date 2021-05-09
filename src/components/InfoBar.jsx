import React, { useState } from 'react';
import styled from 'styled-components';
import OrangBottle from './OrangeBottle.jpg';

const Box = styled.div`
  margin: auto;
`;

const InfoBar = () => {
  const [selected, setSelected] = useState(OrangBottle);

  return (
    <Box>
      <button onClick={() => alert('back')}>back</button>
      <img src={selected} alt="img of bottle" />
      <button onClick={() => alert('forward')}>forward</button>
    </Box>
  );
};

export default InfoBar;
