import React from 'react'
import styled from 'styled-components'
const Loader = () => {
  return (
    <Wrapper>
      <LoaderWrapper>
        <LoaderDiv/>
        <LoaderDiv/>
      </LoaderWrapper>  
    </Wrapper>
  )
}
const Wrapper=styled.div`
  max-width: 960px;
  margin: 200px auto;
  display: flex;
  justify-content:center;
`
const LoaderWrapper=styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`
const LoaderDiv=styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 10px solid transparent;
  border-top-color: #B2F9FC ;
  /* border-left-color: #B2F2FC ; */

  border-radius: 50%;
  animation: loaderOne 1.3s linear infinite;
  &:last-child{
    border: 10px solid transparent;
    border-bottom-color: #B2F9FC ;
    /* border-right-color:#B2F8EC; */
    animation: loaderTwo 1.3s linear infinite;
  }

  @keyframes loaderOne{
    0%{
      transform: rotate(0deg);
      border-width: 10px;

    }
    50%{
      transform: rotate(180deg);
      border-width: 2px;
      
    }
    100%{
      transform: rotate(360deg);
      border-width: 10px;
      
    }
  }
  @keyframes loaderTwo{
    0%{
      transform: rotate(0deg);
      border-width: 2px;

    }
    50%{
      transform: rotate(180deg);
      border-width: 10px;
      
    }
    100%{
      transform: rotate(360deg);
      border-width: 2px;
      
    }
  }
`


export default Loader



// import React from 'react'
// import styled from   'styled-components'
// const Loader = () => {
//   return (
//     <Wrapper>
//       <Spinner>
//         <Ring/>
//         <Span>loading...</Span>
//       </Spinner>
//     </Wrapper>
//   )
// }
// const Wrapper=styled.div`
//   width: 100vw;
//   height: 100vh;
//   font-family: Verdana, Geneva, Tahoma, sans-serif;
//   color: white;
  
//   background: white;
// `
// const Ring=styled.div`
//   position: absolute;
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background: #B2F6DE;
//   animation:  ring 2s linear infinite;
//   @keyframes ring{
//     0%{
//       transform: rotate(0deg);
//       box-shadow: 1px 5px 2px #e65c00;


//     }
//     25%{
//       transform: rotate(90deg);
//       box-shadow: 1px 6px 2px pink;


//     }
    
//     50%{
//       transform: rotate(180deg);
//       box-shadow: 1px 6px 2px #18b201;


//     }
//     75%{
//       transform: rotate(270deg);
//       box-shadow: 1px 6px 2px #e65c00;


//     }
//     100%{
//       transform: rotate(360deg);
//       box-shadow: 1px 5px 2px #e65c00;


//     }

//   }

//   &::before{
//     position: absolute;
//     content: "";
//     left: 0;
//     top: 0;
//     height: 100%;
//     width: 100%;
//     border-radius: 50%;
//     box-shadow: 0 0 5px rgba(255,255,255,.3);

//   }

// `
// const Spinner=styled.div`
//   display:flex;
//   min-height:100vh;
//   text-align:center;
//   align-items: center;
//   justify-content: center;
//   align-items: center;
// `
// const Span=styled.span`
//   /* color: #737373; */
//   font-size: 24px;
//   letter-spacing: 1px;
//   text-transform: uppercase;
//   z-index: 1000;
//   line-height: 200px;
//   animation: fade  1.5s ease-in infinite;
//   @keyframes fade{
//     50%{
//       color: #F037A5;
//     }
//   }
// `

// export default Loader




