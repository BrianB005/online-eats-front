import React from 'react'
import styled from 'styled-components';
import { addToCart } from '../redux/actions/cartActions';
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
const Product = ({_id,miniDescription,name,price,image}) => {
  const userInfo=useSelector((state)=>state.userLogin.userInfo)
  const dispatch=useDispatch();
  // console.log(_id);
  const addItemToCart=(productId)=>{
    dispatch(addToCart(productId))
    // console.log(productId);
    
  }
  return (
    <Wrapper>
      <Link to={`products/find/${_id}`}><ImageContainer>      <Image src={image}/>
      
      {userInfo&&userInfo.user&&userInfo.user.role==="vendor"&&
      <AdminButtons>
        <Link to={`/products/edit/${_id}`}><UpdateButton>Update</UpdateButton></Link>
        <DeleteButton>Delete</DeleteButton>
      </AdminButtons>}
      </ImageContainer></Link>
      <InfoContainer>
      <Link to={`products/find/${_id}`}><Title>{name}</Title></Link>
        <Price>Kshs <Span>{price}</Span></Price>
        <Desc>{miniDescription.substr(0,70)}</Desc>
        <ButtonsContainer>
          <Link to={`products/find/${_id}`}><Button>Details</Button></Link>
          <Button onClick={()=>addItemToCart(_id)}>Cart+</Button>
        </ButtonsContainer>
      </InfoContainer>
    </Wrapper>
  )
}
const Wrapper=styled.div`
  width: 400px;
  margin-bottom: 17px;
  margin-right: 17px;
  /* height: 300px; */
  /* background: lightgray; */
  border-radius: 6px;
  transition: all 0.3s linear;
  box-shadow: 1px 4px 13px lightgray ;
  &:hover{
    box-shadow: 2px 4px 18px gray;
  }
  /* margin-left: auto;
  margin-right: auto; */
  display: flex;
  @media screen and (max-width:600px){
    width:90vw;
    margin:17px  auto;
  }
  @media screen and (max-width:700px){
    width:85vw;
    margin:17px  auto;
  }
  



`
const ImageContainer=styled.div`
  flex: 1;
  cursor: pointer;
  position: relative;
  height: 250px;
  object-fit: contain;
  &:hover{
    opacity: 0.9;
  }

`
const Image=styled.img`
  width: 96%;
  object-fit: cover;
  height: 80%;
`
const AdminButtons=styled.div`
  position: absolute;
  top: 200px;
  margin-top: 9px;


`
const DeleteButton=styled.button`
  padding: 4px 13px;
  background:#B2F9FC ;
  border-radius: 10px;
  transition: all 0.4s linear;
  background: red;
  border: 1px solid blue;
  cursor: pointer;
  &:hover{
    color: ivory;
    /* background:#113CFC ; */
  }
`
const UpdateButton=styled.button`
  padding: 4px 13px;
  background:#B2F9FC ;
  border-radius: 10px;
  transition: all 0.4s linear;
  background: lightgreen;
  border: 1px solid blue;
  cursor: pointer;
  margin-left: 8px;
  margin-right: 17px;
  &:hover{
    color: #082032;
    /* background:#113CFC ; */
  }  
`

const InfoContainer=styled.div`
  flex: 1;
  padding: 5px 12px;
`
const Title=styled.h4`
  cursor: pointer;
  color: #082032;
  margin-bottom: 13px;
  &:hover{
    text-decoration: underline;
    
  }
`
const Price=styled.h5`
color: #000000;
margin-bottom: 15px;
`
const Desc=styled.p`
  margin-bottom: 9px;
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


export default Product