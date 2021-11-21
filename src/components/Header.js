import React from "react";
import styled from "styled-components";
const Header = ({ title }) => {
  return (
    <div>
      <Title>
        <Span>{title || "All"}</Span>
      </Title>
      <Hr />
    </div>
  );
};
const Title = styled.div`
  /* color:white;  */
  width: fit-content;
  margin: 10px auto;
  padding-top: 60px;
`;
const Span = styled.span`
  color: #082032;
  margin-right: 3px;
`;
const Hr = styled.hr`
  width: 70px;
  height: 6px;
  background: #082032;
  /* background: chocolate; */
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  margin-bottom: 9px;
`;
export default Header;
