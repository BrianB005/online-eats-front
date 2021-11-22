import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCategory } from "../redux/actions/categoryActions";
// import Header from './Header'
const CategoryItem = ({ category }) => {
  const [currentCategory, setCategory] = useState("");
  const [active, setActive] = useState(null);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    setCategory(e.target.innerText);
    setActive(e.currentTarget.parentElement);
    dispatch(changeCategory(currentCategory));
  };
  // console.log(active);
  return (
    <Wrapper>
      <Item onClick={handleClick} className={active ? "active" : ""}>
        {category}
      </Item>
    </Wrapper>
  );
};

const Item = styled.div`
  position: relative;
  width: fit-content;
  color: #082032;
  padding: 12px 0;
  text-transform: capitalize;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    width: 96%;
    height: 4px;
    background: #082032;
    border-radius: 4px;
    left: 0;
    top: 38px;
    opacity: 0;

    opacity: ${(props) => props.active === "active" && 1};
  }
  &:hover {
    opacity: 0.8;
    &::after {
      opacity: 1;
    }
  }
`;

const Wrapper = styled.div`
  &.active {
    & {
      ${Item} {
        color: red;
        &:after {
          opacity: 1;
        }
      }
    }
  }
`;

export default CategoryItem;
