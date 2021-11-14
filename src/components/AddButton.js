import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const AddButton = ({children}) => {
  return (
    <Link to='/add'><Button>{children}</Button></Link>
  )
}
const Button=styled.button`
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

export default AddButton
