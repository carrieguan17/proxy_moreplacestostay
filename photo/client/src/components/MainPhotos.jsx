import React from 'react';
import styled from 'styled-components';

const LargeDiv = styled.div`
  max-width: 1280px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 24px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  max-height: 746px;
  height: 75%;
`

const InnerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 8px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`

const LargePhoto = styled.img`
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 7;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 12px 0px 0px 12px;
  cursor: pointer;
`

const SmallPhotoTop = styled.img`
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 4;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0px 12px 0px 0px;
  cursor: pointer;
`

const SmallPhotoBottom = styled.img`
  cursor: pointer;
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 7;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 12px 0px;
`

const ShowAllPhotos = styled.div`
  display: flex;
  align-items: center;
  bottom: 24px;
  right: 24px;
  z-index: 3;
  bottom: 24px;
  right: 24px:
  box-sizing: border-box;
  padding: 7px 15px;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  outline: none;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  border-color: rgb(34, 34, 34);
  background: rgb(255, 255, 255);
  background-color: white;
  font-size: 14px;
  text-align: center;
  position: absolute;
  &:hover{
    background-color: #F5F5F5;
  }
`

const NineDots = styled.svg`
  height: 12px;
  width: 12px;
  display: block;
  fill: currentcolor;
`

const BottomRightDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 4;
  grid-row-end: 7;
  display: block;
  position: relative;
  cursor: pointer;
`

function MainPhotos(props) {
  return (
    <LargeDiv>
      <InnerDiv>
        <LargePhoto src={props.photos[0].PhotoURL} value={0} onClick={(event) => props.click(event)}>
        </LargePhoto>
        <SmallPhotoTop src={props.photos[1].PhotoURL} value={1} onClick={(event) => props.click(event)}>
        </SmallPhotoTop>
        <SmallPhotoBottom src={props.photos[2].PhotoURL} value={2} onClick={(event) => props.click(event)}>
        </SmallPhotoBottom>
        <BottomRightDiv value={2} onClick={(event) => props.click(event)}>
          <ShowAllPhotos value={0} onClick={(event) => props.click(event)}>
            <NineDots xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" role="presentation" aria-hidden="true" focusable="false"><circle cx="1.5" cy="1.5" r="1.5"></circle><circle cx="1.5" cy="8.5" r="1.5"></circle><circle cx="8.5" cy="1.5" r="1.5"></circle><circle cx="8.5" cy="8.5" r="1.5"></circle><circle cx="15.5" cy="1.5" r="1.5"></circle><circle cx="15.5" cy="8.5" r="1.5"></circle><circle cx="1.5" cy="15.5" r="1.5"></circle><circle cx="8.5" cy="15.5" r="1.5"></circle><circle cx="15.5" cy="15.5" r="1.5"></circle></NineDots>
            <div style={{marginLeft: '8px'}}>
              Show all photos
            </div>
          </ShowAllPhotos>
        </BottomRightDiv>
      </InnerDiv>
    </LargeDiv>
  )
}

export default MainPhotos;