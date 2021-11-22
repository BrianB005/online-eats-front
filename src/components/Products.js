import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
// import Alert from './Alert';
// import { testProducts } from '../testData'
import styled from "styled-components";
import Loader from "../components/Loader";
import { getProducts } from "../redux/actions/productActions";
const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    //eslint-disable-next-line
  }, []);

  const allProducts = useSelector((state) => state.products);
  const { loading, products } = allProducts;
  console.log(products);
  if (loading) {
    return <Loader />;
  }
  return (
    <Wrapper>
      {products &&
        products.map((product) => {
          return <Product key={product._id} {...product} />;
          // return <Alert removeAlert message="Hello from app"/>
        })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  max-width: 1330px;
  padding-top: 10px;
  margin-right: auto;

  margin-left: auto;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  /* @media screen and (max-width:600px){
        grid-template-columns: 1fr;
        
    }
     */
`;

export default Products;
