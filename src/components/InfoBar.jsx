import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  margin: auto;
`;

const InfoBar = () => {
  const [selected, setSelected] = useState('OrangeBottle.png');

  return (
    <Box>
      <button onClick={() => alert('back')}>back</button>
      <img src="OrangeBottle.jpg" alt="img of bottle" />
      {/* <img src={require(OrangeBottle.jpg)} alt="img of bottle" /> */}
      <button onClick={() => alert('forward')}>forward</button>
    </Box>
  );
};

export default InfoBar;
