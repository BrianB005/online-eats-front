import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeCategory } from '../redux/actions/categoryActions'
// import Header from './Header'
const CategoryItem = ({name}) => {
  const [category,setCategory]=useState("")
  // const [active,setActive]=useState("")
  const dispatch=useDispatch()
  const handleClick=(e)=>{
    setCategory(e.target.innerText)
    dispatch(changeCategory(category))
  }
  // console.log(category);
  return (
    <div>
      <Item   onClick={handleClick}>{name}</Item>
    </div>  
  )
}
const Item =styled.div`
  position: relative;
  width: fit-content;
  color: #082032;
  padding: 12px 0 ;
  cursor: pointer;
  &::after{
    content:"";
    position:absolute;
    width:96%;
    height:4px;
    background:#082032;
    border-radius:4px;
    left: 0;
    top:38px;
    opacity:0;

    /* opacity: ${props=>props.active==="active"&&1}; */

  }
  &:hover{
      opacity:0.8;
      &::after{
          opacity:1;
      }
  }
`

export default CategoryItem
