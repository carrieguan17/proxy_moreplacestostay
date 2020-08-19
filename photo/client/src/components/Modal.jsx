import React from 'react';
import styled from 'styled-components';
import PropertyOverview from './PropertyOverview.jsx';

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
`

const HeaderDiv = styled.div`
  padding-left: 24px;
  height: 48px;
`

const ArrowDiv = styled.div`
  top: 24px;
  position: absolute;
  display: flex;
  left: 24px;
`

const ArrowButton = styled.button`
  appearance: none;
  display: inline-block;
  color: rgb(34, 34, 34);
  cursor: pointer;
  touch-action: manipulation;
  position: absolute;
  border-radius: 50%;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  margin: 0px;
  padding: 0px;
  background: transparent;
  transition: -ms-transform 0.25s ease 0s, -webkit-transform 0.25s ease 0s, transform 0.25s ease 0s;
  &:hover{
    background-color: #F8F8F8;
  }
  width: 32px;
  height: 32px;
`

const ArrowIcon = styled.svg`
  height: 16px;
  width: 16px;
  fill: currentcolor;
`

function Modal(props) {
  const { show, closeModal } = props;

  return (
    <MainDiv>
      <HeaderDiv>
        <ArrowDiv>
          <ArrowButton onClick={closeModal}>
          <ArrowIcon viewBox="0 0 18 18" role="presentation" ariaHidden="true" focusable="false"><path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path></ArrowIcon>
          </ArrowButton>
        </ArrowDiv>
      </HeaderDiv>
      <PropertyOverview photos={props.photos}/>
    </MainDiv>
  );
}

export default Modal;