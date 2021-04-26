import React from 'react';
import styled from 'styled-components'

const Box = styled.div`
  display: flex;
  margin: 12%;
  padding: 5%;
  border: 2px solid orange;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`
const Main = () => {
  return (
    <React.Fragment>
      <Box>
        <div>
        Main content's components.
        </div>
      </Box>
    </React.Fragment>
  )
}

export default Main;