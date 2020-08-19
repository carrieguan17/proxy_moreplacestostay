import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  text-align: start;
  font-size: 16px;
  line-height: 20px;
  color: #222222;
  border-radius: 12px;
  background-color: white;
  z-index: 0;
  width: 665px;
  height: 500px;
  top: -400px;
  left: -80px;
  right: 0;
  bottom: 0;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 16px 0px;
  justify-content: flex-start;
`;

const Content = styled.div`
  position: absolute;
  padding: 30px;
  border-radius: 12px;
  background: white;
  text-align: baseline;
  justify-content: flex-start;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  font-size: 16px;
  padding: 5px 9px;
  &:hover {
    background-color: #f6f6f6;
    border-radius: 50%;
    padding: 5px 9px;
  }
`;

const Weekdays = styled.h5`
  color: #b0b0b0;
  font-size: ;
`;
const BottomButtons = styled.div`
  margin: 100px;
`;
const ClearDates = styled.button`
  text-decoration: underline;
  font-weight: 900px;
  font-size: 16px;
  background-color: white;
  border: none;
  margin-right: 20px;
`;
const CloseButton = styled.button`
  background-color: black;
  color: white;
  font-weight: 800px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  padding: 7px 18px;
`;
const Header = styled.h3`
  align-text: center;
  text-decoration: bold;
`;
const Nights = styled.h1`
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 24px;
`;
const Dates = styled.h3`
  color: #b0b0b0;
  font-size: 16px;
`;

const MonthYear = styled.tr`
  text-align: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin: 50px;
`;

const TwoCalendars = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
const TD = styled.td`
  margin: 0px;
  padding: 0px;
`;
const TR = styled.tr``;
export {
  Wrapper,
  Button,
  Weekdays,
  Content,
  CloseButton,
  ClearDates,
  BottomButtons,
  Nights,
  Dates,
  TwoCalendars,
  MonthYear,
  TD,
  TR,
};
