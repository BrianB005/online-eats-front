import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { links, socials } from ".././data";
import { Link } from "react-router-dom";
import Social from "./Social";

import { logout } from "../redux/actions/userActions";
import SidebarItem from "./SidebarItem";
import { closeSidebar } from "../redux/actions/sideBarActions";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = () => {
  const dispatch = useDispatch();

  const sidebar = useSelector((state) => state.sidebar);
  const isSidebarOpen = sidebar.sideBarOpen;
  const closeSideBar = () => {
    dispatch(closeSidebar());
  };
  const userInfo = useSelector((state) => state.userLogin.userInfo);

  // console.log(userInfo);
  const signout = () => {
    dispatch(logout());
    dispatch(closeSidebar);
  };
  return (
    <SidebarWrapper open={isSidebarOpen ? "open" : ""}>
      <Aside>
        <SidebarLinks>
          <Icon onClick={closeSideBar}>
            <FaTimes />
          </Icon>
          {links.map((link) => {
            return <SidebarItem key={link.id} {...link} />;
          })}
        </SidebarLinks>
        <Links>
          {userInfo ? (
            <NavBarLink onClick={signout}>Logout</NavBarLink>
          ) : (
            <>
              <Link to="/login">
                <NavBarLink onClick={closeSideBar}>Login</NavBarLink>
              </Link>
              <Link to="/register">
                <NavBarLink onClick={closeSideBar}>Register</NavBarLink>
              </Link>
            </>
          )}
          <Link to="/account">
            <NavBarLink onClick={closeSideBar}>
              {userInfo ? userInfo?.user?.name : "Account"}
            </NavBarLink>
          </Link>
        </Links>
        <Socials>
          {socials.map((social) => {
            return <Social key={social.id} {...social} />;
          })}
        </Socials>
      </Aside>
    </SidebarWrapper>
  );
};
const SidebarWrapper = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  // background:yellow;
  position: fixed;
  z-index: 2000;
  top: 55px;
  left: 0;
  height: 92vh;
  transition: all 0.9s ease-out;
  transform: translateX(-100%);
  transform: ${(props) => props.open === "open" && "translateX(0)"};
`;
const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Aside = styled.aside`
  width: 90vw;
  max-width: 300px;
  display: grid;
  // height:85vh;
  height: 100%;
  flex-direction: column;
  grid-template-rows: auto, 1fr, auto;
  /* background:rgba(0,0,0,0.2); */
  background: white;
  padding: 40px 30px;
  color: #ff0075;
`;
const Socials = styled.div`
  display: flex;
  align-self: flex-end;
  // justify-self:flex-end;
`;
const Icon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: red;
  cursor: pointer;
  font-size: 29px;
  &:hover {
    color: dark-red;
    opacity: 0.7;
  }
`;

const Links = styled.ul``;
const NavBarLink = styled.li`
  margin-bottom: 15px;
  cursor: pointer;
  width: fit-content;
  position: relative;
  /* z-index:2000; */
  &::after {
    content: "";
    position: absolute;
    width: 98%;
    z-index: 1000;
    left: 2px;
    height: 4px;
    background: #082032;
    border-radius: 6px;
    top: 28px;
    opacity: 0;
    &:hover {
      &::after {
        opacity: 1;
      }
    }

    /* opacity: ${(props) => props.activeClassName && 1}; */
  }
`;
export default Sidebar;
