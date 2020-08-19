import React from "react";
import styled from "styled-components";

const Line = styled.hr``;

const Category = styled.th`
  text-decoration: underline;
  font-size: 16px;
  font-weight: 200px;
  padding: 0px 0px 7px 0px;
`;
const TotalCategory = styled.th`
  font-weight: bold;
  text-align: left;
  padding: 0px 0px 7px 0px;
`;
const TotalAmount = styled.th`
  font-weight: bold;
  text-align: right;
`;

const Amount = styled.th`
  text-decoration: none;
  text-align: right;
  padding-left: 60px;
`;

export { Category, Amount, Line, TotalCategory, TotalAmount };
