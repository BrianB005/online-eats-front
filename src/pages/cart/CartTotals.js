import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const CartTotals = () => {
  const cartTotals = useSelector((state) => state.cart);
  return (
    <TotalsWrapper>
      <Button>CheckOut</Button>
      <Wrapper>
        <SubTotal>
          SubTotal : <Span> Kshs. {cartTotals?.totalAmount?.toFixed(2)}</Span>
        </SubTotal>
        <Tax>
          Tax :<Span> Kshs. {cartTotals?.tax?.toFixed(2)}</Span>
        </Tax>
        <Shipping>
          Delivery Fee :{" "}
          <Span> Kshs. {cartTotals?.deliveryFee?.toFixed(2)}</Span>
        </Shipping>
        <Total>
          Total:<TotalSpan>Kshs. {cartTotals?.cartTotal?.toFixed(2)}</TotalSpan>
        </Total>
      </Wrapper>
    </TotalsWrapper>
  );
};
const Wrapper = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  width: 60%;
  margin: auto;
  display: grid;
  place-items: end;
  padding: 10px 20px;
  background: #eeebdd;
  color: blueviolet;
  font-size: 20px;
  @media screen and (max-width: 1000px) {
    width: 50%;
  }
  @media screen and (max-width: 700px) {
    width: 60%;
  }
`;

const TotalsWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: 800px;
  /* background: lightgray; */
  height: 170px;
  display: flex;
  justify-content: space-between;
`;
const SubTotal = styled.h6`
  margin-bottom: 4px;
`;
const Total = styled.h3`
  color: blue;
  font-size: 20px;
  margin-bottom: 10px;
  padding-bottom: 2px;
  border-top: 1px solid #082032;
  border-bottom: 1px solid #082032;
`;
const Tax = styled.h6`
  margin-bottom: 4px;
`;
const Shipping = styled.h6`
  margin-bottom: 4px;
`;
const Span = styled.span`
  color: #082034;
  padding-left: 8px;
`;
const TotalSpan = styled.span`
  color: blue;
  font-size: 20px;
  padding-left: 8px;
`;
const Button = styled.div`
  padding: 5px 15px;
  background: #b2f9fc;
  border-radius: 12px;
  transition: all 0.4s linear;
  display: flex;
  align-self: center;
  margin: 20px auto;
  border: 1px solid blue;
  cursor: pointer;
  &:hover {
    color: ivory;
    background: #113cfc;
  }
`;
export default CartTotals;
