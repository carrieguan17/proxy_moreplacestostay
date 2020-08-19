import React from 'react';
import styled from 'styled-components';

const PhotoDiv = styled.div`
  display: block;
  top: 52px;
  position: relative;
  height: 600px;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  justify-content: center;
  object-fit: contain;
  box-sizing: border-box;
  vertical-align: bottom;
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ReactCarouselPhotos = (props) => {
  return (
    <PhotoDiv>
      <Photo src={props.photos[props.index].PhotoURL}/>
    </PhotoDiv>
  )
}

export default ReactCarouselPhotos;