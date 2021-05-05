import React from 'react';
import styled from 'styled-components';
import InfoBar from './InfoBar';

const Box = styled.div`
  display: flex;
  margin: 12% 0;
  padding: 1em;
  border: 2px solid orange;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Main = () => {
  return (
    <Box>
      <InfoBar />
    </Box>
  );
};

export default Main;
