import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { singleProduct } from '../testData';
import { getProduct } from '../redux/actions/productActions';
import { useSelector,useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Loader from '../components/Loader';
const SingleProduct = () => {
  
  const location=useLocation();
  const productId=location.pathname.split("/")[3];
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getProduct(productId))
  },[dispatch,productId])
  const singlProduct=useSelector((state)=>state.product)
  const {product,loading}=singlProduct
  console.log(product);
  if (loading){
    return <Loader/>
  }

  const {name,price,description,category,image}=singleProduct
  return (
    <ItemWrapper>
    <Link to="/"><BackButton>Back to All</BackButton></Link>
    <Wrapper>
      <ImageContainer> <Image src={image}/></ImageContainer>
      <InfoContainer>
        <Title>{name}</Title>
        <Category>{category}</Category>
        <Price>Kshs <Span>{price}</Span></Price>
        <Desc>{description}</Desc>
        <ButtonsContainer>
          <Button>Similar Products</Button>
          <Button>Cart +</Button>
        </ButtonsContainer>
      </InfoContainer>
    </Wrapper>
   </ItemWrapper> 
  )
}
const ItemWrapper=styled.div`
  margin-top: 70px;
`
const Wrapper=styled.div`
  width: 400px;
  
  /* background: lightgray; */
  border-radius: 6px;
  transition: all 0.3s linear;
  box-shadow: 1px 4px 13px lightgray ;
  &:hover{
    box-shadow: 2px 4px 18px gray;
  }
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 6px;
  @media screen and (max-width:600px){
    width:90vw;
    margin:17px  auto;
  }
  @media screen and (max-width:700px){
    width:90vw;
    margin:17px  auto;
  }
`

const Category=styled.h3`
text-transform: capitalize;
margin-bottom: 4px;
`
const ImageContainer=styled.div`
  flex: 2;
  
  &:hover{
    opacity: 0.9;
  }

`
const Image=styled.img`
  width: 100%;
  object-fit: contain;
`
const InfoContainer=styled.div`
  flex: 1;
  padding: 5px 12px;
`
const Title=styled.h4`
  
  color: #082032;
  margin-bottom: 13px;
  
`
const Price=styled.h5`
color: #000000;
margin-bottom: 15px;
`
const Desc=styled.p`
  margin-bottom: 6px;
  font-size: 13px;
`
const ButtonsContainer=styled.div`
  display: flex;
  justify-content: space-between;
`
const Button=styled.button`
padding: 4px 13px;
background:#B2F9FC ;
border-radius: 10px;
transition: all 0.4s linear;

border: 1px solid blue;
cursor: pointer;
&:hover{
  color: ivory;
  background:#113CFC ;
}

`
const Span=styled.span`
  color: #2F86A6;
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
 

export default SingleProduct
