import React from 'react'


import styled from 'styled-components'
const Alert = ({message}) => {
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     removeAlert()
  //   }, 3000);
  //   return () => clearTimeout(timeout);
  // });

  return (
    <Wrapper>
     <AlertContainer >{message}</AlertContainer>
    </Wrapper>
  )
}
const Wrapper=styled.div`
  display: flex;
  color: aquamarine;
  justify-content: center;
  z-index:1000;
  /* position: relative; */
  width: 100vw;
  position:fixed;
  height: 100vh;
`
const AlertContainer=styled.h4`
padding: 5px 0;
background: blue;
width: 80%;
height: 24px;
position: absolute;
color: white;
top: 100px;
max-width: 600px;
display: flex;
align-items: center;
justify-content: center;

text-align: center;
/* /* background: ${({danger})=>danger&& "lightred"};
background: ${({success})=>success&& "lightgreen"};
background: ${({info})=>info&& "lightblue"}; */
background: ${(props)=>props.type==="danger"&& "lightred"}; 

`

export default Alert;
