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
  width: 300px;
  height: 300px;
  top: -200px;
  left: 170px;
  right: 0;
  bottom: 0;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 16px 0px;
  justify-content: flex-start;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
`;

const GuestButton = styled.button`
  font-size: 1em;
  margin: 0em;
  padding: 1em;
  background: white;
  border: 1px solid #b0b0b0;
  font-size: 14px
  border-radius: 0% 0% 2% 2%;
  width: 322px;
  border-radius: 0px 0px .5em .5em;
  margin-bottom: 20px;
  border-top: none;
`;

const Button = styled.button`
  padding: 8px 12px;
  text-align: center;
  background-color: white;
  border-radius: 50%;
  margin: 10px;
  border: 0.5px solid #b0b0b0;
  &:hover {
    color: black;
    border: 1px solid #black;
  }
`;
const TD = styled.td`
  text-align: right;
  align-items: right;
`;
const GuestInput = styled.input`
  border: none;
  font-size: 1em;
  margin: 0em;
`;

const Info = styled.h3`
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 300px;
`;

const CloseButton = styled.button`
  text-decoration: underline;
  background-color: white;
  border: none;
  padding: 10px;
  font-weight: bold;
  margin-left: 220px;
`;
export {
  Wrapper,
  GuestButton,
  GuestInput,
  Button,
  Table,
  TD,
  Info,
  CloseButton,
};
