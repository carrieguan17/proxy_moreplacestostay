import React from 'react';
import styled from 'styled-components';

const ShareBox = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: block;
`

function Share() {
  return (
    <ShareBox>
      Share
    </ShareBox>
  )
}

export default Share;