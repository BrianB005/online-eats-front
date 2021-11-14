import React from 'react'
import styled from 'styled-components'
import CartTotals from './cart/CartTotals'
import { Link } from 'react-router-dom'
// import EmptyCart from './cart/EmptyCart'
import CartItem from './cart/CartItem'
import { useSelector } from 'react-redux'
const Cart = () => {
  const cart=useSelector((state)=>state.cart)
  console.log(cart);
  return (
    // <EmptyCart/>
    <Wrapper>
      <Link to="/"><BackButton>Back Home</BackButton></Link>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartItem/>
      <CartTotals/>
    </Wrapper>
  )
}
const Wrapper=styled.div`
  margin-top: 65px;
`
const BackButton=styled.button`
padding: 5px 15px;
background:#B2F9FC ;
border-radius: 12px;
transition: all 0.4s linear;
display: flex;
align-self: center;
margin:20px auto;
border: 1px solid blue;
cursor: pointer;
&:hover{
  color: ivory;
  background:#113CFC ;
}

` 



export default Cart
