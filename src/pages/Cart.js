import React, { useEffect } from "react";
import styled from "styled-components";
import CartTotals from "./cart/CartTotals";
import { Link } from "react-router-dom";
import EmptyCart from "./cart/EmptyCart";
import CartItem from "./cart/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { getTotals } from "../redux/actions/cartActions";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cart?.cartItems, products]);
  if (cart?.cartItems?.length === 0) {
    return <EmptyCart />;
  }

  return (
    <Wrapper>
      <Link to="/">
        <BackButton>Back Home</BackButton>
      </Link>
      {cart?.cartItems?.map((item) => {
        return <CartItem key={item.product} {...item} />;
      })}
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 65px;
`;
const BackButton = styled.button`
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

export default Cart;
