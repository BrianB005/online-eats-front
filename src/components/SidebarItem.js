import React from 'react';
import { useDispatch} from 'react-redux';
import { Link } from 'react-router-dom'
import { closeSidebar } from '../redux/actions/sideBarActions';
import styled from 'styled-components'
const SidebarItem = ({text,url}) => {
    const dispatch=useDispatch()
    const closeSideBar=()=>{
        dispatch(closeSidebar())
    }
    return (
        <Link onClick={closeSideBar} to={url}><Item >{text}</Item></Link>
    )
}
const Item=styled.div`
    position:relative;
    padding-bottom:15px;
    display:flex;
    width:fit-content;
    text-align:center;
    align-items:center;
    padding-right:4px;
    cursor:pointer;
    &::after{
        content:"";
        position:absolute;
        width:96%;
        height:4px;
        background:#082032;
        border-radius:4px;
        top:22px;
        opacity:0;

    }
    &:hover{
        opacity:0.8;
        &::after{
            opacity:1;
        }
    }
`

export default SidebarItem
