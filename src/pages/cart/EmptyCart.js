import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const EmptyCart = () => {
  return (
    <Wrapper>
      <Text>Your cart is currently empty! <Span>Kindly select some items first</Span></Text>
      <Link to="/"><Button>Back To Products</Button></Link>
    </Wrapper>
  )
}
const Wrapper=styled.div`
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  margin-top: 25vh;
  align-items: center;
  flex-direction: column;
`
const Button=styled.button`
padding: 4px 13px;
background:#B2F9FC ;
border-radius: 10px;
transition: all 0.4s linear;
margin-top: 30px;
border: 1px solid blue;
cursor: pointer;
&:hover{
  color: ivory;
  background:#113CFC ;
}

`
const Span=styled.span`
  color: #082032;
  
`


const Text=styled.h4`
  font-family: cursive;
  font-weight: 900;
  font-size: 25px;
  letter-spacing: 1.4px;
  text-shadow: 2px 2px 0 lightgray,2.5px 2.5px 0 gray;
`
export default EmptyCart
