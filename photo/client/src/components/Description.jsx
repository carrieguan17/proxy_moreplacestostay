import React from 'react';
import styled from 'styled-components';

const Heading = styled.div`
  max-width: none;
  padding-left: 80px;
  padding-right: 80px;
  -webkit-box-align: stretch;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 0px;
  margin-right: 0px;
  box-sizing: border-box;
  height: 88px;
`

const InnerDiv = styled.div`
  max-width: 1120px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;
  display: block;
  padding-top: 24px;
`

const Box = styled.div`
  padding-top: 12px;
`

const Headline = styled.h1`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 26px;
  line-height: 30px;
  font-weight: 280;
  margin-top: 0;
  margin-bottom: 0;
  grid-row-start: row1-start;
  letter-spacing: 1px;
`

const Star = styled.span`
  color: #92174D;
  padding-right: 3px;
`

const Score = styled.span`
  color: rgb(34, 34, 34);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  padding-right: 4px;
  cursor: pointer;
`

const Dot = styled.span`
  margin-left: 8px;
  margin-right: 8px;
`

const RatingArea = styled.span`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const ReviewNumber = styled.span`
  color: rgb(113, 113, 113);
  font-size: 13px;
  cursor: pointer;
`
const Superhost = styled.span`
  box-sizing: border-box;
  color: rgb(113, 113, 113);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const SuperhostRibbon = styled.img`
  box-sizing: border-box;
  height: 15px;
`

const Location = styled.span`
  grid-column-start: 3;
  grid-column-end: 5;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: inherit;
  font-style: inherit;
  font-size: 14px;
  line-height: 20px;
  color: rgb(113, 113, 113);
  font-variant: inherit;
  text-decoration: underline;
  cursor: pointer;
`

const ShareSave = styled.button`
  display: flex;
  float: right;
  cursor: pointer;
  outline: none;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background: transparent;
  text-decoration: underline;
  padding: 8px;
  border-radius: 7px;
  &:hover{
    background-color: #F8F8F8;
  }
`

const ShareButton = styled(ShareSave)`

`

const ShareSaveDiv = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`

const Icon = styled.svg`
  display: block;
  height: 16px;
  width: 16px;
  fill: currentcolor;
  box-sizing: border-box;
  margin-right: 8px;
`

function Description(props) {

  return (
    <Heading>
      <InnerDiv>
        <Headline>{props.data[0].Description}</Headline>
        <Box>
          <RatingArea>
            <Star>&#9733;</Star>
            <Score>{props.data[0].Rating}</Score>
            <ReviewNumber>{`(${props.data[0].TotalReviews})`}</ReviewNumber>
          </RatingArea>
            <Dot>·</Dot>
            {props.data[0].Superhost === 1 ? <span><SuperhostRibbon src={`https://fec-airbnb-plus-photos.s3-us-west-1.amazonaws.com/superhost.png`}></SuperhostRibbon></span> : null}
            <Superhost>{props.data[0].Superhost === 1 ? 'Superhost' : null}</Superhost>
            {props.data[0].Superhost === 1 ? <Dot>·</Dot> : null}
            <Location>{props.data[0].Location}</Location>
          <ShareSave><ShareSaveDiv><Icon aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></Icon>Save</ShareSaveDiv></ShareSave>
          <ShareButton><ShareSaveDiv><Icon aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g vectorEffect="non-scaling-stroke" transform="translate(0,0)scale(1,1)" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2"><path d="m27 18v9c0 1.1045695-.8954305 2-2 2h-18c-1.1045695 0-2-.8954305-2-2v-9"></path><path d="m4.5 14.5h23z" transform="matrix(0 1 -1 0 30.5 -1.5)"></path><path d="m6 13 9.2928932-9.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l9.2928932 9.29289322"></path></g></Icon>Share</ShareSaveDiv></ShareButton>
        </Box>
      </InnerDiv>
    </Heading>
  )
}

export default Description;