import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  padding: 0 1em;
`;

const NavOption = (props) => {
  return <Box onClick={() => props.func()}>{props.title}</Box>;
};

export default NavOption;
