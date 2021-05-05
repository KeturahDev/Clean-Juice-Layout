import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  margin: auto;
`;

const InfoBar = () => {
  const [selected, setSelected] = useState('image 1');

  return (
    <Box>
      <button onClick={() => alert('back')}>back</button>
      {selected}
      <button onClick={() => alert('forward')}>forward</button>
    </Box>
  );
};

export default InfoBar;
