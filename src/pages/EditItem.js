import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

// import { product } from '../testData';
import { getProduct, updateItem } from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";
const EditItem = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(productId));
    return () => dispatch(getProduct());
  }, [dispatch, productId]);

  const updateProduct = useSelector((state) => state.updateProduct);
  const singlProduct = useSelector((state) => state.product);
  const { product, loading } = singlProduct;

  const [name, setName] = useState(product?.name);
  const [price, setPrice] = useState(product?.price);
  const [category, setCategory] = useState(product?.category);
  const [miniDescription, setMiniDescription] = useState(
    product?.miniDescription
  );
  const [description, setDescription] = useState(product?.description);
  const [image, setImage] = useState(product?.image);
  if (loading) {
    return <Loader />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateItem({
        product: {
          image,
          description,
          miniDescription,
          category,
          name,
          price,
        },
        productId,
      })
    );
  };
  return (
    <ItemWrapper>
      <Link to="/">
        <BackButton>Back to All</BackButton>
      </Link>
      <Wrapper>
        <ImageContainer>
          {" "}
          <Image src={product?.image} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product?.name}</Title>
          <Category>{product?.category}</Category>
          <Price>
            Kshs <Span>{product?.price}</Span>
          </Price>
          <Desc>{product?.miniDescription}</Desc>
          <Desc>{product?.description}</Desc>
        </InfoContainer>
      </Wrapper>
      <EditContainer>
        <Header>Update this product</Header>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <Label htmlFor="">Product Name</Label>
            <Input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="">Product Price</Label>
            <Input
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="">Product Image</Label>
            <Input
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="">Product Category</Label>
            <Input
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category (lowercase)"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="">Product minidescription</Label>
            <Input
              name="miniDescription"
              value={miniDescription}
              onChange={(e) => setMiniDescription(e.target.value)}
              placeholder="Minidescription"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="">Product Description</Label>
            <TextArea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              rows={7}
            />
          </InputWrapper>

          <EditButton>
            {updateProduct.loading ? "Updating..." : "Update Item"}
          </EditButton>
        </Form>
      </EditContainer>
    </ItemWrapper>
  );
};
const ItemWrapper = styled.div`
  margin-top: 70px;
`;
const Wrapper = styled.div`
  width: 400px;

  /* background: lightgray; */
  border-radius: 6px;
  transition: all 0.3s linear;
  box-shadow: 1px 4px 13px lightgray;
  &:hover {
    box-shadow: 2px 4px 18px gray;
  }
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 6px;
  @media screen and (max-width: 600px) {
    width: 90vw;
    margin: 17px auto;
  }
  @media screen and (max-width: 700px) {
    width: 90vw;
    margin: 17px auto;
  }
`;
const Form = styled.form`
  width: 96vw;
  max-width: 500px;
  margin: 20px auto;
`;

const Category = styled.h3`
  text-transform: capitalize;
  margin-bottom: 4px;
`;
const ImageContainer = styled.div`
  flex: 2;

  &:hover {
    opacity: 0.9;
  }
`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 5px 12px;
`;
const Title = styled.h4`
  color: #082032;
  margin-bottom: 13px;
`;
const Price = styled.h5`
  color: #000000;
  margin-bottom: 15px;
`;
const Desc = styled.p`
  margin-bottom: 6px;
  font-size: 13px;
`;

const Span = styled.span`
  color: #2f86a6;
`;
const BackButton = styled.button`
  padding: 5px 15px;
  background: #b2f9fc;
  border-radius: 12px;
  transition: all 0.4s linear;
  display: flex;
  align-self: center;
  margin: 20px auto;
  border: 1px solid blue;
  cursor: pointer;
  &:hover {
    color: ivory;
    background: #113cfc;
  }
`;
const Input = styled.input`
  outline: none;
  padding: 4px 6px;
  border-radius: 4px;
  border: 1px solid cadetblue;
`;
const Label = styled.label`
  padding-bottom: 8px;
`;
const TextArea = styled.textarea`
  margin-bottom: 8px;
  border: 1px solid cadetblue;
  border-radius: 4px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.h3`
  font-size: 19px;
  margin-top: 20px;
  margin-left: 40vw;
  text-decoration: underline 2px;
  color: #082032;
`;
const EditButton = styled.button`
  padding: 8px 14px;
  margin-top: 9px;
  font-size: 15px;
  border: 1px solid chartreuse;
  border-radius: 4px;
  cursor: pointer;
  background: lightcyan;
  transition: all 0.7s linear;
  &:hover {
    background: cyan;
  }
`;
const EditContainer = styled.div``;

export default EditItem;
