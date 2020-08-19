import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  margin-top: 200px;
  margin-left: 40%;
  text-align: start;
  font-size: 16px;
  line-height: 20px;
  color: #222222;
  border: 0.5px solid #f6f6f6;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px 0px;
  padding: 24px;
  border-radius: 12px;
`;
const Form = styled.input``;
const Button = styled.button``;

const ReserveButton = styled.button`
  width: 323px;
  text-align: center;
  border: none;
  padding: 15px;
  font-size: 16px;
  background-color: #b61e58;
  color: white;
  border-radius: 6px;
  margin-bottom: 10px;
`;

const LargeText = styled.h4`
  font-size: 22px;
  color: #222222;
  padding: 20px 0px; 20px; 0px;
`;

const MediumText = styled.h5`
  font-size: 16px;
  color: #222222;
  padding: 20px 0px; 20px; 0px;
`;

const MediumBoldText = styled.h5`
  font-size: 16px;
  color: #222222;
  font-weight: 700px;
`;

const SmallText = styled.h6`
  font-size: 14px;
  color: #222222;
`;

const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  text-align: bottom;
`;

const CenterText = styled.h6`
  text-align: center;
  font-size: 14px;
  color: #222222;
  padding: 13px;
`;

const Label = styled.label`
  display: flex;
  align-text: start;
  color: #222222;
  font-size: 14px;
`;

export {
  Wrapper,
  Button,
  Form,
  ReserveButton,
  LargeText,
  MediumText,
  MediumBoldText,
  SmallText,
  CenterText,
  TopInfo,
  Label,
};
