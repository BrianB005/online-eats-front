import React from 'react'
import styled from 'styled-components'
const Social = ({url,icon}) => {
    return (
        <Icon  href={url}>{icon}</Icon>
    )
}
const Icon=styled.a`
    color:#88E0EF;
    font-size:40px;
    
    padding-right:8px;
    padding-bottom:20px;
    &:hover{
        transform:scale(1.1);
        color:#99DDCC;
    }

`

export default Social
