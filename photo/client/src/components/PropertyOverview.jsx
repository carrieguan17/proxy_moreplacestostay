import React from 'react';
import styled from 'styled-components';

const ParentDiv = styled.div`

`

const MainDiv = styled.div`
  padding-left: 80px;
  padding-right: 80px;
  height: 138px;
  display: grid;
  max-width: 1120px;
  margin: auto;
  grid-template-columns: repeat(autofill, minmax(124px, 1fr));
  justify-items: center;
  grid-gap: 8px;
  grid-row-gap: 8px;
`

const MiniDiv = styled.div`
  max-width: 1120px;
  left: 0;
  right: 0;
  height: 48px;
  margin: auto;
  text-align: left;
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
`

const MiniPhotosDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(7,1fr);
  grid-template-rows: 1fr;
  grid-gap: 8px;
  width: 100%;
  box-sizing: border-box;
`

const SmallRoom = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover{
    filter: brightness(1.05);
  }
`

const SmallRoomPhoto = styled.img`
  object-fit: cover;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 100%;
  height: 100%;
`

const RoomDescription = styled.div`
  padding-top: 8px;
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`

class PropertyOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRoom: ''
    }
  }



  render() {
    return (
      <ParentDiv>
        <MiniDiv>
          Property overview
        </MiniDiv>
        <MainDiv>
          <MiniPhotosDiv>
            <SmallRoom>
              <SmallRoomPhoto src={this.props.photos[0].PhotoURL}/>
              <RoomDescription>Living room</RoomDescription>
            </SmallRoom>
          </MiniPhotosDiv>
        </MainDiv>
      </ParentDiv>
    )
  }
}

export default PropertyOverview;