import React from 'react';
import styled from 'styled-components';
import NavOption from './NavOption';

const BarBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h2`
  padding: 0 1em;
`;

const Header = () => {
  return (
    <BarBox>
      <Logo>Title</Logo>
      <NavOption title="option" func={() => alert('clicked')} />
      <NavOption title="option" func={() => alert('clicked')} />
      <NavOption title="option" func={() => alert('clicked')} />
      <NavOption title="option" func={() => alert('clicked')} />
    </BarBox>
  );
};

export default Header;
