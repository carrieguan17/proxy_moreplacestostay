import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  text-align: start;
  font-size: 16px;
  line-height: 20px;
  color: #222222;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px 0px;
  border-radius: 12px;
`;

const Input = styled.input`
  border: none;
  font-size: 14px;
  width: 100px;
  margin: 0px;
`;
const Weekdays = styled.h5`
  color: #b0b0b0;
  font-size: ;
`;

const CheckInForm = styled.form`
  display: flex;
`;

const Label = styled.label`
  display: flex;
  align-text: start;
  color: #222222;
  font-size: 14px;
  width: 140px;
`;

const LeftButton = styled.button`
font-size: 1em;
margin: 0em;
padding: 1em;
background: white;
border: 1px solid #b0b0b0;
font-size: 14px
border-radius: 0% 0% 2% 2%;
width: 161px;
border-radius: .5em 0px 0px 0px;
margin-top: 20px;
border-right: none;
`;

const RightButton = styled.button`
font-size: 1em;
margin: 0em;
padding: 1em;
background: white;
border: 1px solid #b0b0b0;

font-size: 14px
border-radius: 0% 0% 2% 2%;
width: 161px;
border-radius: 0px .5em 0px 0px;
margin-top: 20px;
`;

export {
  Wrapper,
  LeftButton,
  RightButton,
  Input,
  Weekdays,
  CheckInForm,
  Label,
};
