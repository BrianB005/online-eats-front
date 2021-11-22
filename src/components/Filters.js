import React, { useEffect } from "react";
// import { useState } from 'react';
// import { categories } from "../testData";
import CategoryItem from "./CategoryItem";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCatgories } from "../redux/actions/productActions";
const Filters = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatgories());
  }, [dispatch]);
  const allCategories = useSelector((state) => state.categories?.categories);

  return (
    <Wrapper>
      {allCategories?.map((category) => {
        return <CategoryItem key={category} category={category} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  max-width: 450px;
  justify-content: space-between;
  width: 96vw;
  display: flex;
  margin: 0 auto;
`;

export default Filters;
