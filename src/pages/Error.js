import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Error = () => {
  return (
    <Wrapper>
      Oops!!This url does not exist.
      <Link to="/"><BackButton>Back To Products</BackButton></Link>
    </Wrapper>
  )
}
const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  margin-top: 30vh;
  font-size: 30px;
  font-weight: 800;
  color: #082032;
`

const BackButton=styled.div`
padding:10px 14px;
margin-top:19px;
font-size: 18px;
width:fit-content;
cursor:pointer;
border-radius:6px;
border:transparent;
color:whitesmoke;
margin-right:auto;
margin-left:auto;
// align-self:center;
background:#082032;
&:hover{
    opacity:0.8;
    /* color:blue; */
}
`

export default Error
