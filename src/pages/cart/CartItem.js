import React from 'react'
import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import { singleProduct } from '../../testData'
const CartItem= () => {
  const {name,price,image}=singleProduct;
  return (    
    <Wrapper>
      <ImageContainer> <Image src={image}/></ImageContainer>
      <Title>{name}</Title>
      <DeleteIcon><FaTrash/></DeleteIcon>
      <Price>Kshs <Span>{price}</Span></Price>
      <Select>
        {Array(5).fill().map((_,i)=>{
          return <Option key={i+1}>{i+1}</Option>
        })}
      </Select>
      <SubTotal>Kshs. <Span>{price}</Span></SubTotal>
      
        
      
    </Wrapper>
   
  )
}
const Wrapper=styled.div`
  width: 700px;
  /* background: lightgray; */
  border-radius: 6px;
  border: 1px solid lightgray;
  margin-top: 0;
  transition: all 0.3s linear;
  box-shadow: 1px 4px 13px lightgray ;
  padding: 6px;
  padding-right: 10px;
  align-items: center;
  text-align: center;
  margin-bottom: 5px;
  &:hover{
    box-shadow: 2px 4px 10px gray;
  }
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;

 
  @media screen and (max-width:600px){
    width:90vw;
  }
  @media screen and (max-width:700px){
    width:90vw;
  }
`
const Select=styled.select`
  padding: 2px;
`
const Option=styled.option``


const DeleteIcon=styled.div`
  color:red;
  cursor: pointer;
  &:hover{
    color:#8E0505;
  }
`
const ImageContainer=styled.div`
  width:100px;  
  &:hover{
    opacity: 0.9;
  }

`
const SubTotal=styled.h6`
  @media screen and (max-width:680px){
    display: none;
  }
`
const Image=styled.img`
  width: 100%;
  object-fit: contain;
`

const Title=styled.h4`
  cursor: pointer;
  color: #000D6B;
  max-width: 200px;
  &:hover{
    text-decoration: underline;
  }
  
`
const Price=styled.h5`
color: #000000;
`

const Span=styled.span`
  color: #2F86A6;
`

export default CartItem
