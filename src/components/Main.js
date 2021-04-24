import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
  diplay: flex;
  margin: 12%;
  padding: 5%;
  border: 2px solid orange;
`
const Main = () => {
  return (
    <React.Fragment>
      <Box>
        Main content's components.
      </Box>
    </React.Fragment>
  )
}

export default Main;