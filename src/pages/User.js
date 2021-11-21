import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateRole } from "../redux/actions/adminActions";
const User = () => {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getUser(params.id));
  }, [dispatch, params]);
  // console.log(params.id);

  const user = useSelector((state) => state.admin);
  // console.log(user);
  const handleClick = () => {
    dispatch(updateRole({ id: params.id, role: "vendor" }));
  };
  if (user?.loading) {
    return <Loader />;
  }
  return (
    <Wrapper>
      <Column>{user?.user?.user?.name}</Column>
      <Column>{user?.user?.user?.email}</Column>
      <Column>{user?.user?.user?.createdAt?.split("T")[0]}</Column>
      <Button onClick={handleClick}>Make Vendor</Button>
      <Button>Make Admin</Button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 60px;
  display: flex;
  margin-top: 70px;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  text-align: center;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const Column = styled.div`
  /* width: 160px; */
  margin-right: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const Button = styled.button`
  margin: auto;
  margin-top: 9px;
  border-radius: 8px;
  transition: all 0.7s linear;
  border: none;
  display: flex;
  justify-content: center;
  padding: 8px 16px;
  background-color: #082032;
  &:hover {
    opacity: 0.8;
  }
  color: white;
  cursor: pointer;
`;

export default User;
