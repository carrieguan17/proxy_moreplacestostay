import React from 'react';
import styled from 'styled-components';
import ReactCarouselPhotos from './ReactCarouselPhotos.jsx';

const MainDiv = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  margin: 0 auto;
`

const HeaderDiv = styled.div`
  box-sizing: border-box;
  display: block;
  height: 94px;
`

const PhotoCount = styled.div`
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  flex: 1 1 auto;
`

const CloseShareSave = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 40px 40px 20px;
`

const CloseButton = styled.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
  text-align: center;
  width: auto;
  touch-action: manipulation;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 18px;
  font-weight: 470;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  color: rgb(34, 34, 34);
  margin: 0px;
  text-decoration: none;
  border-radius: 8px;
  outline: none;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  background: rgba(34, 34, 34, 0.1);
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  &:hover{
    background-color: #D8D8D8;
  }
`

const XIcon = styled.svg`
  height: 12px;
  width: 12px;
  display: block;
  fill: currentcolor;
  margin-right: 8px;
`

const XSpan = styled.span`
  -webkit-box-pack: center;
  -webkit-box-align: center;
  -webkit-box-direction: normal;
  -webkit-box-orient: horizontal;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`

const CarouselButton = styled.button`
  display: inline-block;
  color: rgb(34, 34, 34);
  cursor: pointer;
  touch-action: manipulation;
  position: absolute;
  border-radius: 50%;
  outline: 0px;
  margin: 0px;
  padding: 0px;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s,
  &:hover{
    background-color: #A9A9A9;
  }
  top: 35%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(176, 176, 176);
`

const LeftCarouselButton = styled(CarouselButton)`
  left: 5%;
`

const RightCarouselButton = styled(CarouselButton)`
  right: 5%;
`

const ArrowIcon = styled.svg`
  height: 12px;
  width: 12px;
`

const RightArrow = styled.svg`
  height: 14px;
  width: 13px;
`

class ReactCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: ''
    }
  }

  render() {
    return (
      <MainDiv>
        <HeaderDiv>
          <CloseShareSave>
            <CloseButton onClick={this.props.closeModal}>
              <XSpan>
                <XIcon viewBox="0 0 12 12" role="presentation" ariaHidden="true" focusable="false"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fillRule="evenodd"></path></XIcon>
                <span>Close</span>
              </XSpan>
            </CloseButton>
            <PhotoCount>{`${this.props.index + 1} / ${this.props.photos.length}`}</PhotoCount>
          </CloseShareSave>
        </HeaderDiv>
        {this.props.index === 0 ? null : <LeftCarouselButton onClick={this.props.lower}>
          <ArrowIcon viewBox="0 0 18 18" role="presentation" ariaHidden="true" focusable="false"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></ArrowIcon>
        </LeftCarouselButton>}
        <ReactCarouselPhotos photos={this.props.photos} index={this.props.index} lower={this.props.lower} increase={this.props.increase}/>
        {this.props.index === this.props.photos.length - 1 ? null: <RightCarouselButton onClick={this.props.increase}>
          <RightArrow ariaHidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" strokeWidth="3.333" ><path d="M12 4l11.293 11.293a1 1 0 010 1.414L12 28"/></RightArrow>
        </RightCarouselButton>}
      </MainDiv>
    )
  }
}

export default ReactCarousel;