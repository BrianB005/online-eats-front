import React from 'react'
import styled from 'styled-components'
const CartTotals = () => {
  return (
    <TotalsWrapper>
      <Button>CheckOut</Button>
      <Wrapper>
        <SubTotal>SubTotal : <Span> Kshs. 900.99</Span></SubTotal>
        <Tax>Tax :<Span> Kshs. 800.99</Span></Tax>
        <Shipping>Shipping Fee : <Span> Kshs. 607.67</Span></Shipping>
        <Total>Total:<TotalSpan>Kshs. 1978.17</TotalSpan></Total>
      </Wrapper>  
    </TotalsWrapper>
  )
}
const Wrapper=styled.div`
  max-width:400px;
  /* display: flex; */
  /* flex-direction: column; */
  width:0vw;
  margin: auto;
  display: grid;
  place-items: end;
  padding: 10px 20px;
  background: #EEEBDD;
  color: blueviolet;
  font-size: 20px;
  @media screen and (max-width:1000px){
    width:90vw;
  }
  @media screen and (max-width:700px){
    width:93vw;
  }
`
  
  


const TotalsWrapper=styled.div`
  width:95%;
  /* background: lightgray; */
  height:170px;
  display: flex;
  @media screen and(max-width:750px){
    
  }
  
  
  /* justify-content: flex-end; */
`
const SubTotal=styled.h6` 
margin-bottom: 4px;
`
const Total=styled.h3`
  color:blue;
  font-size: 20px;
  margin-bottom: 10px;
  padding-bottom: 2px;
  border-top: 1px solid #082032;
  border-bottom: 1px solid #082032;
`
const Tax=styled.h6`
  margin-bottom: 4px;
`
const Shipping=styled.h6`
  margin-bottom: 4px;
`
const Span=styled.span` 
  color:#082034;
  padding-left:8px;
`
const TotalSpan=styled.span` 
  color:blue;
  font-size: 20px;
  padding-left: 8px;
`
const Button=styled.div`
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
export default CartTotals
