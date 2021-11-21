import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBars, FaSearch, FaShoppingBasket } from "react-icons/fa";
import useScrollPosition from "@react-hook/window-scroll";
import { openSidebar } from "../redux/actions/sideBarActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/actions/userActions";
import { getProducts } from "../redux/actions/productActions";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollY = useScrollPosition(20);
  useEffect(() => {
    setIsScrolled(scrollY > 60 ? "true" : "false");
  }, [scrollY]);
  const dispatch = useDispatch();
  const openSideBar = () => {
    dispatch(openSidebar());
  };
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const cart = useSelector((state) => state.cart);
  // console.log(userInfo);

  const signout = () => {
    dispatch(logout());
  };
  const [searchTerm, setSearchTerm] = useState("");
  if (searchTerm) {
    dispatch(getProducts(searchTerm));
  }

  return (
    <Wrapper fixed={isScrolled}>
      <NavContent>
        <Left>
          <SideBarToggle onClick={() => openSideBar()}>
            <FaBars />
          </SideBarToggle>
          <Link to="/">
            <Logo>OnlineEats</Logo>
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input
              placeholder="Search dish/drink by name or category"
              autoFocus
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </SearchContainer>
        </Center>
        <Links>
          <Link to="/about">
            <NavBarLink>About</NavBarLink>
          </Link>
          <Link to="/contact">
            <NavBarLink>Contact</NavBarLink>
          </Link>
          {userInfo ? (
            <NavBarLink onClick={signout}>Logout</NavBarLink>
          ) : (
            <div style={{ display: "flex" }}>
              <Link to="/login">
                <NavBarLink>Login</NavBarLink>
              </Link>
              <Link to="/register">
                <NavBarLink>Register</NavBarLink>
              </Link>
            </div>
          )}
          <Link to="/account">
            <NavBarLink>
              {userInfo ? userInfo?.user?.name : "Account"}
            </NavBarLink>
          </Link>
        </Links>
        <Right>
          <Cart>
            {userInfo?.user?.role === "admin" && <Link to="/admin">Admin</Link>}
            <Link to="/cart">
              <FaShoppingBasket />
            </Link>
            <CartAmount>{cart?.cartItems?.length}</CartAmount>
          </Cart>
        </Right>
      </NavContent>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background: ${(props) =>
    props.fixed === "true" ? "lightseagreen" : "#B2F9FC"};
  height: 55px;
  transition: all 1s linear;
  display: flex;
  z-index: 2000;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;
const NavContent = styled.div`
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  width: 90%;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
const SideBarToggle = styled.div`
  margin-right: 15px;
  display: flex;
  text-align: center;
  cursor: pointer;
  font-size: 19px;
  transition: all 0.3s linear;
  margin-top: 6px;
  &:hover {
    color: darkblue;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
const Logo = styled.h1`
  color: #082032;
  text-shadow: 3px 2px 0px #fff, 4px 3px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const Center = styled.div`
  flex: 1;
`;
const SearchContainer = styled.div`
  display: flex;
  /* background: #B2F9FC; */
  background: inherit;
  width: 80%;
  margin: auto;
`;
const Input = styled.input`
  border-top-left-radius: 19px;
  border-bottom-left-radius: 19px;
  padding: 8px 12px;
  width: 100%;
  /* padding: 6px; */

  border: none;
  &:focus {
    outline: none;
  }
`;
const SearchIcon = styled.div`
  padding: 6px;
  border-top-right-radius: 19px;
  border-bottom-right-radius: 19px;
  padding-right: 8px;
  background: white;
  /* color: #B2F9FC; */
  cursor: pointer;
  &:hover {
    background: #88e0ef;
  }
`;
const Links = styled.ul`
  display: flex;
  /* list-style-type: none; */

  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const NavBarLink = styled.li`
  margin-right: 30px;
  cursor: pointer;
  width: fit-content;
  position: relative;
  /* z-index:2000; */
  &::after {
    content: "";
    position: absolute;
    width: 98%;
    left: 2px;
    height: 4px;
    background: #082032;
    border-radius: 6px;
    top: 20px;
    opacity: 0;
    &:hover {
      &::after {
        opacity: 1;
      }
    }

    /* opacity: ${(props) => props.activeClassName && 1}; */
  }
`;
const Right = styled.div``;
const CartAmount = styled.p`
  position: absolute;
  top: -16px;

  right: 0;
  color: #082032;
  font-weight: 700;
  font-size: 19px;
`;
const Cart = styled.div`
  cursor: pointer;
  position: relative;
  font-size: 18px;
  &:hover {
    color: #000d6b;
  }
`;
export default Navbar;
